/* ============================================================
   Celebri — Landing page
   Interações: navbar, menu mobile, scroll-reveal, contadores,
   abas de recursos e link ativo. JavaScript puro.
   ============================================================ */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Navbar: estado ao rolar ---------- */
  const nav = document.getElementById('nav');
  const onScrollNav = () => {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  const closeMenu = () => {
    links.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Link ativo na navegação ---------- */
  const navAnchors = Array.from(links.querySelectorAll('a[href^="#"]'));
  const sections = navAnchors
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const highlightNav = () => {
    const pos = window.scrollY + window.innerHeight * 0.3;
    let current = null;
    sections.forEach((sec) => {
      if (sec.offsetTop <= pos) current = sec.id;
    });
    navAnchors.forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  };
  highlightNav();
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ---------- Contadores animados ---------- */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  function animateCounter(el) {
    if (el.dataset.count === undefined) return;
    const target = parseFloat(el.dataset.count);
    if (Number.isNaN(target)) return;

    const suffix = el.dataset.suffix || '';

    if (el.dataset.zero) {
      el.textContent = el.dataset.zero;
      return;
    }
    if (prefersReduced) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1600;
    const isInt = Number.isInteger(target);
    const start = performance.now();

    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (isInt ? Math.round(val) : val.toFixed(1)) + suffix;
      if (p < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Scroll reveal + contadores dentro da seção ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || '0', 10);
        el.style.transitionDelay = (prefersReduced ? 0 : delay) + 'ms';
        el.classList.add('is-visible');

        // Anima contadores filhos (ou o próprio elemento, se for um contador)
        const counters = [];
        if (el.dataset.count !== undefined) counters.push(el);
        el.querySelectorAll('[data-count]').forEach((c) => counters.push(c));
        counters.forEach((c) => counterObserver.observe(c));

        revealObserver.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ---------- Abas de recursos ---------- */
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));

      document.querySelectorAll('.features').forEach((panel) => {
        panel.classList.toggle('is-hidden', panel.id !== 'tab-' + target);
      });

      // Revela o painel recém-exibido
      const active = document.getElementById('tab-' + target);
      if (active) {
        active.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      }
    });
  });

  /* ---------- Ano no rodapé ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
