/* ============================================================
   SHOW TECH SOLUTIONS — main.js
   Módulos reutilizables en todas las páginas.
   ============================================================ */

// ─── 1. SCROLL REVEAL ────────────────────────────────────────
const initReveal = () => {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('on'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  els.forEach(el => obs.observe(el));
};

// ─── 2. NAVBAR SCROLL & ACTIVE LINK ──────────────────────────
const initNavbar = () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Active link por sección visible
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.navbar__links a');

  const linkObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.navbar__links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.40 });

  sections.forEach(s => linkObs.observe(s));
};

// ─── 3. HAMBURGER MENU (MOBILE) ───────────────────────────────
const initHamburger = () => {
  const btn   = document.getElementById('hamburger');
  const menu  = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    // Anima las 3 barras
    const bars = btn.querySelectorAll('span');
    if (open) {
      bars[0].style.cssText = 'transform:rotate(45deg) translate(4px,4px)';
      bars[1].style.cssText = 'opacity:0';
      bars[2].style.cssText = 'transform:rotate(-45deg) translate(4px,-4px)';
    } else {
      bars.forEach(b => b.style.cssText = '');
    }
  });

  // Cierra al hacer clic en un enlace
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelectorAll('span').forEach(b => b.style.cssText = '');
    });
  });
};

// ─── 4. CONTADOR ANIMADO ─────────────────────────────────────
const countUp = (el, target, suffix = '', duration = 1800) => {
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(progress * target) + (progress === 1 ? suffix : '');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const initCounters = () => {
  const statsWrap = document.querySelector('.hero__stats');
  if (!statsWrap) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.n[data-target]').forEach(n => {
          countUp(n, +n.dataset.target, n.dataset.suffix || '');
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  obs.observe(statsWrap);
};

// ─── 5. FORMULARIO – feedback visual ─────────────────────────
const initForm = () => {
  const btn = document.querySelector('.fsubmit');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const original = btn.textContent;
    btn.textContent = 'Enviando…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '¡Mensaje enviado! ✓';
      btn.style.background = '#5cb85c';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
};

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNavbar();
  initHamburger();
  initCounters();
  initForm();
});
