// ── SLIDE-BASED NAVIGATION ──
const wrapper = document.getElementById('page-wrapper');
const navbar  = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const goHome    = document.getElementById('goHome');

// Slides: hero, about, projects, impact, events, cta, footer
const slides = Array.from(wrapper.children).filter(el =>
  el.tagName === 'SECTION' || el.tagName === 'FOOTER' || el.classList.contains('cta-section')
);

// ── DOT INDICATORS ──
const dotsContainer = document.createElement('div');
dotsContainer.className = 'slide-dots';
const dots = slides.map((slide, i) => {
  const dot = document.createElement('button');
  dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
  dot.addEventListener('click', () => scrollToSlide(i));
  dotsContainer.appendChild(dot);
  return dot;
});
document.body.appendChild(dotsContainer);

function scrollToSlide(index) {
  slides[index].scrollIntoView({ behavior: 'smooth' });
}

// ── ACTIVE DOT on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = slides.indexOf(entry.target);
      if (idx >= 0) {
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        // show floating buttons when not on first slide
        const show = idx > 0;
        backToTop.classList.toggle('visible', show);
        goHome.classList.toggle('visible', show);
        // nav scrolled style
        navbar.classList.toggle('scrolled', idx > 0);
      }
    }
  });
}, { root: wrapper, threshold: 0.5 });

slides.forEach(s => observer.observe(s));

// ── BACK TO TOP ──
backToTop.addEventListener('click', () => scrollToSlide(0));
goHome.addEventListener('click', (e) => { e.preventDefault(); scrollToSlide(0); });

// ── NAV LINK CLICKS ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') { e.preventDefault(); scrollToSlide(0); return; }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  });
});

// ── HAMBURGER MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMenu() { mobileMenu.classList.remove('open'); }
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});