// ── DISABLE FREE SCROLLING ──
const wrapper = document.getElementById('page-wrapper');

wrapper.addEventListener('wheel', e => e.preventDefault(), { passive: false });
wrapper.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

document.addEventListener('keydown', e => {
  const blocked = [' ', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'];
  if (blocked.includes(e.key)) e.preventDefault();
});

// ── SLIDE-BASED NAVIGATION ──
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

// ── INITIALISE SLIDE POSITIONS ──
slides.forEach((slide, i) => {
  slide.style.transform = i === 0 ? 'translateY(0)' : 'translateY(100vh)';
});

let currentSlide = 0;

function scrollToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  slides.forEach((slide, i) => {
    slide.style.transform = i < index  ? 'translateY(-100vh)'
                          : i === index ? 'translateY(0)'
                          :               'translateY(100vh)';
  });
  currentSlide = index;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  const show = index > 0;
  backToTop.classList.toggle('visible', show);
  goHome.classList.toggle('visible', show);
  navbar.classList.toggle('scrolled', index > 0);
}

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
      const idx = slides.indexOf(target);
      if (idx >= 0) scrollToSlide(idx);
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