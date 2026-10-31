(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const englishTranslations = {
    'HALO, SAYA': "HELLO, I'M",
    'Mahasiswa Teknik Informatika': 'Informatics Engineering Student',
    'Lagi membangun fondasi di dunia teknologi, senang mencoba hal baru, dan punya ketertarikan khusus pada': 'I am building my foundation in technology, enjoy trying new things, and have a particular interest in',
    'Lihat perjalanan saya': 'Explore my journey',
    'Hubungi saya': 'Contact me',
    'Curious mind, practical learner': 'Curious mind, practical learner',
    'Semester': 'Semester',
    'Study field': 'Study field',
    'Curiosity': 'Curiosity',
    'Currently learning': 'Currently learning',
    'Based in': 'Based in',
    'DESIGNED TO KEEP EXPLORING': 'DESIGNED TO KEEP EXPLORING',
    'SCROLL TO EXPLORE': 'SCROLL TO EXPLORE',
    'A LITTLE INTRODUCTION': 'A LITTLE INTRODUCTION',
    'KENALAN DULU, YUK': "LET'S GET TO KNOW EACH OTHER",
    'Bukan sekadar': 'More than',
    'ngoding, tapi': 'just coding, I',
    'suka ngulik.': 'love exploring.',
    'Saya': 'I am',
    'jaringan komputer': 'computer networking',
    ', biasa dipanggil Yos, Josh, atau Ocu. Saat ini saya mahasiswa semester 1 Program Studi Sarjana Terapan Teknik Informatika di Politeknik Negeri Manado.': ', also known as Yos, Josh, or Ocu. I am a first-semester student in the Applied Informatics Engineering program at Manado State Polytechnic.',
    'Saya tertarik dengan dunia teknologi dan senang belajar lewat praktik langsung. Mulai dari mencoba bahasa pemrograman, memahami cara kerja sistem, sampai menyusun dan menguji topologi jaringan. Kalau ada sesuatu yang belum jalan, biasanya saya justru penasaran untuk mencari tahu penyebabnya.': 'I am interested in technology and enjoy learning through hands-on practice. From trying programming languages and understanding how systems work to building and testing network topologies. When something does not work, I get curious about finding out why.',
    'Sekarang saya sedang membangun dasar di berbagai bidang IT. Namun, bidang yang paling menarik perhatian saya adalah': 'I am currently building a foundation across different areas of IT. The field that interests me most is',
    '. Ke depannya, saya ingin lebih banyak mengeksplorasi bidang ini dan melihat peluang untuk berkembang menjadi seorang Network Engineer.': '. Going forward, I want to explore this field further and work toward becoming a Network Engineer.',
    'masih belajar, tetap eksplorasi': 'still learning, always exploring',
    'LOCATION': 'LOCATION',
    'EDUCATION': 'EDUCATION',
    'INTEREST': 'INTEREST',
    'Computer and Networking': 'Computer and Networking',
    "THINGS I'M EXPLORING": "THINGS I'M EXPLORING",
    'MY CURRENT TOOLKIT': 'MY CURRENT TOOLKIT',
    'Belajar satu hal,': 'Learn one thing,',
    'buka banyak kemungkinan.': 'open up many possibilities.',
    'Ini adalah tools dan materi yang pernah saya gunakan atau sedang pelajari. Masih terus berkembang, jadi bukan daftar yang sudah dikuasai semuanya.': 'These are tools and topics I have used or am currently learning. I am still growing, so this is not a list of things I have mastered.',
    'Programming': 'Programming',
    'Belajar menyusun logika dan membuat program sederhana.': 'Learning to build logic and create simple programs.',
    'FOUNDATION · STILL LEARNING': 'FOUNDATION · STILL LEARNING',
    'IN PROGRESS': 'IN PROGRESS',
    'Networking': 'Networking',
    'Mengenal topologi, konfigurasi perangkat, dan konektivitas jaringan.': 'Learning about topologies, device configuration, and network connectivity.',
    'HANDS-ON PRACTICE': 'HANDS-ON PRACTICE',
    'Tools & Environment': 'Tools & Environment',
    'Aplikasi yang digunakan untuk belajar, mencoba, dan melakukan troubleshooting.': 'Applications used for learning, experimentation, and troubleshooting.',
    'TOOLS & ENVIRONMENT': 'TOOLS & ENVIRONMENT',
    'EXPLORING': 'EXPLORING',
    'Dasar administrasi jaringan, konfigurasi MikroTik, algoritma pemrograman, dan pengembangan web.': 'Network administration fundamentals, MikroTik configuration, programming algorithms, and web development.',
    'WHERE IT STARTS': 'WHERE IT STARTS',
    'MY EDUCATION': 'MY EDUCATION',
    'Langkah awal': 'The first steps',
    'menuju': 'toward the',
    'dunia IT.': 'world of IT.',
    'Masih di awal perjalanan, dan masih banyak hal yang ingin dipelajari.': 'I am at the beginning of my journey, with plenty more to learn.',
    'CURRENTLY · SEMESTER 1': 'CURRENTLY · SEMESTER 1',
    'Jurusan Teknik Elektro · Sarjana Terapan Teknik Informatika': 'Department of Electrical Engineering · Applied Informatics Engineering',
    'Memulai perjalanan perkuliahan dengan mempelajari dasar pemrograman, logika algoritma, dan pengantar teknologi informasi.': 'Beginning my studies with programming fundamentals, algorithmic thinking, and an introduction to information technology.',
    'ONGOING': 'ONGOING',
    'PRACTICE & ASSIGNMENTS': 'PRACTICE & ASSIGNMENTS',
    'LEARNING IN ACTION': 'LEARNING IN ACTION',
    'Belum banyak karya,': 'I do not have many projects yet,',
    'tapi sudah mulai mencoba.': 'but I have started exploring.',
    'Beberapa latihan dan tugas yang menjadi bagian dari proses belajar saya sejauh ini.': 'A few exercises and assignments that have been part of my learning journey so far.',
    'ACADEMIC PRACTICE': 'ACADEMIC PRACTICE',
    'Hasil kerja belum ditambahkan': 'Work image not added yet',
    'Letakkan file gambar di:': 'Place your image file here:',
    'Preview hasil kerja': 'Project image preview',
    'Tutup preview': 'Close preview',
    'Simulasi Topologi Jaringan': 'Network Topology Simulation',
    'Latihan merancang jaringan menggunakan Cisco Packet Tracer. Mencakup perangkat router, switch, PC, dan server, pengaturan alamat IP, DHCP/DNS, serta pengujian konektivitas.': 'A network design exercise using Cisco Packet Tracer. It includes routers, switches, PCs, and servers, IP addressing, DHCP/DNS, and connectivity testing.',
    'LEARNING PROJECT · 01': 'LEARNING PROJECT · 01',
    'PRACTICE': 'PRACTICE',
    'Eksplorasi MikroTik': 'MikroTik Exploration',
    'Praktik mengenal konfigurasi jaringan melalui WinBox, termasuk pengaturan jaringan lokal dan dasar layanan hotspot.': 'Hands-on practice with network configuration through WinBox, including local network setup and hotspot service basics.',
    'LEARNING PROJECT · 02': 'LEARNING PROJECT · 02',
    'Untuk proyek aplikasi atau program mandiri, saya masih dalam tahap belajar.': 'I am still learning how to build standalone applications and programs.',
    'Next mission: building something from scratch.': 'Next mission: building something from scratch.',
    'SAY HELLO': 'SAY HELLO',
    'HAVE AN IDEA OR JUST WANT TO CHAT?': 'HAVE AN IDEA OR JUST WANT TO CHAT?',
    'Mari terhubung.': "Let's connect.",
    'Saya terbuka untuk berbagi ide, ngobrol seputar teknologi, atau belajar bareng. Jangan ragu untuk menyapa!': "I am open to sharing ideas, talking about technology, or learning together. Feel free to say hello!",
    'Kirim email': 'Send an email',
    'Chat on WhatsApp': 'Chat on WhatsApp',
    'Facebook profile': 'Facebook profile',
    'AVAILABLE FOR CONNECTIONS': 'AVAILABLE FOR CONNECTIONS',
    'Built with curiosity': 'Built with curiosity',
    'BACK TO TOP ↑': 'BACK TO TOP ↑',
    "Let's connect": "Let's connect",
    "Let's build & learn.": "Let's build & learn.",
    'Yosua, kembali ke Home': 'Yosua, back to Home',
    'Buka navigasi': 'Open navigation',
    'Tutup navigasi': 'Close navigation',
    'Yosua, kembali ke Home': 'Yosua, back to Home',
    'Navigasi utama': 'Main navigation'
  };
  const indonesianTranslations = {
    'Home': 'Beranda',
    'About': 'Tentang',
    'Skills': 'Keahlian',
    'Projects': 'Proyek',
    'Contact': 'Kontak',
    "Let's connect": 'Mari terhubung',
    "Let's build & learn.": 'Mari berkarya & belajar.',
    'OPEN TO LEARN & COLLABORATE': 'TERBUKA UNTUK BELAJAR & KOLABORASI',
    '01 / ABOUT': '01 / TENTANG',
    '02 / TOOLKIT': '02 / PERANGKAT',
    '03 / JOURNEY': '03 / PERJALANAN',
    '04 / SELECTED WORK': '04 / KARYA PILIHAN',
    '05 / CONTACT': '05 / KONTAK',
    'Work image not added yet': 'Hasil kerja belum ditambahkan',
    'Place your image file here:': 'Letakkan file gambar di:',
    'Project image preview': 'Preview hasil kerja',
    'Close preview': 'Tutup preview',
    'Curious mind, practical learner': 'Pikiran ingin tahu, pembelajar praktis',
    'Study field': 'Bidang studi',
    'Computer and Networking': 'Komputer dan Jaringan',
    'Currently learning': 'Sedang belajar',
    'Networking & coding': 'Jaringan & pemrograman',
    'Based in': 'Berlokasi di',
    'network enthusiast': 'penggemar jaringan',
    'DESIGNED TO KEEP EXPLORING': 'DIRANCANG UNTUK TERUS MENJELAJAHI',
    'SCROLL TO EXPLORE': 'GULIR UNTUK MENJELAJAHI',
    'HELLO, I\'M': 'HALO, SAYA',
    'Informatics Engineering Student': 'Mahasiswa Teknik Informatika',
    'Explore my journey': 'Lihat perjalanan saya',
    'Contact me': 'Hubungi saya',
    'A LITTLE INTRODUCTION': 'SEDIKIT PERKENALAN',
    "LET'S GET TO KNOW EACH OTHER": 'KENALAN DULU, YUK',
    'LOCATION': 'LOKASI',
    'EDUCATION': 'PENDIDIKAN',
    'INTEREST': 'MINAT',
    "THINGS I'M EXPLORING": 'HAL YANG SEDANG SAYA JELAJAHI',
    'MY CURRENT TOOLKIT': 'PERANGKAT & KEAHLIAN SAAT INI',
    'Programming': 'Pemrograman',
    'Networking': 'Jaringan',
    'Tools & Environment': 'Perangkat & Lingkungan',
    'FOUNDATION · STILL LEARNING': 'DASAR · MASIH BELAJAR',
    'IN PROGRESS': 'SEDANG BERJALAN',
    'HANDS-ON PRACTICE': 'LATIHAN LANGSUNG',
    'TOOLS & ENVIRONMENT': 'PERANGKAT & LINGKUNGAN',
    'EXPLORING': 'MENJELAJAHI',
    'Currently exploring': 'Sedang mendalami',
    'WHERE IT STARTS': 'AWAL PERJALANAN',
    'MY EDUCATION': 'PENDIDIKAN SAYA',
    'CURRENTLY · SEMESTER 1': 'SAAT INI · SEMESTER 1',
    'ONGOING': 'SEDANG BERLANGSUNG',
    'SELECTED WORK': 'KARYA PILIHAN',
    'PRACTICE & ASSIGNMENTS': 'LATIHAN & TUGAS',
    'LEARNING IN ACTION': 'BELAJAR SAMBIL MELAKUKAN',
    'ACADEMIC PRACTICE': 'LATIHAN AKADEMIK',
    'PRACTICE': 'LATIHAN',
    'LEARNING PROJECT · 01': 'PROYEK BELAJAR · 01',
    'LEARNING PROJECT · 02': 'PROYEK BELAJAR · 02',
    'SAY HELLO': 'SAPA SAYA',
    'HAVE AN IDEA OR JUST WANT TO CHAT?': 'PUNYA IDE ATAU INGIN MENGOBROL?',
    'Send an email': 'Kirim email',
    'Chat on WhatsApp': 'Chat lewat WhatsApp',
    'Facebook profile': 'Profil Facebook',
    'AVAILABLE FOR CONNECTIONS': 'TERBUKA UNTUK TERHUBUNG',
    'Built with curiosity': 'Dibuat dengan rasa ingin tahu',
    'and a little bit of code.': 'dan sedikit kode.',
    'BACK TO TOP ↑': 'KEMBALI KE ATAS ↑',
    'More than': 'Bukan sekadar',
    'just coding, I': 'ngoding, tapi',
    'love exploring.': 'suka ngulik.',
    'Learn one thing,': 'Belajar satu hal,',
    'open up many possibilities.': 'buka banyak kemungkinan.',
    'The first steps': 'Langkah awal',
    'toward the': 'menuju',
    'world of IT.': 'dunia IT.',
    'I do not have many projects yet,': 'Belum banyak karya,',
    'but I have started exploring.': 'tapi sudah mulai mencoba.',
    'Network Topology Simulation': 'Simulasi Topologi Jaringan',
    'MikroTik Exploration': 'Eksplorasi MikroTik',
    "LET'S CONNECT.": 'MARI TERHUBUNG.',
    'Send an email': 'Kirim email',
    'Open navigation': 'Buka navigasi',
    'Close navigation': 'Tutup navigasi',
    'Yosua, back to Home': 'Yosua, kembali ke Beranda',
    'Main navigation': 'Navigasi utama'
  };
  const originalTextNodes = new WeakMap();
  const themeSelect = $('#themeSelect');
  const languageToggle = $('#languageToggle');
  const colorScheme = window.matchMedia('(prefers-color-scheme: light)');
  const imagePreviewDialog = $('#imagePreviewDialog');
  const imagePreview = $('#imagePreview');
  const imagePreviewCaption = $('#imagePreviewCaption');
  const imagePreviewClose = $('#imagePreviewClose');
  let currentLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'id';
  let currentTheme = ['system', 'light', 'dark'].includes(localStorage.getItem('portfolio-theme'))
    ? localStorage.getItem('portfolio-theme')
    : 'system';
  const roleTranslations = {
    id: ['Mahasiswa Teknik Informatika', 'Network Engineering Enthusiast', 'Tech Explorer'],
    en: ['Informatics Engineering Student', 'Network Engineering Enthusiast', 'Tech Explorer']
  };
  let roleList = roleTranslations[currentLanguage];

  const applyTheme = () => {
    const theme = currentTheme === 'system' ? (colorScheme.matches ? 'light' : 'dark') : currentTheme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themeMode = currentTheme;
    if (themeSelect) themeSelect.value = currentTheme;
    const themeColor = $('#themeColor');
    if (themeColor) themeColor.content = theme === 'light' ? '#f4f7fc' : '#080b14';
  };

  const applyLanguage = language => {
    currentLanguage = language;
    roleList = roleTranslations[language];
    document.documentElement.lang = language;
    const translations = language === 'en' ? englishTranslations : indonesianTranslations;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      const original = originalTextNodes.get(node);
      const content = original.trim();
      if (!content) continue;
      const translated = translations[content];
      if (translated) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.nodeValue = `${leading}${translated}${trailing}`;
      } else {
        node.nodeValue = original;
      }
    }

    const pageDescription = $('#pageDescription');
    if (pageDescription) {
      pageDescription.content = language === 'en'
        ? 'Yosua V. Watulangkow’s portfolio — an Informatics Engineering student interested in computer networking and technology.'
        : 'Portofolio Yosua V. Watulangkow — mahasiswa Teknik Informatika yang tertarik pada jaringan komputer dan teknologi.';
    }
    document.title = language === 'en'
      ? 'Yosua V. Watulangkow — Tech Portfolio'
      : 'Yosua V. Watulangkow — Tech Portfolio';
    const typedRole = $('#typedRole');
    if (typedRole) typedRole.textContent = roleTranslations[language][0];
    if (languageToggle) {
      languageToggle.textContent = language === 'id' ? 'ID' : 'EN';
      languageToggle.setAttribute('aria-label', language === 'id' ? 'Switch language to English' : 'Ganti bahasa ke Indonesia');
    }
    const themeLabel = $('.theme-control .sr-only');
    if (themeLabel) themeLabel.textContent = language === 'id' ? 'Tema tampilan' : 'Display theme';
    if (themeSelect) {
      themeSelect.setAttribute('aria-label', language === 'id' ? 'Tema tampilan' : 'Display theme');
      const labels = language === 'id'
        ? { system: 'Ikuti sistem', light: 'Terang', dark: 'Gelap' }
        : { system: 'System', light: 'Light', dark: 'Dark' };
      [...themeSelect.options].forEach(option => { option.textContent = labels[option.value]; });
    }
    if (imagePreviewClose) {
      imagePreviewClose.setAttribute('aria-label', language === 'id' ? 'Tutup preview' : 'Close preview');
    }
    $$('[data-image-slot].has-image').forEach(slot => {
      slot.setAttribute('aria-label', language === 'id' ? 'Buka gambar hasil kerja' : 'Open project image preview');
    });
    const menuToggle = $('#menuToggle');
    if (menuToggle) {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', language === 'id'
        ? (isOpen ? 'Tutup navigasi' : 'Buka navigasi')
        : (isOpen ? 'Close navigation' : 'Open navigation'));
    }
    const mainNav = $('#mainNav');
    if (mainNav) mainNav.setAttribute('aria-label', language === 'id' ? 'Navigasi utama' : 'Main navigation');
    const brand = $('.site-header .brand');
    if (brand) {
      const siteHeader = $('.site-header');
      const isExpanded = siteHeader && siteHeader.classList.contains('expanded');
      brand.setAttribute('aria-label', isExpanded
        ? (language === 'id' ? 'Tutup navigasi' : 'Close navigation')
        : (language === 'id' ? 'Yosua, kembali ke Beranda' : 'Yosua, back to Home'));
    }
    localStorage.setItem('portfolio-language', language);
  };

  applyTheme();
  applyLanguage(currentLanguage);
  if (themeSelect) {
    themeSelect.addEventListener('change', () => {
      currentTheme = themeSelect.value;
      localStorage.setItem('portfolio-theme', currentTheme);
      applyTheme();
    });
  }
  colorScheme.addEventListener('change', () => {
    if (currentTheme === 'system') applyTheme();
  });
  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      applyLanguage(currentLanguage === 'id' ? 'en' : 'id');
    });
  }

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

  $$('[data-image-slot] img').forEach(image => {
    const showImage = () => {
      const slot = image.closest('[data-image-slot]');
      slot.classList.add('has-image');
      slot.tabIndex = 0;
      slot.setAttribute('role', 'button');
      slot.setAttribute('aria-label', currentLanguage === 'id' ? 'Buka gambar hasil kerja' : 'Open project image preview');
    };
    image.addEventListener('load', showImage, { once: true });
    image.addEventListener('error', () => {
      const slot = image.closest('[data-image-slot]');
      slot.classList.remove('has-image');
      slot.removeAttribute('tabindex');
      slot.removeAttribute('role');
      slot.removeAttribute('aria-label');
    }, { once: true });
    if (image.complete && image.naturalWidth > 0) showImage();
  });

  const openImagePreview = slot => {
    const previewSource = $('img', slot);
    if (!previewSource || !previewSource.complete || !previewSource.naturalWidth || !imagePreviewDialog) return;
    imagePreview.src = previewSource.currentSrc || previewSource.src;
    imagePreview.alt = previewSource.alt;
    const projectTitle = $('.project-content h3', slot.closest('.project-card'));
    imagePreviewCaption.textContent = projectTitle ? projectTitle.textContent.trim() : previewSource.alt;
    imagePreviewDialog.showModal();
    imagePreviewClose.focus();
  };
  $$('[data-image-slot]').forEach(slot => {
    slot.addEventListener('click', () => openImagePreview(slot));
    slot.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImagePreview(slot);
      }
    });
  });
  if (imagePreviewClose && imagePreviewDialog) {
    imagePreviewClose.addEventListener('click', () => imagePreviewDialog.close());
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && imagePreviewDialog.open) imagePreviewDialog.close();
    });
    imagePreviewDialog.addEventListener('click', event => {
      if (event.target === imagePreviewDialog) imagePreviewDialog.close();
    });
    imagePreviewDialog.addEventListener('close', () => {
      imagePreview.removeAttribute('src');
    });
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
  const siteHeader = $('.site-header');
  const brand = siteHeader && $('.brand', siteHeader);
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', currentLanguage === 'id'
        ? (isOpen ? 'Buka navigasi' : 'Tutup navigasi')
        : (isOpen ? 'Open navigation' : 'Close navigation'));
      mainNav.classList.toggle('open', !isOpen);
    });
    $$('.nav-link', mainNav).forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', currentLanguage === 'id' ? 'Buka navigasi' : 'Open navigation');
      if (siteHeader) {
        siteHeader.classList.remove('expanded');
        if (brand) brand.setAttribute('aria-expanded', 'false');
      }
    }));
    document.addEventListener('click', event => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', currentLanguage === 'id' ? 'Buka navigasi' : 'Open navigation');
      }
      if (siteHeader && !siteHeader.contains(event.target)) {
        siteHeader.classList.remove('expanded');
        if (brand) brand.setAttribute('aria-expanded', 'false');
      }
    });
    brand.addEventListener('click', event => {
      if (!siteHeader.classList.contains('is-scrolled')) return;
      event.preventDefault();
      const isExpanded = siteHeader.classList.toggle('expanded');
      brand.setAttribute('aria-expanded', String(isExpanded));
      brand.setAttribute('aria-label', isExpanded
        ? (currentLanguage === 'id' ? 'Tutup navigasi' : 'Close navigation')
        : (currentLanguage === 'id' ? 'Buka navigasi' : 'Open navigation'));
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && siteHeader && siteHeader.classList.contains('expanded')) {
        siteHeader.classList.remove('expanded');
        brand.setAttribute('aria-expanded', 'false');
        brand.setAttribute('aria-label', currentLanguage === 'id' ? 'Buka navigasi' : 'Open navigation');
        brand.focus();
      }
    });
    const updateHeaderMode = () => {
      const isScrolled = window.matchMedia('(min-width: 921px)').matches && window.scrollY > 120;
      const wasScrolled = siteHeader.classList.contains('is-scrolled');
      siteHeader.classList.toggle('is-scrolled', isScrolled);
      if (wasScrolled && !isScrolled) {
        siteHeader.classList.remove('expanded');
        brand.setAttribute('aria-expanded', 'false');
        brand.setAttribute('aria-label', currentLanguage === 'id' ? 'Yosua, kembali ke Beranda' : 'Yosua, back to Home');
      }
    };
    window.addEventListener('scroll', updateHeaderMode, { passive: true });
    window.addEventListener('resize', updateHeaderMode);
    updateHeaderMode();
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
  if (typedRole && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let roleIndex = 0;
    let characterIndex = roleList[0].length;
    let deleting = true;
    const typeNext = () => {
      const current = roleList[roleIndex];
      if (deleting) {
        characterIndex--;
        typedRole.textContent = current.slice(0, Math.max(0, characterIndex));
        if (characterIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roleList.length;
          window.setTimeout(typeNext, 300);
          return;
        }
        window.setTimeout(typeNext, 34);
      } else {
        const next = roleList[roleIndex];
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
