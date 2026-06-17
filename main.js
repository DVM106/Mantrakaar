/* ==========================================================================
   Mantrakaar Core Javascript - Animations & Interactions (Resilient Version)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Mantrakaar scripts initializing...');
  
  // Custom Debug Logger (Disabled for production)
  function logDebug(msg) {
    // console.log("[DEBUG]", msg);
  }

  logDebug("DOM loaded, starting initializations...");

  // Multi-Language Key-Value Store
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Services',
      nav_projects: 'Projects',
      nav_clients: 'Clients',
      nav_testimonials: 'Testimonials',
      nav_career: 'Career',
      nav_blogs: 'Blogs',
      nav_contact: 'Contact',
      services_we_offer: 'SERVICES WE OFFER',
      elevate_your_vision: 'ELEVATE YOUR VISION',
      explore_our_work: 'Explore Our Work',
      spotlight_design: 'DESIGN',
      spotlight_development: 'DEVELOPMENT',
      spotlight_marketing: 'MARKETING',
      spotlight_strategy: 'STRATEGY',
      service_pretitle: 'EXPERTISE',
      service_title: 'Our Services',
      service_lead: 'We realize that your competition is always just a click away and creating a professional, informative and easy-to-use website, on your budget, is our main goal.',
      service_btn: 'Know More',
      service_card_1_tag: 'UX/UI Design',
      service_card_1_title: 'Brand & Interface Design',
      service_card_1_desc: 'Creating beautiful, user-centered digital interfaces. We prototype fluid journeys, map clean layouts, and craft cohesive brand systems that resonate with users.',
      service_card_2_tag: 'Website Development',
      service_card_2_title: 'Frontend & Core Dev',
      service_card_2_desc: 'Building modern, fast, and responsive websites from scratch. We write high-quality code, configure domain routing, set up content management, and optimize sites for peak performance.',
      service_card_3_tag: 'Marketing',
      service_card_3_title: 'Growth & SEO Strategy',
      service_card_3_desc: 'Boosting online visibility and lead conversion. We optimize structural SEO metadata, run analytical campaigns, and chart user growth metrics.',
      service_card_4_tag: 'Consulting',
      service_card_4_title: 'Consultancy & Audits',
      service_card_4_desc: 'Delivering actionable architectural analysis, codebase health checks, conversion audits, and data-driven product strategies.',
      work_title: 'Our Work',
      work_more: 'View More Work',
      view_all_blogs: 'VIEW ALL BLOGS',
      view_all_testimonials: 'VIEW ALL TESTIMONIALS',
      client_title: 'Our Happy Clients',
      client_hint: 'HOVER AT THE LOGO TO PAUSE',
      client_cta: 'VIEW ALL CLIENTS',
      testimonial_title: 'Testimonial',
      contact_title: 'Get Connected',
      contact_lead: 'We welcome you to contact us for more information about any of our services.',
      contact_name: 'Name',
      contact_email: 'Email',
      contact_phone: 'Phone',
      contact_subject: 'Subject',
      contact_message: 'Message',
      contact_submit: 'Get In Touch'
    },
    hi: {
      nav_home: 'मुख्य पृष्ठ',
      nav_about: 'हमारे बारे में',
      nav_services: 'सेवाएं',
      nav_projects: 'परियोजनाएं',
      nav_clients: 'ग्राहक',
      nav_testimonials: 'प्रशंसापत्र',
      nav_career: 'कैरियर',
      nav_blogs: 'ब्लॉग',
      nav_contact: 'संपर्क',
      services_we_offer: 'हमारी सेवाएं',
      elevate_your_vision: 'अपनी दृष्टि को उन्नत करें',
      explore_our_work: 'हमारा कार्य देखें',
      spotlight_design: 'डिजाइन',
      spotlight_development: 'डेवलपमेंट',
      spotlight_marketing: 'मार्केटिंग',
      spotlight_strategy: 'रणनीति',
      service_pretitle: 'विशेषज्ञता',
      service_title: 'हमारी सेवाएं',
      service_lead: 'हम समझते हैं कि आपकी प्रतिस्पर्धा हमेशा सिर्फ एक क्लिक दूर है और आपके बजट में एक पेशेवर, सूचनात्मक वेबसाइट बनाना हमारा मुख्य लक्ष्य है।',
      service_btn: 'अधिक जानें',
      service_card_1_tag: 'यूएक्स/यूआई डिजाइन',
      service_card_1_title: 'ब्रांड और इंटरफ़ेस डिज़ाइन',
      service_card_1_desc: 'सुंदर, उपयोगकर्ता-केंद्रित डिजिटल इंटरफेस बनाना। हम तरल यात्राओं का प्रोटोटाइप बनाते हैं, स्वच्छ लेआउट का नक्शा बनाते हैं, और उपयोगकर्ताओं के साथ प्रतिध्वनित होने वाली ब्रांड प्रणालियों को तैयार करते हैं।',
      service_card_2_tag: 'वेबसाइट डेवलपमेंट',
      service_card_2_title: 'फ्रंटएंड और कोर देव',
      service_card_2_desc: 'शुरुआत से आधुनिक, तेज़ और उत्तरदायी वेबसाइटों का निर्माण। हम उच्च गुणवत्ता वाले कोड लिखते हैं, डोमेन रूटिंग कॉन्फ़िगर करते हैं, सामग्री प्रबंधन सेट करते हैं, और चरम प्रदर्शन के लिए साइटों को अनुकूलित करते हैं।',
      service_card_3_tag: 'विपणन',
      service_card_3_title: 'ग्रोथ और एसईओ रणनीति',
      service_card_3_desc: 'ऑनलाइन दृश्यता और लीड रूपांतरण को बढ़ावा देना। हम संरचनात्मक एसईओ मेटाडेटा को अनुकूलित करते हैं, विश्लेषणात्मक अभियान चलाते हैं, और उपयोगकर्ता विकास मीट्रिक का चार्ट बनाते हैं।',
      service_card_4_tag: 'परामर्श',
      service_card_4_title: 'परामर्श और ऑडिट',
      service_card_4_desc: 'कार्रवाई योग्य वास्तुकला विश्लेषण, कोडबेस स्वास्थ्य जांच, रूपांतरण ऑडिट और डेटा-संचालित उत्पाद रणनीतियों को वितरित करना।',
      work_title: 'हमारा कार्य',
      work_more: 'अधिक कार्य देखें',
      view_all_blogs: 'सभी ब्लॉग देखें',
      view_all_testimonials: 'सभी प्रशंसापत्र देखें',
      client_title: 'हमारे खुशहाल ग्राहक',
      client_hint: 'रोकने के लिए लोगो पर होवर करें',
      client_cta: 'सभी ग्राहक देखें',
      testimonial_title: 'प्रशंसापत्र',
      contact_title: 'कनेक्टेड रहें',
      contact_lead: 'हम हमारी किसी भी सेवा के बारे में अधिक जानकारी के लिए हमसे संपर्क करने का स्वागत करते हैं।',
      contact_name: 'नाम',
      contact_email: 'ईमेल',
      contact_phone: 'फ़ोन',
      contact_subject: 'विषय',
      contact_message: 'संदेश',
      contact_submit: 'संपर्क करें'
    },
    es: {
      nav_home: 'Inicio',
      nav_about: 'Nosotros',
      nav_services: 'Servicios',
      nav_projects: 'Proyectos',
      nav_clients: 'Clientes',
      nav_testimonials: 'Testimonios',
      nav_career: 'Carrera',
      nav_blogs: 'Blogs',
      nav_contact: 'Contacto',
      services_we_offer: 'SERVICIOS QUE OFRECEMOS',
      elevate_your_vision: 'ELEVATE TU VISIÓN',
      explore_our_work: 'Explorar Nuestro Trabajo',
      spotlight_design: 'DISEÑO',
      spotlight_development: 'DESARROLLO',
      spotlight_marketing: 'MARKETING',
      spotlight_strategy: 'ESTRATEGIA',
      service_pretitle: 'EXPERIENCIA',
      service_title: 'Nuestros Servicios',
      service_lead: 'Sabemos que su competencia está a solo un clic de distancia y crear un sitio profesional, informativo y fácil de usar, en su presupuesto, es nuestra meta principal.',
      service_btn: 'Saber Más',
      service_card_1_tag: 'Diseño UX/UI',
      service_card_1_title: 'Diseño de Marca e Interfaz',
      service_card_1_desc: 'Creando interfaces digitales hermosas y centradas en el usuario. Diseñamos flujos fluidos, estructuramos layouts limpios y creamos sistemas de marca cohesivos.',
      service_card_2_tag: 'Desarrollo de Sitios Web',
      service_card_2_title: 'Desarrollo Frontend y Core',
      service_card_2_desc: 'Construcción de sitios web modernos, rápidos y responsivos desde cero. Escribimos código de alta calidad, configuramos el enrutamiento de dominio, configuramos la gestión de contenido y optimizamos los sitios para un rendimiento óptimo.',
      service_card_3_tag: 'Marketing',
      service_card_3_title: 'Estrategia de Crecimiento y SEO',
      service_card_3_desc: 'Aumentar la visibilidad online y la conversión de leads. Optimizamos metadatos SEO, ejecutamos campañas analíticas y medimos el crecimiento de usuarios.',
      service_card_4_tag: 'Consultoría',
      service_card_4_title: 'Consultoría y Auditorías',
      service_card_4_desc: 'Entregar análisis arquitectónicos accionables, auditorías de salud de código, auditorías de conversión y estrategias de producto basadas en datos.',
      work_title: 'Nuestro Trabajo',
      work_more: 'Ver Más Trabajos',
      view_all_blogs: 'VER TODOS LOS BLOGS',
      view_all_testimonials: 'VER TODOS LOS TESTIMONIOS',
      client_title: 'Nuestros Clientes Felices',
      client_hint: 'CERNIR EN EL LOGO PARA PAUSAR',
      client_cta: 'VER TODOS LOS CLIENTES',
      testimonial_title: 'Testimonios',
      contact_title: 'Conectarse',
      contact_lead: 'Le invitamos a ponerse en contacto con nosotros para obtener más información sobre cualquiera de nuestros servicios.',
      contact_name: 'Nombre',
      contact_email: 'Email',
      contact_phone: 'Teléfono',
      contact_subject: 'Asunto',
      contact_message: 'Message',
      contact_submit: 'Ponerse en contacto'
    }
  };

  // Global States
  let currentLang = localStorage.getItem('mantrakaar-lang') || 'en';
  let isDarkMode = localStorage.getItem('mantrakaar-theme') === 'dark';
  let heroSequenceTimeline = null;
  let heroSequenceTimeouts = [];

  // 1. Initial State Sync
  try {
    initThemeAndLang();
    logDebug("Theme and Language synced.");
  } catch (e) {
    logDebug("Theme/Lang init error: " + e.message);
  }

  // 2. Custom Cursor
  try {
    initCustomCursor();
    logDebug("Custom cursor initialized.");
  } catch (e) {
    logDebug("Cursor init error: " + e.message);
  }

  // 3. Hero Animation Sequence (GSAP-dependent with Offline Fallback)
  try {
    initHeroSequence();
  } catch (e) {
    logDebug("Hero Sequence init error: " + e.message);
  }

  // 4. Navbar Search Control
  try {
    initNavbarSearch();
  } catch (e) {
    console.error("Search init error:", e);
  }

  // 5. Theme & Language Toggle Listeners
  try {
    initToggles();
  } catch (e) {
    console.error("Toggles init error:", e);
  }

  // 6. Carousel Slideshows (Swiper.js-dependent)
  try {
    initCarousels();
  } catch (e) {
    console.error("Carousels init error:", e);
  }

  // 7. Magnetic Hover Buttons
  try {
    initMagneticButtons();
  } catch (e) {
    console.error("Magnetic Buttons init error:", e);
  }

  // 8. Floating Social Stack Click Handlers
  try {
    initFloatingSocials();
  } catch (e) {
    console.error("Socials init error:", e);
  }
  
  // 9. Mobile Menu
  try {
    initMobileMenu();
  } catch (e) {
    console.error("Mobile Menu init error:", e);
  }

  // 10. Dotted Spotlight Grid Tracker
  try {
    initDottedSpotlight();
  } catch (e) {
    console.error("Dotted Spotlight Grid init error:", e);
  }

  // 11. Scroll-Triggered Entrance Animations (Reveal System)
  try {
    initScrollReveals();
  } catch (e) {
    console.error("Scroll Reveals init error:", e);
  }

  // 12. Elegant Wall Clock (Live real-time sweep)
  try {
    initWallClock();
  } catch (e) {
    console.error("Wall Clock init error:", e);
  }

  // 13. Hanging Lamp Spring Physics Repel & Pendulum Swing
  try {
    initHangingLamp();
  } catch (e) {
    console.error("Hanging Lamp init error:", e);
  }

  // 14. Editorial Services Spotlight
  try {
    initServicesSpotlight();
  } catch (e) {
    console.error("Services Spotlight init error:", e);
  }

  // 15. Redesigned Bento Work Grid & Widgets
  try {
    initPortfolioGrid();
  } catch (e) {
    console.error("Portfolio Grid init error:", e);
  }

  /* ==========================================================================
     Theme & Language Setup
     ========================================================================== */
  function initThemeAndLang() {
    // Theme sync
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.getItem('mantrakaar-theme')) {
      if (isDarkMode) document.body.classList.add('dark-mode');
    } else if (systemPrefersDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mantrakaar-theme', 'dark');
      isDarkMode = true;
    }

    // Sync theme toggle icon in navbar
    const themeBtn = document.querySelector('.theme-toggle-btn');
    if (themeBtn) {
      const icon = themeBtn.querySelector('i');
      if (icon) {
        if (isDarkMode) {
          icon.classList.replace('fa-moon', 'fa-sun');
        } else {
          icon.classList.replace('fa-sun', 'fa-moon');
        }
      }
    }

    // Language sync
    updateLanguageTexts(currentLang);
    const langLabel = document.querySelector('.lang-toggle span');
    if (langLabel) langLabel.textContent = currentLang.toUpperCase();
  }

  /* ==========================================================================
     Custom Cursor Tracking
     ========================================================================== */
  /* ==========================================================================
     Custom Cursor Tracking & Sparkle Trail
     ========================================================================== */
  function initCustomCursor() {
    const cursorDot = document.querySelector('.custom-cursor-dot');
    if (!cursorDot) return;

    let mouseX = 0, mouseY = 0;
    let lastX = 0, lastY = 0;

    // Track mouse/pointer coordinates and spawn sparkles
    const updateCursor = (e) => {
      // Clean up dragging state on normal pointer/mouse movement
      if (e.type === 'mousemove' || e.type === 'pointermove') {
        cursorDot.classList.remove('dragging');
      }

      // Ignore 0,0 coordinates which are common in drag events
      if (e.clientX === 0 && e.clientY === 0) return;

      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly position the logo cursor dot
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Check distance to spawn a sparkle
      const dist = Math.hypot(mouseX - lastX, mouseY - lastY);
      if (dist > 25) {
        createSparkle(mouseX, mouseY);
        lastX = mouseX;
        lastY = mouseY;
      }
    };

    // Bind pointer/mouse move, drag, and dragover in capture phase to avoid sticking (bypassing Swiper stopPropagation & pointer capture)
    document.addEventListener('mousemove', updateCursor, { capture: true });
    document.addEventListener('pointermove', updateCursor, { capture: true });
    document.addEventListener('drag', updateCursor, { capture: true });
    document.addEventListener('dragover', updateCursor, { capture: true });

    // Hide custom cursor dot during browser-native drags
    document.addEventListener('dragstart', () => {
      cursorDot.classList.add('dragging');
    }, { capture: true });

    document.addEventListener('dragend', (e) => {
      cursorDot.classList.remove('dragging');
      if (e.clientX !== 0 || e.clientY !== 0) {
        updateCursor(e);
      }
    }, { capture: true });

    // Fallbacks to clear dragging class in case dragend is missed
    document.addEventListener('mouseup', () => {
      cursorDot.classList.remove('dragging');
    }, { capture: true });

    document.addEventListener('mousedown', () => {
      cursorDot.classList.remove('dragging');
    }, { capture: true });

    document.addEventListener('pointerup', () => {
      cursorDot.classList.remove('dragging');
    }, { capture: true });

    document.addEventListener('pointerdown', () => {
      cursorDot.classList.remove('dragging');
    }, { capture: true });

    // Sparkle Spawning Function
    function createSparkle(x, y) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-trail';
      
      // Randomize sparkly characters
      const sparkles = ['✦', '✧', '★', '✨'];
      sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
      
      // Randomize font size (7px to 13px)
      const size = Math.random() * 6 + 7;
      sparkle.style.fontSize = `${size}px`;
      
      // Randomize drift offset dx and dy (max 15px drift)
      const dx = (Math.random() - 0.5) * 30;
      const dy = (Math.random() - 0.5) * 30;
      sparkle.style.setProperty('--dx', `${dx}px`);
      sparkle.style.setProperty('--dy', `${dy}px`);
      
      // Randomize glow colors (purple, white, neon-magenta)
      const colors = ['var(--brand-purple)', '#ffffff', 'var(--dark-purple)', '#e200ff'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.color = color;
      sparkle.style.textShadow = `0 0 5px ${color}, 0 0 10px ${color}`;

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      
      document.body.appendChild(sparkle);
      
      // Remove element after animation ends (600ms)
      setTimeout(() => {
        sparkle.remove();
      }, 600);
    }

    // Hover states for interactive elements (scales logo cursor instead of old dot)
    function updateCursorListeners() {
      const clickables = document.querySelectorAll('a, button, input, select, textarea, .swiper-button-next, .swiper-button-prev, .client-logo-card, .floating-social-btn');
      clickables.forEach(elem => {
        elem.removeEventListener('mouseenter', addHoverClass);
        elem.removeEventListener('mouseleave', removeHoverClass);
        elem.addEventListener('mouseenter', addHoverClass);
        elem.addEventListener('mouseleave', removeHoverClass);
      });
    }

    function addHoverClass() { cursorDot.classList.add('hovered'); }
    function removeHoverClass() { cursorDot.classList.remove('hovered'); }

    updateCursorListeners();
    // Expose cursor listener updater globally
    window.updateCursorListeners = updateCursorListeners;
  }

  /* ==========================================================================
     Hero Animation Sequence
     ========================================================================== */

  function scheduleHeroTimeout(fn, delay) {
    const id = setTimeout(fn, delay);
    heroSequenceTimeouts.push(id);
    return id;
  }

  function clearAllHeroAnimations() {
    if (heroSequenceTimeline) {
      heroSequenceTimeline.kill();
      heroSequenceTimeline = null;
    }
    if (typeof gsap !== 'undefined') {
      const floatingIcons = document.querySelectorAll('.marketing-icon-floating');
      if (floatingIcons.length) gsap.killTweensOf(floatingIcons);
    }
    heroSequenceTimeouts.forEach(clearTimeout);
    heroSequenceTimeouts = [];
  }

  function initHeroSequence(forcePlay = false) {
    logDebug("Starting initHeroSequence... forcePlay=" + forcePlay);
    const isReducedMotion = false; // Always run the animation by default as requested
    
    // Selectors
    const heroContainer = document.getElementById('hero-section-container');
    const phrase1 = document.getElementById('phrase-1');
    const phrase2 = document.getElementById('phrase-2');
    const phrase3 = document.getElementById('phrase-3');
    const flare = document.querySelector('.cinematic-anamorphic-flare');
    const mask = document.querySelector('.hero-mask');
    const flash = document.querySelector('.flashbang-overlay');
    const brandEl = document.getElementById('hero-brand-shimmer');
    const dotMatrix = document.querySelector('.trailing-dot-matrix');
    const grid = document.querySelector('.hero-layout-grid');
    const dottedSpotlight = document.querySelector('.hero-dotted-spotlight');
    const scrollDown = document.querySelector('.hero-scroll-down');
    const floatingIcons = document.querySelectorAll('.marketing-icon-floating');
    const tagline = document.querySelector('.hero-tagline');
    const line1 = document.getElementById('hero-brand-shimmer');

    // Helper: Resilient Native CSS/JS Animation Fallback (when GSAP is offline/blocked)
    function runJSAnimationFallback() {
      logDebug("GSAP not detected. Running native CSS/JS transition animation timeline.");
      
      // Step 1: Fade-in, scale, and focus phrase 1 (0.0s -> 1.4s)
      scheduleHeroTimeout(() => {
        if (phrase1) {
          phrase1.style.transition = 'opacity 1.4s ease-in-out, transform 1.4s ease-in-out, letter-spacing 1.4s ease-in-out, filter 1.4s ease-in-out';
          phrase1.style.opacity = '1';
          phrase1.style.transform = 'scale(1)';
          phrase1.style.letterSpacing = '0.35em';
          phrase1.style.filter = 'blur(0px)';
        }
      }, 50);

      // Step 1.2: Glitch phrase 1 in middle
      scheduleHeroTimeout(() => {
        if (phrase1) phrase1.classList.add('glitching');
      }, 1000);
      scheduleHeroTimeout(() => {
        if (phrase1) phrase1.classList.remove('glitching');
      }, 1350);

      // Step 1.5: Fade-out and blur phrase 1 (2.2s -> 3.2s)
      scheduleHeroTimeout(() => {
        if (phrase1) {
          phrase1.style.transition = 'opacity 1.0s ease-in-out, transform 1.0s ease-in-out, letter-spacing 1.0s ease-in-out, filter 1.0s ease-in-out';
          phrase1.style.opacity = '0';
          phrase1.style.transform = 'scale(1.08)';
          phrase1.style.letterSpacing = '0.5em';
          phrase1.style.filter = 'blur(20px)';
        }
      }, 2200);

      // Step 2: Fade-in, scale, and focus phrase 2 (3.5s -> 4.9s)
      scheduleHeroTimeout(() => {
        if (phrase2) {
          phrase2.style.transition = 'opacity 1.4s ease-in-out, transform 1.4s ease-in-out, letter-spacing 1.4s ease-in-out, filter 1.4s ease-in-out';
          phrase2.style.opacity = '1';
          phrase2.style.transform = 'scale(1)';
          phrase2.style.letterSpacing = '0.35em';
          phrase2.style.filter = 'blur(0px)';
        }
      }, 3500);

      // Step 2.2: Glitch phrase 2 in middle
      scheduleHeroTimeout(() => {
        if (phrase2) phrase2.classList.add('glitching');
      }, 4500);
      scheduleHeroTimeout(() => {
        if (phrase2) phrase2.classList.remove('glitching');
      }, 4850);

      // Step 2.5: Fade-out and blur phrase 2 (5.7s -> 6.7s)
      scheduleHeroTimeout(() => {
        if (phrase2) {
          phrase2.style.transition = 'opacity 1.0s ease-in-out, transform 1.0s ease-in-out, letter-spacing 1.0s ease-in-out, filter 1.0s ease-in-out';
          phrase2.style.opacity = '0';
          phrase2.style.transform = 'scale(1.08)';
          phrase2.style.letterSpacing = '0.5em';
          phrase2.style.filter = 'blur(20px)';
        }
      }, 5700);

      // Step 3: Fade-in, scale, and focus phrase 3 (7.0s -> 8.4s)
      scheduleHeroTimeout(() => {
        if (phrase3) {
          phrase3.style.transition = 'opacity 1.4s ease-in-out, transform 1.4s ease-in-out, letter-spacing 1.4s ease-in-out, filter 1.4s ease-in-out';
          phrase3.style.opacity = '1';
          phrase3.style.transform = 'scale(1)';
          phrase3.style.letterSpacing = '0.35em';
          phrase3.style.filter = 'blur(0px)';
        }
        if (flare) {
          flare.style.transition = 'opacity 1.4s ease-in-out';
          flare.style.opacity = '0.85';
        }
      }, 7000);

      // Step 3.2: Glitch phrase 3 in middle
      scheduleHeroTimeout(() => {
        if (phrase3) phrase3.classList.add('glitching');
      }, 8000);
      scheduleHeroTimeout(() => {
        if (phrase3) phrase3.classList.remove('glitching');
      }, 8350);

      // Step 3.5: Fade-out, blur phrase 3 and flare (9.2s -> 10.2s)
      scheduleHeroTimeout(() => {
        if (phrase3) {
          phrase3.style.transition = 'opacity 1.0s ease-in-out, transform 1.0s ease-in-out, letter-spacing 1.0s ease-in-out, filter 1.0s ease-in-out';
          phrase3.style.opacity = '0';
          phrase3.style.transform = 'scale(1.08)';
          phrase3.style.letterSpacing = '0.5em';
          phrase3.style.filter = 'blur(20px)';
        }
        if (flare) {
          flare.style.transition = 'opacity 1.0s ease-out';
          flare.style.opacity = '0';
        }
      }, 9200);

      // Step 4: Flashbang overlay bloom (11.4s -> 11.65s)
      scheduleHeroTimeout(() => {
        logDebug("Fallback Step 4: Flashbang Peak start.");
        if (flash) {
          flash.style.transition = 'opacity 0.25s ease-in';
          flash.style.opacity = '1';
        }
      }, 11400);

      // Step 5: Hide mask & set container background (11.65s)
      scheduleHeroTimeout(() => {
        logDebug("Fallback Step 5: Mask hide, canvas transition to theme BG.");
        if (mask) mask.style.display = 'none';
        if (heroContainer) heroContainer.style.backgroundColor = 'transparent';
      }, 11650);

      // Step 6: Fade out flashbang and animate clock, lamp, and desk (11.65s -> 12.15s)
      scheduleHeroTimeout(() => {
        logDebug("Fallback Step 6: Flashbang fadeout & desk/clock/lamp entry start.");
        if (flash) {
          flash.style.transition = 'opacity 0.5s ease-out';
          flash.style.opacity = '0';
        }
        
        const lamp = document.getElementById('hero-lamp');
        const clock = document.getElementById('wall-clock');
        const deskEl = document.querySelector('.hero-desk');
        
        if (lamp) {
          lamp.style.transition = 'top 1.2s cubic-bezier(0.25, 0.8, 0.25, 1.15), opacity 1.2s ease';
          lamp.style.top = '0';
          lamp.style.opacity = '1';
        }
        if (clock) {
          clock.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1.5), opacity 0.8s ease';
          clock.style.opacity = '1';
          clock.style.transform = 'scale(1)';
        }
        if (deskEl) {
          deskEl.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease';
          deskEl.style.opacity = '1';
          deskEl.style.transform = 'translateY(0)';
        }
      }, 11650);

      // Step 7: Reveal grid and start typewriter text loops (12.15s)
      scheduleHeroTimeout(() => {
        logDebug("Fallback Step 7: Grid reveal & start typewriter loops.");
        if (grid) {
          grid.style.transition = 'opacity 0.4s ease-out';
          grid.style.opacity = '1';
        }
        if (dottedSpotlight) {
          dottedSpotlight.style.transition = 'opacity 0.4s ease-out';
          dottedSpotlight.style.opacity = '1';
        }
        
        // Reveal gradient shimmer brand logo
        if (dotMatrix) {
          dotMatrix.style.transition = 'opacity 0.5s ease';
          dotMatrix.style.opacity = '0.6';
          dotMatrix.classList.add('active');
        }
        const brandElFallback = document.getElementById('hero-brand-shimmer');
        if (brandElFallback) {
          brandElFallback.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
          brandElFallback.style.opacity = '1';
          brandElFallback.style.transform = 'translateY(0)';
          setTimeout(() => {
            startHeroTypewriter();
            if (scrollDown) {
              scrollDown.style.transition = 'opacity 0.6s ease';
              scrollDown.style.opacity = '1';
            }
            floatingIcons.forEach(icon => {
              icon.style.transition = 'opacity 1s ease, transform 1s ease';
              icon.style.opacity = '0.75';
              icon.style.transform = 'scale(1)';
            });
            logDebug("All hero reveals complete.");
          }, 900);
        }
      }, 12150);
    }

    // Helper: Static Instant Reveal (for prefers-reduced-motion users)
    function runStaticFallback() {
      console.log("Running static content fallback (reduced-motion).");
      if (mask) mask.style.display = 'none';
      if (flash) flash.style.display = 'none';
      if (grid) grid.style.opacity = '1';
      if (dottedSpotlight) dottedSpotlight.style.opacity = '1';
      if (heroContainer) heroContainer.style.backgroundColor = 'transparent';
      
      const lamp = document.getElementById('hero-lamp');
      if (lamp) {
        lamp.style.top = '0';
        lamp.style.opacity = '1';
      }
      const clock = document.getElementById('wall-clock');
      if (clock) {
        clock.style.opacity = '1';
        clock.style.transform = 'scale(1)';
      }
      const deskEl = document.querySelector('.hero-desk');
      if (deskEl) {
        deskEl.style.opacity = '1';
        deskEl.style.transform = 'translateY(0)';
      }
      
      if (dotMatrix) {
        dotMatrix.style.opacity = '0.5';
        dotMatrix.classList.add('active');
      }
      if (tagline) tagline.style.opacity = '1';
      if (scrollDown) {
        scrollDown.style.opacity = '1';
        scrollDown.style.transform = 'translateX(-50%) translateY(0)';
      }
      const brandElStatic = document.getElementById('hero-brand-shimmer');
      if (brandElStatic) { brandElStatic.style.opacity = '1'; brandElStatic.style.transform = 'translateY(0)'; }
      const twWrapStatic = document.getElementById('hero-typewriter-wrap');
      if (twWrapStatic) { twWrapStatic.classList.add('visible'); document.getElementById('hero-typewriter-text').textContent = 'We Build What You Imagine.'; }

      floatingIcons.forEach(icon => {
        icon.style.opacity = '0.75';
        icon.style.transform = 'scale(1)';
      });
    }

    // Prefers-reduced-motion fallback
    if (isReducedMotion) {
      runStaticFallback();
      return;
    }

    // Check if GSAP is available in scope
    if (typeof gsap === 'undefined') {
      console.warn("GSAP is not loaded. Falling back to native CSS/JS transition animations.");
      runJSAnimationFallback();
      return;
    }

    // GSAP Timeline Sequencing
    const tl = gsap.timeline();
    heroSequenceTimeline = tl;

    // Helper to add glitch to a phrase
    function queueGlitch(phrase, delayFromStart) {
      tl.add(() => {
        if (phrase) phrase.classList.add('glitching');
      }, delayFromStart);
      tl.add(() => {
        if (phrase) phrase.classList.remove('glitching');
      }, delayFromStart + 0.35);
    }

    // Phase 1: Phrase 1 ("GET READY!") - 0.0s -> 3.2s
    if (phrase1) {
      tl.to(phrase1, {
        opacity: 1,
        scale: 1.0,
        letterSpacing: '0.45em',
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'sine.inOut',
        onStart: () => {
          logDebug("GSAP: phrase1 fade-in start");
        }
      }, 0.0);
      
      // Trigger a glitch in the middle
      queueGlitch(phrase1, 1.0);

      // Letter-spacing drift & zoom hold
      tl.to(phrase1, {
        scale: 1.03,
        letterSpacing: '0.55em',
        duration: 0.8,
        ease: 'none'
      }, 1.4);

      // Defocus & fade-out
      tl.to(phrase1, {
        opacity: 0,
        scale: 1.08,
        letterSpacing: '0.65em',
        filter: 'blur(20px)',
        duration: 1.0,
        ease: 'sine.inOut'
      }, 2.2);
    }

    // Phase 2: Phrase 2 ("TO DIVE IN") - 3.5s -> 6.7s
    if (phrase2) {
      tl.to(phrase2, {
        opacity: 1,
        scale: 1.0,
        letterSpacing: '0.45em',
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'sine.inOut'
      }, 3.5);
      
      // Trigger a glitch in the middle
      queueGlitch(phrase2, 4.5);

      // Letter-spacing drift & zoom hold
      tl.to(phrase2, {
        scale: 1.03,
        letterSpacing: '0.55em',
        duration: 0.8,
        ease: 'none'
      }, 4.9);

      // Defocus & fade-out
      tl.to(phrase2, {
        opacity: 0,
        scale: 1.08,
        letterSpacing: '0.65em',
        filter: 'blur(20px)',
        duration: 1.0,
        ease: 'sine.inOut'
      }, 5.7);
    }

    // Phase 3: Phrase 3 ("THE WORLD OF") - 7.0s -> 10.2s
    if (phrase3) {
      tl.to(phrase3, {
        opacity: 1,
        scale: 1.0,
        letterSpacing: '0.45em',
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'sine.inOut'
      }, 7.0);
      
      if (flare) {
        tl.to(flare, {
          opacity: 0.85,
          scaleX: 1.2,
          duration: 1.4,
          ease: 'sine.inOut'
        }, 7.0);
      }
      
      // Trigger a glitch in the middle
      queueGlitch(phrase3, 8.0);

      // Letter-spacing drift & zoom hold
      tl.to(phrase3, {
        scale: 1.03,
        letterSpacing: '0.55em',
        duration: 0.8,
        ease: 'none'
      }, 8.4);

      // Defocus & fade-out
      tl.to(phrase3, {
        opacity: 0,
        scale: 1.08,
        letterSpacing: '0.65em',
        filter: 'blur(20px)',
        duration: 1.0,
        ease: 'sine.inOut'
      }, 9.2);

      if (flare) {
        tl.to(flare, {
          opacity: 0,
          scaleX: 0.8,
          duration: 1.0,
          ease: 'sine.inOut'
        }, 9.2);
      }
    }

    // Phase 4: Suspenseful black screen pause before launch (10.2s -> 11.4s)
    // Handled by adding the next animation at absolute timestamp 11.4s

    // Phase 5: Flashbang overlay bloom - 11.4s -> 11.65s
    if (flash) {
      tl.to(flash, {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.in',
        onStart: () => {
          logDebug("GSAP: Flashbang bloom peak");
        }
      }, 11.4);
    }

    // Phase 6: Settle background and hide mask instantly at flash peak - 11.65s
    tl.add(() => {
      logDebug("GSAP: Transitioning mask canvas to theme");
      if (mask) mask.style.display = 'none';
      if (heroContainer) heroContainer.style.backgroundColor = 'transparent';
    }, 11.65);

    // Phase 6.5: Fade out flashbang and animate clock, lamp, and desk - 11.65s -> 12.15s
    if (flash) {
      tl.to(flash, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',
        onStart: () => {
          logDebug("GSAP: Fading out flashbang");
        }
      }, 11.65);
    }

    // Parallel animations for clock, lamp, and desk
    tl.add(() => {
      const lamp = document.getElementById('hero-lamp');
      const clock = document.getElementById('wall-clock');
      const deskEl = document.querySelector('.hero-desk');

      if (lamp) {
        gsap.to(lamp, {
          top: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.15)'
        });
      }
      if (clock) {
        gsap.to(clock, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.5)'
        });
      }
      if (deskEl) {
        gsap.to(deskEl, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    }, 11.65);

    // Phase 6.6: Reveal grid and spotlight (11.65s)
    if (grid || dottedSpotlight) {
      const revealTargets = [];
      if (grid) revealTargets.push(grid);
      if (dottedSpotlight) revealTargets.push(dottedSpotlight);
      
      tl.to(revealTargets, {
        opacity: 1,
        duration: 0.5,
        onStart: () => {
          logDebug("GSAP: Revealing technical grid and dotted spotlight");
        }
      }, 11.65);
    }

    // Phase 7: Reveal gradient shimmer brand logo & start typewriter - 12.15s
    tl.add(() => {
      logDebug("GSAP: Revealing brand shimmer logo");
      if (dotMatrix) {
        gsap.to(dotMatrix, { opacity: 0.6, duration: 0.5 });
        dotMatrix.classList.add('active');
      }
      if (brandEl) {
        gsap.to(brandEl, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          onComplete: () => {
            startHeroTypewriter();
            if (scrollDown) gsap.to(scrollDown, { opacity: 1, y: 0, duration: 0.6 });
            floatingIcons.forEach((icon, i) => {
              gsap.to(icon, { opacity: 0.75, scale: 1, y: 0, duration: 1, delay: i * 0.15, ease: 'power2.out' });
              floatIconLoop(icon);
            });
            logDebug("GSAP: Hero sequence completed");
          }
        });
      } else {
        if (tagline) gsap.to(tagline, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' });
        if (scrollDown) gsap.to(scrollDown, { opacity: 1, y: 0, duration: 0.6 });
      }
    }, 12.15);

    // Sequence runner for single-line typewriter effect (defined inside scope for closure access)
    function executeTypewriterSequence(onComplete) {
      if (!line1) return;
      
      // 1. Type IMAGINE
      typeText(line1, 'IMAGINE', 80, () => {
        // Reveal the dot-matrix grid above the text
        if (dotMatrix) {
          if (typeof gsap !== 'undefined') {
            gsap.to(dotMatrix, { opacity: 0.6, duration: 0.5 });
          } else {
            dotMatrix.style.transition = 'opacity 0.5s ease';
            dotMatrix.style.opacity = '0.6';
          }
          dotMatrix.classList.add('active');
        }
        
        // Pause 1s so the user can read IMAGINE
        scheduleHeroTimeout(() => {
          // 2. Erase IMAGINE
          deleteText(line1, 40, () => {
            // Pause 0.3s before typing the next word
            scheduleHeroTimeout(() => {
              // 3. Type DESIGN
              typeText(line1, 'DESIGN', 80, () => {
                // Pause 1s so the user can read DESIGN
                scheduleHeroTimeout(() => {
                  // 4. Erase DESIGN
                  deleteText(line1, 40, () => {
                    // Pause 0.3s before typing final text
                    scheduleHeroTimeout(() => {
                      // 5. Type WITH MANTRAKAAR
                      typeText(line1, 'WITH MANTRAKAAR', 60, () => {
                        if (onComplete) onComplete();
                      });
                    }, 300);
                  });
                }, 1000);
              });
            }, 300);
          });
        }, 1000);
      });
    }
  }

  // Typewriter Helper - Types text character-by-character
  function typeText(element, text, speed, callback) {
    if (!element) return;
    let index = 0;
    element.innerHTML = '<span class="typewriter-cursor"></span>';
    const cursor = element.querySelector('.typewriter-cursor');

    function type() {
      if (index < text.length) {
        if (cursor) {
          cursor.insertAdjacentText('beforebegin', text.charAt(index));
        } else {
          element.textContent = text.substring(0, index + 1);
        }
        index++;
        
        // timing variance
        const variance = Math.random() * 40 - 20; 
        scheduleHeroTimeout(type, speed + variance);
      } else {
        if (cursor) cursor.remove(); // Remove cursor on line finish
        if (callback) callback();
      }
    }
    type();
  }

  // Typewriter Helper - Deletes text character-by-character (backspace effect)
  function deleteText(element, speed, callback) {
    if (!element) return;
    
    // Create cursor if not present
    let cursor = element.querySelector('.typewriter-cursor');
    if (!cursor) {
      cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      element.appendChild(cursor);
    }

    function erase() {
      const currentText = element.textContent;
      if (currentText.length > 0) {
        element.innerHTML = currentText.substring(0, currentText.length - 1) + '<span class="typewriter-cursor"></span>';
        scheduleHeroTimeout(erase, speed);
      } else {
        if (cursor) cursor.remove(); // Remove cursor on finish
        if (callback) callback();
      }
    }
    erase();
  }



  /* ==========================================================================
     Hero Typewriter Sentence Loop
     ========================================================================== */
  function startHeroTypewriter() {
    const wrap = document.getElementById('hero-typewriter-wrap');
    const textEl = document.getElementById('hero-typewriter-text');
    if (!wrap || !textEl) return;

    const sentences = [
      'We Build What You Imagine.',
      'We Design What You Dream.',
      'We Craft What You Envision.',
      'We Deliver What You Deserve.'
    ];

    let si = 0, ci = 0, deleting = false;

    wrap.classList.add('visible');

    function tick() {
      const target = sentences[si];
      if (!deleting) {
        textEl.textContent = target.substring(0, ci + 1);
        ci++;
        if (ci === target.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
        setTimeout(tick, 52);
      } else {
        textEl.textContent = target.substring(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          si = (si + 1) % sentences.length;
          setTimeout(tick, 320);
          return;
        }
        setTimeout(tick, 28);
      }
    }

    setTimeout(tick, 300);
  }

  // Slow Floating Icon Motion
  function floatIconLoop(icon) {
    if (typeof gsap === 'undefined') return;
    gsap.to(icon, {
      y: '+=10',
      x: '+=8',
      duration: 3 + Math.random() * 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }

  /* ==========================================================================
     Navbar Search Control
     ========================================================================== */
  function initNavbarSearch() {
    const searchBtn = document.querySelector('.nav-search-btn');
    const inputWrapper = document.querySelector('.search-input-wrapper');
    const searchInput = inputWrapper ? inputWrapper.querySelector('input') : null;
    
    if (!searchBtn || !inputWrapper || !searchInput) return;

    // Toggle search
    searchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      inputWrapper.classList.toggle('active');
      const icon = searchBtn.querySelector('i');
      
      if (inputWrapper.classList.contains('active')) {
        searchInput.focus();
        if (icon) icon.classList.replace('fa-magnifying-glass', 'fa-xmark');
        searchBtn.setAttribute('aria-label', 'Close Search');
      } else {
        searchInput.value = '';
        if (icon) icon.classList.replace('fa-xmark', 'fa-magnifying-glass');
        searchBtn.setAttribute('aria-label', 'Search');
      }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && inputWrapper.classList.contains('active')) {
        inputWrapper.classList.remove('active');
        const icon = searchBtn.querySelector('i');
        if (icon) icon.classList.replace('fa-xmark', 'fa-magnifying-glass');
        searchBtn.focus();
      }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!inputWrapper.contains(e.target) && !searchBtn.contains(e.target)) {
        if (inputWrapper.classList.contains('active')) {
          inputWrapper.classList.remove('active');
          const icon = searchBtn.querySelector('i');
          if (icon) icon.classList.replace('fa-xmark', 'fa-magnifying-glass');
        }
      }
    });
  }

  /* ==========================================================================
     Theme & Language Actions
     ========================================================================== */
  function initToggles() {
    // Theme Toggle
    const themeBtn = document.querySelector('.theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('mantrakaar-theme', isDarkMode ? 'dark' : 'light');
        
        // Update floats visibility opacity values in dark mode
        const floatingIcons = document.querySelectorAll('.marketing-icon-floating');
        floatingIcons.forEach(icon => {
          if (icon.style.opacity > 0) {
            icon.style.opacity = 0.75;
          }
        });

        // Switch icon between Sun & Moon
        const icon = themeBtn.querySelector('i');
        if (icon) {
          if (isDarkMode) {
            icon.classList.replace('fa-moon', 'fa-sun');
          } else {
            icon.classList.replace('fa-sun', 'fa-moon');
          }
        }
      });
    }

    // Language Dropdown Links
    const langLinks = document.querySelectorAll('.lang-dropdown a');
    langLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        currentLang = lang;
        localStorage.setItem('mantrakaar-lang', lang);
        
        // Update language label
        const langLabel = document.querySelector('.lang-toggle span');
        if (langLabel) langLabel.textContent = lang.toUpperCase();

        updateLanguageTexts(lang);
      });
    });
  }

  // translations constant moved to the top of DOMContentLoaded to resolve hoisting reference errors

  function updateLanguageTexts(lang) {
    const keys = translations[lang];
    if (!keys) return;

    // Update data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (keys[key]) {
        if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
          elem.placeholder = keys[key];
        } else if (elem.querySelector('.ut-btn-text')) {
          elem.querySelector('.ut-btn-text').textContent = keys[key];
        } else {
          elem.textContent = keys[key];
        }
      }
    });
  }

  /* ==========================================================================
     Carousel Initializations (Swiper.js)
     ========================================================================== */
  function initCarousels() {
    // Check if Swiper class exists in scope
    if (typeof Swiper === 'undefined') {
      console.warn("Swiper is not loaded. Leaving sliders in standard overflow columns.");
      return;
    }

    // 1. Blogs Slideshow Swiper
    const blogsSwiper = new Swiper('.blogs-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        }
      },
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous blog post',
        nextSlideMessage: 'Next blog post',
      }
    });
    // 2. Our Happy Clients Section: 3D Cylindrical Curved Carousel
    function initClients3DCarousel() {
      const viewport = document.querySelector('.clients-carousel-viewport');
      const track = document.querySelector('.clients-carousel-track');
      const cards = document.querySelectorAll('.clients-carousel-card');
      const prevBtn = document.querySelector('.clients-carousel-btn.prev');
      const nextBtn = document.querySelector('.clients-carousel-btn.next');

      if (!viewport || !track || cards.length === 0) return;

      const cardCount = cards.length;
      const angleStep = 360 / cardCount; // 30 degrees
      let currentRotation = 0; // in degrees
      let isDragging = false;
      let isHovered = false;
      let isTransitioning = false;
      let startX = 0;
      let startRotation = 0;
      let animationFrameId = null;
      let transitionTimeout = null;

      // Speed: degrees per frame (negative rotates left/counter-clockwise, about -3 degrees per second at 60fps)
      const spinSpeed = -0.05;

      function updateCardActiveState() {
        // Track Rotation = -CardIndex * angleStep => CardIndex = Math.round(-currentRotation / angleStep)
        const normalizedRotation = ((currentRotation % 360) + 360) % 360; // 0 to 360
        const cardIndexFacingFront = Math.round((360 - normalizedRotation) / angleStep) % cardCount;

        cards.forEach((card, idx) => {
          // Calculate the card's current angle in world space (relative to view front)
          const cardAngle = (idx * angleStep) + currentRotation;
          const cardAngleRad = cardAngle * Math.PI / 180;
          const cosAngle = Math.cos(cardAngleRad); // 1 at front, 0 at sides, -1 at back

          if (idx === cardIndexFacingFront) {
            card.classList.add('active-card');
          } else {
            card.classList.remove('active-card');
          }

          // Shading and depth of field based on Z-depth (cosAngle)
          const depthProgress = Math.max(0, cosAngle); // clamp to [0, 1] for front half
          
          // Smooth opacity curve: front is 1.0, sides fade to 0.12, back is 0
          const opacity = cosAngle > 0 
            ? (0.12 + 0.88 * Math.pow(depthProgress, 1.5)) 
            : 0.12 * (1 + cosAngle); // fades to 0 at back

          // Depth blur (out of focus on sides)
          const blurVal = (1 - depthProgress) * 2.5; // up to 2.5px blur
          // Depth brightness (darker on sides)
          const brightnessVal = 0.45 + 0.55 * depthProgress;
          // Scale offset slightly to enhance perspective projection
          const scaleVal = 0.82 + 0.18 * depthProgress;

          card.style.setProperty('--card-opacity', opacity.toFixed(3));
          card.style.setProperty('--card-blur', `${blurVal.toFixed(2)}px`);
          card.style.setProperty('--card-brightness', brightnessVal.toFixed(3));
          card.style.setProperty('--card-scale', scaleVal.toFixed(3));
        });
      }

      function rotateCarousel(angle) {
        currentRotation = angle;
        track.style.setProperty('--rotate-y', `${currentRotation}deg`);
        updateCardActiveState();
      }

      function snapCarousel() {
        isTransitioning = true;
        track.classList.add('transitioning');
        
        // Snap to nearest 30deg increment
        const snappedRotation = Math.round(currentRotation / angleStep) * angleStep;
        rotateCarousel(snappedRotation);

        if (transitionTimeout) clearTimeout(transitionTimeout);
        transitionTimeout = setTimeout(() => {
          track.classList.remove('transitioning');
          isTransitioning = false;
        }, 400); // matches the 0.4s transition duration
      }

      function rotateByCardCount(direction) {
        isTransitioning = true;
        track.classList.add('transitioning');

        // direction: 1 for prev (clockwise/right), -1 for next (counter-clockwise/left)
        const targetRotation = Math.round(currentRotation / angleStep) * angleStep + (direction * angleStep);
        rotateCarousel(targetRotation);

        if (transitionTimeout) clearTimeout(transitionTimeout);
        transitionTimeout = setTimeout(() => {
          track.classList.remove('transitioning');
          isTransitioning = false;
        }, 400); // matches the 0.4s transition duration
      }

      // Drag / Touch handlers
      function handleDragStart(e) {
        isDragging = true;
        isTransitioning = false;
        track.classList.remove('transitioning');
        track.classList.add('dragging');

        startX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        startRotation = currentRotation;
      }

      function handleDragMove(e) {
        if (!isDragging) return;
        
        const currentX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const deltaX = currentX - startX;
        
        // 1px drag = 0.15 degrees rotation
        const rotationDelta = deltaX * 0.15;
        const targetRotation = startRotation + rotationDelta;
        
        track.style.setProperty('--rotate-y', `${targetRotation}deg`);
        currentRotation = targetRotation;
        updateCardActiveState();
      }

      function handleDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('dragging');
        snapCarousel();
      }

      // Mouse drag event bindings
      viewport.addEventListener('mousedown', handleDragStart);
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);

      // Touch swipe event bindings
      viewport.addEventListener('touchstart', handleDragStart, { passive: true });
      viewport.addEventListener('touchmove', handleDragMove, { passive: true });
      viewport.addEventListener('touchend', handleDragEnd);

      // Prevent images from ghost-dragging
      viewport.addEventListener('dragstart', (e) => e.preventDefault());

      // Navigation buttons
      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          rotateByCardCount(1);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          rotateByCardCount(-1);
        });
      }

      // Hover triggers
      viewport.addEventListener('mouseenter', () => {
        isHovered = true;
      });
      viewport.addEventListener('mouseleave', () => {
        isHovered = false;
      });

      // Smooth continuous animation loop
      function animate() {
        if (!isDragging && !isHovered && !isTransitioning) {
          currentRotation += spinSpeed;
          track.style.setProperty('--rotate-y', `${currentRotation}deg`);
          updateCardActiveState();
        }
        animationFrameId = requestAnimationFrame(animate);
      }

      // Initial state
      rotateCarousel(0);
      animate();
    }

    // Initialize 3D carousel
    initClients3DCarousel();


    // 3. Custom Split-Screen Testimonials Slider
    initSplitTestimonialsSlider();
  }

  /* ==========================================================================
     Custom Split-Screen Testimonials Slider
     ========================================================================== */
  function initSplitTestimonialsSlider() {
    const container = document.querySelector('.split-testimonials-container');
    if (!container) return;

    const leftSlides = container.querySelectorAll('.left-slide');
    const rightSlides = container.querySelectorAll('.right-slide');
    const dots = container.querySelectorAll('.nav-dot');
    const btnUp = container.querySelector('.divider-nav-btn.btn-up');
    const btnDown = container.querySelector('.divider-nav-btn.btn-down');
    const dividerLogo = container.querySelector('.divider-active-logo');
    const dividerLogoBadge = container.querySelector('.divider-logo-badge');
    
    let activeIndex = 0;
    const totalSlides = leftSlides.length;
    let autoplayInterval = null;

    // Retrieve active logo sources from the left slides
    const logoSources = [];
    leftSlides.forEach(slide => {
      const logoImg = slide.querySelector('.client-logo-overlay img');
      logoSources.push(logoImg ? logoImg.getAttribute('src') : '');
    });

    function showSlide(index, direction = 'next') {
      if (index === activeIndex) return;

      const prevActiveIndex = activeIndex;
      activeIndex = index;

      // Update divider logo badge animation
      if (dividerLogoBadge && dividerLogo) {
        dividerLogoBadge.classList.add('animating');
        setTimeout(() => {
          dividerLogo.setAttribute('src', logoSources[activeIndex]);
          dividerLogo.setAttribute('alt', `Active Logo ${activeIndex + 1}`);
          dividerLogoBadge.classList.remove('animating');
        }, 400); // matches CSS rotation transition half-duration
      }

      // Update dots active class
      dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      // Slide Transitions
      leftSlides.forEach((slide, idx) => {
        // Reset classes
        slide.classList.remove('active', 'prev', 'next');
        
        if (idx === activeIndex) {
          slide.classList.add('active');
        } else if (idx === prevActiveIndex) {
          slide.classList.add('prev');
        } else {
          slide.classList.add('next');
        }
      });

      rightSlides.forEach((slide, idx) => {
        // Reset classes
        slide.classList.remove('active', 'prev', 'next');
        
        if (idx === activeIndex) {
          slide.classList.add('active');
        } else if (idx === prevActiveIndex) {
          slide.classList.add('prev');
        } else {
          slide.classList.add('next');
        }
      });
    }

    function nextSlide() {
      const nextIndex = (activeIndex + 1) % totalSlides;
      showSlide(nextIndex, 'next');
    }

    // Explicit function for up arrow sliding in opposite direction
    function prevSlide() {
      const prevIndex = (activeIndex - 1 + totalSlides) % totalSlides;
      showSlide(prevIndex, 'prev');
    }

    // Auto Rotation
    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Nav Dot Clicks
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        stopAutoplay();
        showSlide(idx, idx > activeIndex ? 'next' : 'prev');
        startAutoplay();
      });
    });

    // Arrow Nav Clicks
    if (btnUp) {
      btnUp.addEventListener('click', (e) => {
        e.preventDefault();
        stopAutoplay();
        prevSlide();
        startAutoplay();
      });
    }

    if (btnDown) {
      btnDown.addEventListener('click', (e) => {
        e.preventDefault();
        stopAutoplay();
        nextSlide();
        startAutoplay();
      });
    }

    // Mouse Hover Listeners for Autoplay Pause
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    // Initialize Autoplay
    startAutoplay();
  }

  /* ==========================================================================
     Magnetic Hover Buttons Math
     ========================================================================== */
  function initMagneticButtons() {
    const magnets = document.querySelectorAll('.btn-magnetic');
    
    magnets.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const bound = btn.getBoundingClientRect();
        
        // Calculate offset from center coordinates
        const x = e.clientX - bound.left - (bound.width / 2);
        const y = e.clientY - bound.top - (bound.height / 2);
        
        // Translate button container partially
        if (typeof gsap !== 'undefined') {
          gsap.to(btn, {
            x: x * 0.45,
            y: y * 0.45,
            duration: 0.3,
            ease: 'power2.out'
          });

          // Translate the inner text wrapper even more to enhance depth feeling
          const text = btn.querySelector('span');
          if (text) {
            gsap.to(text, {
              x: x * 0.25,
              y: y * 0.25,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        } else {
          // Standard JS Translate fallback if GSAP missing
          btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
          const text = btn.querySelector('span');
          if (text) {
            text.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
          }
        }
      });

      btn.addEventListener('mouseleave', () => {
        // Return back to base coordinate
        if (typeof gsap !== 'undefined') {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.4)'
          });

          const text = btn.querySelector('span');
          if (text) {
            gsap.to(text, {
              x: 0,
              y: 0,
              duration: 0.6,
              ease: 'elastic.out(1, 0.4)'
            });
          }
        } else {
          btn.style.transform = 'translate(0, 0)';
          const text = btn.querySelector('span');
          if (text) {
            text.style.transform = 'translate(0, 0)';
          }
        }
      });
    });
  }

  /* ==========================================================================
     Floating Socials
     ========================================================================== */
  function initFloatingSocials() {
    const socialButtons = document.querySelectorAll('.floating-social-btn');
    socialButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const channel = btn.getAttribute('data-social');
        console.log(`Navigating to floating social link: ${channel}`);
      });
    });
  }

  /* ==========================================================================
     Mobile Menu Handler
     ========================================================================== */
  function initMobileMenu() {
    const hamburger = document.getElementById('ut-open-mobile-menu');
    const mobileMenu = document.querySelector('.mobile-nav-menu');
    const links = document.querySelectorAll('.mobile-nav-menu a');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  /* ==========================================================================
     Dotted Spotlight Grid Tracking & Mobile Autoplay Loop
     ========================================================================== */
  function initDottedSpotlight() {
    const heroContainer = document.getElementById('hero-section-container');
    const dottedSpotlight = document.querySelector('.hero-dotted-spotlight');
    if (!heroContainer || !dottedSpotlight) return;

    let floatTween = null;
    const pos = { x: 50, y: 50 };

    // Function to run the auto-floating spotlight (touch/idle state)
    function startFloating() {
      if (typeof gsap === 'undefined') return;
      
      // Kill any active float tweens to avoid overlap
      if (floatTween) floatTween.kill();

      // Animate pos.x and pos.y smoothly to random spots within the grid
      floatTween = gsap.to(pos, {
        x: 'random(15, 85)',
        y: 'random(20, 80)',
        duration: 'random(4, 7)',
        ease: 'sine.inOut',
        onUpdate: () => {
          dottedSpotlight.style.setProperty('--mouse-x', `${pos.x}%`);
          dottedSpotlight.style.setProperty('--mouse-y', `${pos.y}%`);
        },
        onComplete: startFloating
      });
    }

    function stopFloating() {
      if (floatTween) {
        floatTween.kill();
        floatTween = null;
      }
    }

    // Detect if device supports touch events primarily (mobile/tablet)
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
      // Touch/Mobile: Always run the automatic floating loop since hover doesn't exist
      startFloating();
    } else {
      // Desktop: Start floating initially so there's breathing light on load
      startFloating();

      // On mousemove, track the cursor coordinates relative to hero section
      heroContainer.addEventListener('mousemove', (e) => {
        stopFloating(); // Stop auto-floating while active hover controls it
        
        const rect = heroContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPct = (x / rect.width) * 100;
        const yPct = (y / rect.height) * 100;

        // Keep local position state in sync so mouseleave transition is seamless
        pos.x = xPct;
        pos.y = yPct;

        dottedSpotlight.style.setProperty('--mouse-x', `${xPct}%`);
        dottedSpotlight.style.setProperty('--mouse-y', `${yPct}%`);
      });

      // On mouseleave, resume automatic floating smoothly
      heroContainer.addEventListener('mouseleave', () => {
        startFloating();
      });
    }
  }

  /* ==========================================================================
     Elegant Wall Clock (Live real-time sweep)
     ========================================================================== */
  function initWallClock() {
    const hourHand = document.getElementById('clock-hour');
    const minuteHand = document.getElementById('clock-minute');
    const secondHand = document.getElementById('clock-second');
    
    if (!hourHand || !minuteHand || !secondHand) return;
    
    function updateClock() {
      const now = new Date();
      const ms = now.getMilliseconds();
      const sec = now.getSeconds() + ms / 1000;
      const min = now.getMinutes() + sec / 60;
      const hr = (now.getHours() % 12) + min / 60;
      
      const secDeg = sec * 6;
      const minDeg = min * 6;
      const hrDeg = hr * 30;
      
      secondHand.style.transform = `rotate(${secDeg}deg)`;
      minuteHand.style.transform = `rotate(${minDeg}deg)`;
      hourHand.style.transform = `rotate(${hrDeg}deg)`;
      
      requestAnimationFrame(updateClock);
    }
    requestAnimationFrame(updateClock);
  }

  /* ==========================================================================
     Hanging Lamp Spring Physics Repel & Pendulum Swing
     ========================================================================== */
  function initHangingLamp() {
    const lamp = document.getElementById('hero-lamp');
    const heroContainer = document.getElementById('hero-section-container');
    if (!lamp || !heroContainer) return;
    
    let angle = 0.05; // Initial slight swing angle in radians
    let angularVelocity = 0;
    
    let repelX = 0;
    let repelY = 0;
    let repelVx = 0;
    let repelVy = 0;
    
    let mouseX = -1000;
    let mouseY = -1000;
    let mouseActive = false;
    
    heroContainer.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
    });
    
    heroContainer.addEventListener('mouseleave', () => {
      mouseActive = false;
    });
    
    function updateLamp() {
      const heroRect = heroContainer.getBoundingClientRect();
      
      // The lamp pivot is at top: 0, left: 10% relative to the hero section container, centered (container width 150px)
      const pivotX = heroRect.left + (heroRect.width * 0.10) + 75;
      const pivotY = heroRect.top;
      
      // Pendulum length
      const L = 335;
      
      // Current actual shade position in viewport coordinates (including swing and repel transforms)
      const currentTotalAngle = angle + Math.atan2(repelX, L);
      const shadeX = pivotX + repelX + L * Math.sin(currentTotalAngle);
      const shadeY = pivotY + repelY + L * Math.cos(currentTotalAngle);
      
      let targetRepelX = 0;
      let targetRepelY = 0;
      
      if (mouseActive) {
        const dx = mouseX - shadeX;
        const dy = mouseY - shadeY;
        const distance = Math.hypot(dx, dy);
        
        // Repel if the cursor is closer than 180px
        if (distance < 180) {
          const forceFactor = (180 - distance) / 180;
          const pushForce = forceFactor * forceFactor * 140; // Max push of 140px
          
          const repelAngle = Math.atan2(dy, dx);
          
          targetRepelX = -Math.cos(repelAngle) * pushForce;
          targetRepelY = -Math.sin(repelAngle) * pushForce;
          
          // Push angular velocity to make it swing after mouse moves away
          const horizontalPush = -Math.cos(repelAngle) * forceFactor * 0.005;
          angularVelocity += horizontalPush;
        }
      }
      
      // Pendulum physics (gravity restoration)
      const g = 0.0015;
      const angularAcceleration = -g * Math.sin(angle);
      angularVelocity += angularAcceleration;
      
      // Ambient breeze to sustain swing indefinitely
      angularVelocity += 0.00003 * Math.sin(Date.now() * 0.001);
      
      // Air resistance damping
      angularVelocity *= 0.993;
      angle += angularVelocity;
      
      // Spring physics for smooth repel transition and settle bounce
      const k = 0.08;
      const damp = 0.82;
      
      const ax = (targetRepelX - repelX) * k;
      const ay = (targetRepelY - repelY) * k;
      
      repelVx = (repelVx + ax) * damp;
      repelVy = (repelVy + ay) * damp;
      
      repelX += repelVx;
      repelY += repelVy;
      
      // Combine swing rotation and translation angle tilt
      const repelAngleRad = Math.atan2(repelX, L);
      const totalAngleDeg = -(angle + repelAngleRad) * (180 / Math.PI);
      
      lamp.style.setProperty('--repel-x', `${repelX}px`);
      lamp.style.setProperty('--repel-y', `${repelY}px`);
      lamp.style.setProperty('--angle', `${totalAngleDeg}deg`);
      
      requestAnimationFrame(updateLamp);
    }
    
    requestAnimationFrame(updateLamp);
  }

  /* ==========================================================================
     Scroll-Triggered Reveal Animations (Intersection Observer & Vivus drawing)
     ========================================================================== */
  function initScrollReveals() {
    console.log("[ANIMATIONS] initScrollReveals called");
    const revealElements = document.querySelectorAll('.reveal-element');
    console.log("[ANIMATIONS] Found " + revealElements.length + " reveal elements");
    if (!revealElements.length) return;

    const observerOptions = {
      root: null, // Use viewport
      rootMargin: '0px 0px -60px 0px', // Trigger slightly before entering fully
      threshold: 0.1 // 10% visible
    };

    // Track Vivus instances dynamically
    const vivusInstances = {};

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        const el = entry.target;
        
        if (entry.isIntersecting) {
          // Apply inline styles for transition delay/duration if specified in data attributes
          const delay = el.getAttribute('data-delay');
          const duration = el.getAttribute('data-duration');
          
          if (delay) el.style.transitionDelay = delay;
          if (duration) el.style.transitionDuration = duration;
          
          el.classList.add('is-visible');

          // Vivus drawing animation trigger for SVG inside services cards
          const svgEl = el.querySelector('.ut-vivus-draw');
          if (svgEl && svgEl.id && typeof Vivus !== 'undefined') {
            if (!vivusInstances[svgEl.id]) {
              vivusInstances[svgEl.id] = new Vivus(svgEl.id, {
                type: 'oneByOne',
                duration: 100,
                start: 'manual'
              });
            }
            // Stop, reset, and play the line-drawing animation exactly as the original site
            vivusInstances[svgEl.id].stop().reset().play();
          }
        } else {
          // Remove class and clear transition delay on exit so it resets instantly for next scroll
          el.style.transitionDelay = '0ms';
          el.classList.remove('is-visible');

          // Reset Vivus animation on exit so it draws again next time it scrolls into view
          const svgEl = el.querySelector('.ut-vivus-draw');
          if (svgEl && svgEl.id && vivusInstances[svgEl.id]) {
            vivusInstances[svgEl.id].reset();
          }
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     14. Editorial Services Spotlight (Concept 1)
     ========================================================================== */
  function initServicesSpotlight() {
    const listItems = document.querySelectorAll('.spotlight-list-item');
    const previewCards = document.querySelectorAll('.spotlight-preview-card');

    if (!listItems.length || !previewCards.length) return;

    // Mouse glow coordinate tracking for cards
    previewCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Hover spotlight switcher logic
    listItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        // Deactivate all
        listItems.forEach(i => i.classList.remove('active'));
        previewCards.forEach(c => c.classList.remove('active'));

        // Activate current item
        item.classList.add('active');

        // Activate corresponding preview card
        const serviceId = item.getAttribute('data-service');
        const targetCard = document.getElementById(`preview-${serviceId}`);
        if (targetCard) {
          targetCard.classList.add('active');
        }
      });
    });
  }

  /* ==========================================================================
     Redesigned Bento Portfolio Grid & Interactive Widgets
     ========================================================================== */
  function initPortfolioGrid() {
    const grid = document.querySelector('.work-bento-grid');
    if (!grid) return;

    const cards = document.querySelectorAll('.work-bento-card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // 1. 3D Hover Tilt & Spotlight Glow Tracking
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update CSS variables for radial glow effect
        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

        // Compute 3D rotation angles
        const rotateX = ((y / rect.height) - 0.5) * -12;
        const rotateY = ((x / rect.width) - 0.5) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });

    // 2. Category Filters Navigation
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('filtered-out');
          } else {
            card.classList.add('filtered-out');
          }
        });
      });
    });

    // 3. Nova AI Prompt Terminal widget logic
    const novaCard = document.querySelector('.card-wide[data-category="ai-saas"]');
    if (novaCard) {
      const outputEl = novaCard.querySelector('.terminal-output');
      const promptEl = novaCard.querySelector('.prompt-text');
      const triggers = novaCard.querySelectorAll('.trigger-btn');
      let isTyping = false;

      function typeText(target, text, speed, callback) {
        let i = 0;
        target.textContent = "";
        function step() {
          if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(step, speed);
          } else if (callback) {
            callback();
          }
        }
        step();
      }

      triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (isTyping) return;
          isTyping = true;

          const prompt = btn.getAttribute('data-prompt');
          typeText(promptEl, prompt, 40, () => {
            outputEl.textContent = "\nInitializing synthesis engine...\n";
            setTimeout(() => {
              outputEl.textContent += "Fetching design systems... [OK]\n";
              setTimeout(() => {
                if (prompt.includes("dashboard")) {
                  outputEl.textContent += "Rendering Dashboard mockup...\nSuccess! CSS compiled: 14 lines.";
                } else {
                  outputEl.textContent += "Applying theme color sweeps...\nSuccess! Accents aligned to brand-purple.";
                }
                isTyping = false;
              }, 600);
            }, 600);
          });
        });
      });
    }

    // 4. Veloce EV Telemetry Widget logic
    const veloceCard = document.querySelector('.widget-veloce')?.closest('.work-bento-card');
    if (veloceCard) {
      const needle = veloceCard.querySelector('.gauge-needle-wrap');
      const valEl = veloceCard.querySelector('.gauge-value');
      const levelEl = veloceCard.querySelector('.battery-level');
      const batteryLabel = veloceCard.querySelector('.battery-label');

      veloceCard.addEventListener('mouseenter', () => {
        // Sweep needle to 85%
        needle.style.transform = 'rotate(135deg)';
        // Animate count values
        let speedVal = 0;
        const speedInterval = setInterval(() => {
          if (speedVal < 85) {
            speedVal++;
            valEl.textContent = `${speedVal}%`;
          } else {
            clearInterval(speedInterval);
          }
        }, 10);

        // Fill battery
        levelEl.style.height = '92%';
        levelEl.style.backgroundColor = '#00ffcc';
        batteryLabel.textContent = '92%';
      });

      veloceCard.addEventListener('mouseleave', () => {
        // Settle back to default
        needle.style.transform = 'rotate(-120deg)';
        valEl.textContent = '0%';
        levelEl.style.height = '12%';
        levelEl.style.backgroundColor = '#ff5f56';
        batteryLabel.textContent = '12%';
      });
    }

    // 5. Apex iOS Mobile Fitness Widget logic
    const apexCard = document.querySelector('.widget-apex')?.closest('.work-bento-card');
    if (apexCard) {
      const redCircle = apexCard.querySelector('.red-fill');
      const purpleCircle = apexCard.querySelector('.purple-fill');

      apexCard.addEventListener('mouseenter', () => {
        redCircle.style.strokeDashoffset = '55.2';
        purpleCircle.style.strokeDashoffset = '66.8';
      });

      apexCard.addEventListener('mouseleave', () => {
        redCircle.style.strokeDashoffset = '251.2';
        purpleCircle.style.strokeDashoffset = '175.9';
      });
    }

    // 6. Solas Architecture Blueprint Widget logic
    const solasCard = document.querySelector('.widget-solas')?.closest('.work-bento-card');
    if (solasCard) {
      const canvas = solasCard.querySelector('.blueprint-canvas');
      const hLine = solasCard.querySelector('.blueprint-crosshair-h');
      const vLine = solasCard.querySelector('.blueprint-crosshair-v');
      const coords = solasCard.querySelector('.blueprint-coord');

      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);

        hLine.style.top = `${y}px`;
        vLine.style.left = `${x}px`;
        coords.textContent = `X: ${String(x).padStart(3, '0')} | Y: ${String(y).padStart(3, '0')}`;
      });
    }

    // 7. Zenith FinTech Trading Terminal Widget logic
    const zenithCard = document.querySelector('.widget-zenith')?.closest('.work-bento-card');
    if (zenithCard) {
      const canvas = zenithCard.querySelector('.chart-canvas-wrap');
      const hLine = zenithCard.querySelector('.chart-laser-line-h');
      const vLine = zenithCard.querySelector('.chart-laser-line-v');
      const tooltip = zenithCard.querySelector('.chart-tooltip');

      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        hLine.style.top = `${y}px`;
        vLine.style.left = `${x}px`;

        tooltip.style.display = 'block';
        tooltip.style.left = `${x + 10}px`;
        tooltip.style.top = `${y - 25}px`;

        const pct = (rect.height - y) / rect.height;
        const price = (62000 + pct * 74000).toFixed(2);
        tooltip.textContent = `BTC: $${Number(price).toLocaleString()}`;
      });

      canvas.addEventListener('mouseleave', () => {
        hLine.style.top = '-100px';
        vLine.style.left = '-100px';
        tooltip.style.display = 'none';
      });

      // Custom Slider Logic
      const track = zenithCard.querySelector('.custom-slider-track');
      const fill = zenithCard.querySelector('.custom-slider-fill');
      const thumb = zenithCard.querySelector('.custom-slider-thumb');
      const valText = zenithCard.querySelector('.ratio-val');
      let isDragging = false;

      function updateSlider(clientX) {
        const rect = track.getBoundingClientRect();
        let pct = (clientX - rect.left) / rect.width;
        pct = Math.max(0, Math.min(1, pct));
        fill.style.width = `${pct * 100}%`;
        thumb.style.left = `${pct * 100}%`;
        valText.textContent = `${Math.round(pct * 100)}%`;
      }

      thumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        document.body.style.userSelect = 'none';
      });

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          updateSlider(e.clientX);
        }
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          document.body.style.userSelect = '';
        }
      });

      track.addEventListener('click', (e) => {
        updateSlider(e.clientX);
      });
    }
  }
});
