/* ============================================================
  SHOW TECH SOLUTIONS — main.js
  Módulos reutilizables en todas las páginas
   ============================================================ */

/* ── 1. SCROLL REVEAL ── */
const initReveal = () => {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('on'), i * 90);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });
  els.forEach(el => obs.observe(el));
};

/* ── 2. NAVBAR ── */
const initNavbar = () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Scroll blur
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link (solo en index, por ID de sección)
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.navbar__links a[href*="#"]');
  if (sections.length && links.length) {
    const linkObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.remove('active'));
          const active = document.querySelector(`.navbar__links a[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.40 });
    sections.forEach(s => linkObs.observe(s));
  }

  // Active link por página actual
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.includes(page) && !href.includes('#')) {
      a.classList.add('active');
    }
  });
};

/* ── 3. HAMBURGER ── */
const initHamburger = () => {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    const bars = btn.querySelectorAll('span');
    if (open) {
      bars[0].style.cssText = 'transform:rotate(45deg) translate(4.5px,4.5px)';
      bars[1].style.cssText = 'opacity:0;width:0';
      bars[2].style.cssText = 'transform:rotate(-45deg) translate(4.5px,-4.5px)';
    } else {
      bars.forEach(b => b.style.cssText = '');
    }
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelectorAll('span').forEach(b => b.style.cssText = '');
    });
  });
};

/* ── 4. CONTADORES ── */
const countUp = (el, target, suffix = '', duration = 1800) => {
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(p * target) + (p === 1 ? suffix : '');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const initCounters = () => {
  const wrap = document.querySelector('.hero__stats');
  if (!wrap) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.n[data-target]').forEach(n => {
          countUp(n, +n.dataset.target, n.dataset.suffix || '');
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(wrap);
};

/* ── 5. FORMULARIO ── */
const initForm = () => {
  const btn = document.querySelector('.fsubmit');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const orig = btn.textContent;
    btn.textContent = 'Enviando…';
    btn.disabled = true;
    btn.style.opacity = '.7';
    setTimeout(() => {
      btn.textContent = '¡Enviado con éxito! ✓';
      btn.style.opacity = '1';
      btn.style.background = 'linear-gradient(135deg,#2ecc71,#27ae60)';
      btn.style.boxShadow = '0 6px 24px rgba(46,204,113,.3)';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.boxShadow = '';
        btn.disabled = false;
      }, 3200);
    }, 1200);
  });
};

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNavbar();
  initHamburger();
  initCounters();
  initForm();
});