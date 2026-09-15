const deck = document.getElementById('deck');
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsNav = document.getElementById('deckDots');
const counterEl = document.getElementById('deckCounter');
const progressEl = document.getElementById('deckProgress');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let current = 0;
let wheelLock = false;
let touchStartY = null;

function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, stars;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.floor((w * h) / 8500);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.55 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.006,
      drift: Math.random() * 0.06 + 0.01,
    }));
  }
  window.addEventListener('resize', resize);
  resize();

  if (reduceMotion) {
    ctx.fillStyle = '#eef1f8';
    stars.forEach((s) => {
      ctx.globalAlpha = s.baseAlpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    return;
  }

  let t = 0;
  function frame() {
    t += 1;
    ctx.clearRect(0, 0, w, h);
    stars.forEach((s) => {
      const alpha = Math.max(0, Math.min(1, s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.25));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#eef1f8';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      s.y += s.drift;
      if (s.y > h) s.y = 0;
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
initStarfield();

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
  dot.addEventListener('click', () => goTo(i));
  dotsNav.appendChild(dot);
});
const dots = Array.from(dotsNav.querySelectorAll('.dot'));

function pad(n) {
  return String(n).padStart(2, '0');
}

function formatNumber(value, decimals, thousands) {
  let s = value.toFixed(decimals);
  if (decimals > 0) s = s.replace('.', ',');
  if (thousands) {
    const parts = s.split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    s = parts.join(',');
  }
  return s;
}

function animateCount(el) {
  const to = parseFloat(el.dataset.countTo);
  if (Number.isNaN(to)) return;
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const thousands = el.dataset.thousands === 'true';
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';

  if (reduceMotion) {
    el.textContent = prefix + formatNumber(to, decimals, thousands) + suffix;
    return;
  }

  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + formatNumber(to * eased, decimals, thousands) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + formatNumber(to, decimals, thousands) + suffix;
  }
  requestAnimationFrame(tick);
}

function goTo(index) {
  const clamped = Math.max(0, Math.min(slides.length - 1, index));
  if (clamped === current && slides[current].classList.contains('active')) return;
  current = clamped;

  slides.forEach((s, i) => s.classList.toggle('active', i === current));
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
  counterEl.textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
  progressEl.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;

  slides[current].querySelectorAll('[data-count-to]').forEach(animateCount);
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

window.addEventListener('keydown', (e) => {
  if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
    e.preventDefault();
    next();
  } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
    e.preventDefault();
    prev();
  } else if (e.key === 'Home') {
    e.preventDefault();
    goTo(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    goTo(slides.length - 1);
  } else if (/^[1-9]$/.test(e.key)) {
    const idx = parseInt(e.key, 10) - 1;
    if (idx < slides.length) goTo(idx);
  }
});

function innerScrollEdge(slide, direction) {
  const inner = slide.querySelector('.slide-inner');
  if (!inner || inner.scrollHeight <= inner.clientHeight + 1) return true;
  if (direction > 0) return inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 1;
  return inner.scrollTop <= 0;
}

deck.addEventListener('wheel', (e) => {
  const direction = e.deltaY > 0 ? 1 : -1;
  if (!innerScrollEdge(slides[current], direction)) return;
  e.preventDefault();
  if (wheelLock) return;
  if (direction > 0) next(); else prev();
  wheelLock = true;
  setTimeout(() => { wheelLock = false; }, 650);
}, { passive: false });

deck.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

deck.addEventListener('touchend', (e) => {
  if (touchStartY === null) return;
  const delta = touchStartY - e.changedTouches[0].clientY;
  touchStartY = null;
  if (Math.abs(delta) < 48) return;
  const direction = delta > 0 ? 1 : -1;
  if (!innerScrollEdge(slides[current], direction)) return;
  if (direction > 0) next(); else prev();
}, { passive: true });

goTo(0);
