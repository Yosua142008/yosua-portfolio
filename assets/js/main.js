(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Replace the missing profile photo with a ready-made placeholder.
  const profileImage = $('#profileImage');
  if (profileImage) {
    profileImage.addEventListener('error', () => {
      if (!profileImage.dataset.fallback) {
        profileImage.dataset.fallback = 'true';
        profileImage.src = 'assets/images/profile-placeholder.svg';
      }
    }, { once: true });
  }

  // Optional contact links are enabled from assets/js/config.js.
  const config = window.PORTFOLIO_CONFIG || {};
  const whatsappLink = $('#whatsappLink');
  const facebookLink = $('#facebookLink');
  if (whatsappLink && typeof config.whatsapp === 'string' && config.whatsapp.trim()) {
    const number = config.whatsapp.replace(/[^0-9]/g, '');
    if (number) {
      whatsappLink.href = `https://wa.me/${number}`;
      whatsappLink.hidden = false;
    }
  }
  if (facebookLink && typeof config.facebook === 'string' && /^https:\/\//i.test(config.facebook.trim())) {
    facebookLink.href = config.facebook.trim();
    facebookLink.target = '_blank';
    facebookLink.rel = 'noopener noreferrer';
    facebookLink.hidden = false;
  }

  // Current year in footer.
  const year = $('#currentYear');
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile navigation.
  const menuToggle = $('#menuToggle');
  const mainNav = $('#mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Buka navigasi' : 'Tutup navigasi');
      mainNav.classList.toggle('open', !isOpen);
    });
    $$('.nav-link', mainNav).forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka navigasi');
    }));
    document.addEventListener('click', event => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Buka navigasi');
      }
    });
  }

  // Reveal-on-scroll animation with a fallback for older browsers.
  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Typewriter role text.
  const typedRole = $('#typedRole');
  const roles = ['Mahasiswa Teknik Informatika', 'Network Engineering Enthusiast', 'Tech Explorer'];
  if (typedRole && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let roleIndex = 0;
    let characterIndex = roles[0].length;
    let deleting = true;
    const typeNext = () => {
      const current = roles[roleIndex];
      if (deleting) {
        characterIndex--;
        typedRole.textContent = current.slice(0, Math.max(0, characterIndex));
        if (characterIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          window.setTimeout(typeNext, 300);
          return;
        }
        window.setTimeout(typeNext, 34);
      } else {
        const next = roles[roleIndex];
        characterIndex++;
        typedRole.textContent = next.slice(0, characterIndex);
        if (characterIndex >= next.length) {
          deleting = true;
          window.setTimeout(typeNext, 1700);
          return;
        }
        window.setTimeout(typeNext, 58);
      }
    };
    window.setTimeout(typeNext, 1900);
  }

  // Active section indicator.
  const sections = $$('main section[id]');
  const navLinks = $$('.nav-link');
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-38% 0px -52% 0px' });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Reading progress bar.
  const progress = $('#readingProgress');
  let ticking = false;
  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();

  // Subtle liquid-glass light follows the pointer on larger screens.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.liquid-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      });
    });
  }
})();
