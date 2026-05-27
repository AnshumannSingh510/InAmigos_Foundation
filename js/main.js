// ── STICKY NAV + FLOATING BUTTONS ──
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const goHome = document.getElementById('goHome');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  const show = window.scrollY > 400;
  backToTop.classList.toggle('visible', show);
  goHome.classList.toggle('visible', show);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
});

// ── HAMBURGER MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ── CLICK NAVIGATION — instant jump, no scrolling animation ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'instant' });
      closeMenu();
    }
  });
});