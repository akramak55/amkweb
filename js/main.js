/* ============================================================
   AMK HEBBACHE IMMOBILIER — MAIN JS
   ============================================================ */

(function () {
  'use strict';

  // ─── NAVBAR SCROLL BEHAVIOUR ─────────────────────────────────
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // ─── MOBILE MENU ─────────────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on nav-link click (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── SCROLL FADE-IN ──────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            // Small stagger per element index within its parent
            const siblings = Array.from(entry.target.parentNode.children);
            const idx = siblings.indexOf(entry.target);
            const delay = Math.min(idx * 80, 320);

            setTimeout(function () {
              entry.target.classList.add('visible');
            }, delay);

            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ─── STAT COUNTER ANIMATION ──────────────────────────────────
  const statItems = document.querySelectorAll('.stat-item');

  function animateCounters() {
    statItems.forEach(function (item) {
      if (item.dataset.animated) return;
      item.dataset.animated = '1';

      const target  = parseInt(item.dataset.target, 10);
      const suffix  = item.dataset.suffix || '';
      const numEl   = item.querySelector('.stat-number');
      if (!numEl || isNaN(target)) return;

      const duration = 1800;
      const fps      = 60;
      const steps    = Math.round(duration / (1000 / fps));
      let   current  = 0;

      const timer = setInterval(function () {
        current += 1;
        const value = Math.round((current / steps) * target);
        numEl.textContent = value + suffix;

        if (current >= steps) {
          numEl.textContent = target + suffix;
          clearInterval(timer);
        }
      }, 1000 / fps);
    });
  }

  const statsSection = document.querySelector('.stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          animateCounters();
          statsObserver.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    statsObserver.observe(statsSection);
  }

  // ─── LUXURY CURSOR GLOW (desktop only) ───────────────────────
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mx = -999, my = -999;
    let cx = -999, cy = -999;
    let raf;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
    });

    function animateGlow() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      glow.style.left = cx + 'px';
      glow.style.top  = cy + 'px';
      raf = requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  // ─── PARALLAX ON HERO (subtle, desktop only) ─────────────────
  const heroImg = document.querySelector('.hero-img');

  if (heroImg && window.matchMedia('(min-width: 768px)').matches) {
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight * 1.5) {
        heroImg.style.transform = 'scale(1.09) translateY(' + (scrolled * 0.12) + 'px)';
      }
    }, { passive: true });
  }

  // ─── SMOOTH ANCHOR SCROLL ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10);
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    });
  });

  // ─── PROJECT CARD TILT (subtle, desktop only) ────────────────
  if (window.matchMedia('(pointer: fine) and (min-width: 900px)').matches) {
    document.querySelectorAll('.project-card.featured').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = 'translateY(-10px) rotateX(' + (-y * 3) + 'deg) rotateY(' + (x * 3) + 'deg)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

})();
