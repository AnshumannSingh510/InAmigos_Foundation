// ── TAB-BASED NAVIGATION (no scrolling) ──

const navbar   = document.getElementById('navbar');
const sections = document.querySelectorAll('.slide');
const backToTop = document.getElementById('backToTop');
const goHome    = document.getElementById('goHome');

// Show only the active section
function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  const isHome = id === 'hero';
  navbar.classList.toggle('scrolled', !isHome);
  backToTop.classList.toggle('visible', !isHome);
  goHome.classList.toggle('visible', !isHome);

  // Update dot indicators
  dots.forEach(d => d.classList.toggle('active', d.dataset.target === id));
}

// Start on hero
showSection('hero');

// ── NAV LINK CLICKS ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') { e.preventDefault(); showSection('hero'); closeMenu(); return; }
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target && target.classList.contains('slide')) {
      e.preventDefault();
      showSection(id);
      closeMenu();
    }
    // external links (donate etc) pass through normally
  });
});

// ── HOME / BACK BUTTONS ──
backToTop.addEventListener('click', () => showSection('hero'));
goHome.addEventListener('click', (e) => { e.preventDefault(); showSection('hero'); });

// ── HAMBURGER MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMenu() { mobileMenu.classList.remove('open'); }
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target))
    mobileMenu.classList.remove('open');
});

// ── DOT INDICATORS ──
const slideIds = Array.from(sections).map(s => s.id);
const dotsContainer = document.createElement('div');
dotsContainer.className = 'slide-dots';
const dots = slideIds.map(id => {
  const dot = document.createElement('button');
  dot.className = 'slide-dot';
  dot.dataset.target = id;
  dot.setAttribute('aria-label', `Go to ${id}`);
  dot.addEventListener('click', () => showSection(id));
  dotsContainer.appendChild(dot);
  return dot;
});
document.body.appendChild(dotsContainer);