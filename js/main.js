const navToggle = document.getElementById('navToggle');
const navlinks = document.getElementById('navlinks');

navToggle.addEventListener('click', () => {
  const isOpen = navlinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navlinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navlinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 0.06}s`;
  revealObserver.observe(el);
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// cursor spotlight
if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
  let raf = null;
  document.addEventListener('mousemove', (e) => {
    document.body.classList.add('has-mouse');
    if (raf) return;
    raf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
      raf = null;
    });
  });
}

// scroll progress bar
const scrollBar = document.getElementById('scrollBar');
const toTop = document.getElementById('toTop');
let scrollTicking = false;

function onScroll() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  if (scrollBar) scrollBar.style.width = `${pct}%`;
  if (toTop) toTop.classList.toggle('show', doc.scrollTop > 600);
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(onScroll);
    scrollTicking = true;
  }
}, { passive: true });
onScroll();

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

// scrollspy
const navAnchors = document.querySelectorAll('.navlinks a[data-nav]');
const sections = Array.from(navAnchors)
  .map((a) => document.getElementById(a.dataset.nav))
  .filter(Boolean);

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach((a) => a.classList.toggle('active', a.dataset.nav === entry.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach((sec) => spyObserver.observe(sec));
