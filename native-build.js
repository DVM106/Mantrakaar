const fs = require('fs');
const { JSDOM } = require('jsdom');

const pages = [
  { id: 'design', title: 'Design Solutions' },
  { id: 'development', title: 'Website Development' },
  { id: 'marketing', title: 'Marketing' },
  { id: 'consultancy', title: 'Consulting Strategy' }
];

let template = fs.readFileSync('about.html', 'utf8');
const mainStart = template.indexOf('<main id="main-content">');
const mainEnd = template.indexOf('</main>') + 7;
const headerContent = template.substring(0, mainStart); 
const footerContent = template.substring(mainEnd);

const getHeroHtml = (pageId) => {
  if (pageId === 'design') {
    return `
    <style>
      .hero-design { position: relative; height: 100vh; background: #0a0a0a; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; }
      .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.6; animation: float 15s infinite ease-in-out alternate; }
      .blob1 { background: #aa00d3; width: 40vw; height: 40vw; top: -10%; left: -10%; }
      .blob2 { background: #0044ff; width: 35vw; height: 35vw; bottom: -10%; right: -10%; animation-delay: -5s; }
      .blob3 { background: #ff0055; width: 30vw; height: 30vw; bottom: 20%; left: 30%; animation-delay: -10s; }
      @keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(100px, 100px) scale(1.2); } }
      .hero-design-content { position: relative; z-index: 10; color: #fff; }
      .hero-design h1 { font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; text-transform: uppercase; line-height: 1; }
      .hero-design p { font-size: 1.5rem; opacity: 0.8; max-width: 600px; margin: 0 auto; }
    </style>
    <section class="hero-design">
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>
      <div class="hero-design-content">
        <h1>Design</h1>
        <p>Shaping digital experiences that captivate and convert.</p>
      </div>
      <div class="hero-scroll-down"><i class="fa-solid fa-arrow-down"></i></div>
    </section>
    `;
  }
  if (pageId === 'development') {
    return `
    <style>
      .hero-dev { position: relative; height: 100vh; background: #050505; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; }
      #matrix-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.3; }
      .hero-dev-content { position: relative; z-index: 10; color: #fff; background: rgba(0,0,0,0.5); padding: 40px; border: 1px solid rgba(170,0,211,0.3); border-radius: 8px; backdrop-filter: blur(10px); }
      .hero-dev h1 { font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; font-family: monospace; }
      .hero-dev h1::after { content: '_'; animation: blink 1s step-start infinite; color: #aa00d3; }
      .hero-dev p { font-size: 1.5rem; opacity: 0.8; font-family: monospace; max-width: 600px; margin: 0 auto; }
      @keyframes blink { 50% { opacity: 0; } }
    </style>
    <section class="hero-dev">
      <canvas id="matrix-canvas"></canvas>
      <div class="hero-dev-content">
        <h1>Development</h1>
        <p>Architecting robust, scalable, and high-performance solutions.</p>
      </div>
      <div class="hero-scroll-down"><i class="fa-solid fa-arrow-down"></i></div>
    </section>
    <script>
      const c = document.getElementById("matrix-canvas");
      if(c) {
        const ctx = c.getContext("2d");
        c.width = window.innerWidth; c.height = window.innerHeight;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]();:".split("");
        const font_size = 14; const columns = c.width/font_size;
        const drops = []; for(let x = 0; x < columns; x++) drops[x] = 1;
        function draw() {
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctx.fillRect(0, 0, c.width, c.height);
          ctx.fillStyle = "#aa00d3"; ctx.font = font_size + "px monospace";
          for(let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random()*chars.length)];
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            if(drops[i]*font_size > c.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
          }
        }
        setInterval(draw, 33);
      }
    </script>
    `;
  }
  if (pageId === 'marketing') {
    return `
    <style>
      .hero-marketing { position: relative; height: 100vh; background: #111; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; }
      #nodes-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
      .hero-mkt-content { position: relative; z-index: 10; color: #fff; pointer-events: none; }
      .hero-mkt h1 { font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; }
      .hero-mkt p { font-size: 1.5rem; opacity: 0.8; max-width: 600px; margin: 0 auto; }
    </style>
    <section class="hero-marketing hero-mkt">
      <canvas id="nodes-canvas"></canvas>
      <div class="hero-mkt-content">
        <h1>Marketing</h1>
        <p>Connecting brands with audiences through data-driven growth.</p>
      </div>
      <div class="hero-scroll-down"><i class="fa-solid fa-arrow-down"></i></div>
    </section>
    <script>
      const cn = document.getElementById("nodes-canvas");
      if(cn) {
        const ctxn = cn.getContext("2d");
        cn.width = window.innerWidth; cn.height = window.innerHeight;
        let particles = [];
        class Particle {
          constructor() { this.x = Math.random()*cn.width; this.y = Math.random()*cn.height; this.vx = (Math.random()-0.5); this.vy = (Math.random()-0.5); this.radius = Math.random() * 2 + 1; }
          update() { 
            this.x += this.vx; this.y += this.vy; 
            if(this.x<0 || this.x>cn.width) this.vx = -this.vx; 
            if(this.y<0 || this.y>cn.height) this.vy = -this.vy; 
          }
          draw() { ctxn.beginPath(); ctxn.arc(this.x, this.y, this.radius, 0, Math.PI*2); ctxn.fillStyle = "#aa00d3"; ctxn.fill(); }
        }
        for(let i=0; i<100; i++) particles.push(new Particle());
        function animateNodes() {
          ctxn.clearRect(0, 0, cn.width, cn.height);
          for(let i=0; i<particles.length; i++) {
            particles[i].update(); particles[i].draw();
            for(let j=i; j<particles.length; j++) {
              const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              if(dist < 150) { 
                ctxn.beginPath(); 
                ctxn.moveTo(particles[i].x, particles[i].y); 
                ctxn.lineTo(particles[j].x, particles[j].y); 
                const alpha = 1 - dist/150;
                ctxn.strokeStyle = "rgba(170,0,211," + alpha + ")"; 
                ctxn.stroke(); 
              }
            }
          }
          requestAnimationFrame(animateNodes);
        }
        animateNodes();
      }
    </script>
    `;
  }
  if (pageId === 'consultancy') {
    return `
    <style>
      .hero-consult { position: relative; height: 100vh; background: #0a0a0a; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; }
      #orbits-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
      .hero-consult-content { position: relative; z-index: 10; color: #fff; pointer-events: none; }
      .hero-consult h1 { font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; text-transform: uppercase; line-height: 1; }
      .hero-consult p { font-size: 1.5rem; opacity: 0.8; max-width: 600px; margin: 0 auto; }
    </style>
    <section class="hero-consult">
      <canvas id="orbits-canvas"></canvas>
      <div class="hero-consult-content">
        <h1>Consultancy</h1>
        <p>Strategic perspectives mapping your digital future.</p>
      </div>
      <div class="hero-scroll-down"><i class="fa-solid fa-arrow-down"></i></div>
    </section>
    <script>
      const cOrb = document.getElementById("orbits-canvas");
      if(cOrb) {
        const ctxOrb = cOrb.getContext("2d");
        cOrb.width = window.innerWidth; cOrb.height = window.innerHeight;
        window.addEventListener('resize', () => { cOrb.width = window.innerWidth; cOrb.height = window.innerHeight; });

        let orbs = [];
        for (let i = 0; i < 500; i++) {
          let angle = Math.random() * Math.PI * 2;
          let radiusX = Math.random() * 450 + 50;
          let radiusY = radiusX * (0.3 + Math.random() * 0.5);
          let speed = (0.002 + Math.random() * 0.005) * (Math.random() > 0.5 ? 1 : -1);
          let tilt = (Math.random() - 0.5) * 1.2;
          orbs.push({ angle, radiusX, radiusY, speed, tilt, size: Math.random() * 2 + 0.5 });
        }

        function drawOrbits() {
          ctxOrb.fillStyle = 'rgba(10, 10, 10, 0.06)';
          ctxOrb.fillRect(0, 0, cOrb.width, cOrb.height);
          const cx = cOrb.width / 2;
          const cy = cOrb.height / 2;

          let glow = ctxOrb.createRadialGradient(cx, cy, 0, cx, cy, 100);
          glow.addColorStop(0, 'rgba(170, 0, 211, 0.08)');
          glow.addColorStop(1, 'rgba(170, 0, 211, 0)');
          ctxOrb.beginPath();
          ctxOrb.arc(cx, cy, 100, 0, Math.PI * 2);
          ctxOrb.fillStyle = glow;
          ctxOrb.fill();

          orbs.forEach(o => {
            o.angle += o.speed;
            let x = cx + Math.cos(o.angle) * o.radiusX;
            let y = cy + Math.sin(o.angle) * o.radiusY + Math.cos(o.angle) * o.tilt * 80;
            let dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
            let alpha = Math.max(0.1, 1 - dist / 500);
            ctxOrb.beginPath();
            ctxOrb.arc(x, y, o.size, 0, Math.PI * 2);
            ctxOrb.fillStyle = 'rgba(170, 0, 211, ' + alpha + ')';
            ctxOrb.fill();
          });
          requestAnimationFrame(drawOrbits);
        }
        drawOrbits();
      }
    </script>
    `;
  }
};

pages.forEach(p => {
  const rawHtml = fs.readFileSync('raw_' + p.id + '.html', 'utf8');
  const dom = new JSDOM(rawHtml);
  const document = dom.window.document;
  
  let nativeBody = '';
  
  const mainTitle = document.querySelector('h2.section-title');
  if (mainTitle) {
      nativeBody += '<div class="grid-container" style="padding: 80px 15px 40px;"><h2 style="font-size: clamp(40px, 5vw, 66px); margin-bottom: 30px; text-align: center; color: var(--text-heading);">What We Do</h2></div>';
  }

  const pTags = Array.from(document.querySelectorAll('.wpb_wrapper p')).map(p => p.textContent).filter(text => text.trim().length > 20);
  
  nativeBody += '<div class="grid-container" style="padding: 0 15px 80px;"><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: center;">';
  
  nativeBody += '<div style="font-size: 18px; color: var(--text-body); line-height: 1.8;">';
  const firstFew = pTags.slice(0, 3);
  firstFew.forEach(text => {
      nativeBody += '<p style="margin-bottom: 20px;">' + text + '</p>';
  });
  nativeBody += '</div>';
  
  let src = "assets/feature/feature_" + p.id + ".png?v=" + Date.now();
  nativeBody += `<div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 20px 40px rgba(0,0,0,0.4);"><img src="${src}" alt="Feature" style="width:100%; display:block; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"></div>`;
  
  nativeBody += '</div></div>';

  const serviceContainers = document.querySelectorAll('.ut-horizontal-style');
  if (serviceContainers.length > 0) {
      nativeBody += '<div style="background: var(--bg-card); padding: 80px 0;"><div class="grid-container" style="padding: 0 15px;"><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">';
      
      const seenTitles = new Set();
      let count = 0;
      
      Array.from(serviceContainers).forEach((container) => {
          const col = container.querySelector('.ut-service-column');
          if(!col) return;
          
          const title = col.querySelector('h3') ? col.querySelector('h3').textContent.trim() : '';
          const desc = col.querySelector('p') ? col.querySelector('p').textContent.trim() : '';
          
          let svgHtml = '';
          const svgEl = container.querySelector('svg');
          if(svgEl) {
              svgEl.style.width = '60px';
              svgEl.style.height = '60px';
              svgEl.style.marginBottom = '20px';
              svgEl.style.strokeDasharray = '1000';
              svgEl.style.strokeDashoffset = '1000';
              svgEl.style.animation = 'drawSvg 2.5s ease-out forwards';
              svgEl.querySelectorAll('*').forEach(el => {
                  el.style.stroke = '#aa00d3';
                  el.style.strokeWidth = '2';
                  el.style.fill = 'transparent';
              });
              svgHtml = svgEl.outerHTML;
          }
          
          if(title && desc && !seenTitles.has(title) && count < 4 && !title.toLowerCase().includes("customer")) {
              seenTitles.add(title);
              count++;
              nativeBody += `<div style="background: var(--bg-main); padding: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--text-accent)'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)'; this.style.transform='translateY(0)'">
                ${svgHtml}
                <style>@keyframes drawSvg { to { stroke-dashoffset: 0; } }</style>
                <h3 style="font-size: 20px; color: var(--text-heading); margin-bottom: 15px;">${title}</h3>
                <p style="font-size: 15px; color: var(--text-body); line-height: 1.7;">${desc}</p>
              </div>`;
          }
      });
      nativeBody += '</div></div></div>';
  }

  const carouselItems = document.querySelectorAll('.ut-portfolio-carousel .ut-carousel-item a');
  if (carouselItems.length > 0) {
      nativeBody += `<div class="grid-container" style="padding: 80px 15px; position: relative;">
        <h2 style="font-size: 36px; text-align: center; margin-bottom: 40px; color: var(--text-heading);">Our Work</h2>
        <div class="swiper mySwiper-${p.id}" style="overflow: hidden; padding-bottom: 40px;">
          <div class="swiper-wrapper">`;
      
      Array.from(carouselItems).forEach(item => {
          const link = item.href;
          const img = item.querySelector('img');
          const title = item.querySelector('.portfolio-title') ? item.querySelector('.portfolio-title').textContent : '';
          
          if (img && link) {
              let src = img.getAttribute('data-src') || img.src;
              if (src.startsWith('data:')) src = img.getAttribute('data-src');
              
              if(src) {
                  nativeBody += `<div class="swiper-slide"><a href="${link}" style="display: block; position: relative; overflow: hidden; border-radius: 8px; group"><img src="${src}" alt="${title}" style="width: 100%; height: 250px; object-fit: cover; display: block; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"><div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 20px; pointer-events: none;"><h4 style="color: #fff; margin: 0; font-size: 18px;">${title}</h4></div></a></div>`;
              }
          }
      });
      
      nativeBody += `</div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev" style="color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.8);"></div>
          <div class="swiper-button-next" style="color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.8);"></div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          if (typeof Swiper !== 'undefined') {
            new Swiper('.mySwiper-${p.id}', {
              slidesPerView: 1,
              spaceBetween: 20,
              loop: true,
              autoplay: { delay: 2500, disableOnInteraction: false },
              pagination: { el: ".mySwiper-${p.id} .swiper-pagination", clickable: true },
              navigation: {
                nextEl: ".mySwiper-${p.id} .swiper-button-next",
                prevEl: ".mySwiper-${p.id} .swiper-button-prev",
              },
              breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 20 },
                900: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 4, spaceBetween: 30 }
              }
            });
          }
        });
      </script>`;
  }
  
  // Interactive Tabs (Accordion Replacement for Marketing Page)
  const accordionItems = document.querySelectorAll('.ut-accordion-module-item');
  if (accordionItems.length > 0) {
      nativeBody += `<div class="grid-container" style="padding: 100px 15px; max-width: 1200px;">`;
      nativeBody += `<h2 style="font-size: clamp(36px, 5vw, 48px); margin-bottom: 60px; text-align: center; color: var(--text-heading);">Our Approaches</h2>`;
      
      nativeBody += `<div class="premium-tabs-wrapper" style="display: flex; gap: 60px; flex-wrap: wrap;">`;
      
      // Left Side: Titles
      nativeBody += `<div class="tabs-list" style="flex: 1; min-width: 300px; display: flex; flex-direction: column; gap: 15px;">`;
      
      let rightSideContent = `<div class="tabs-content" style="flex: 1.5; min-width: 300px; position: relative; background: rgba(255,255,255,0.02); border-radius: 20px; padding: 50px; border: 1px solid rgba(255,255,255,0.05); min-height: 400px; box-shadow: 0 30px 60px rgba(0,0,0,0.5);">`;
      
      Array.from(accordionItems).forEach((item, idx) => {
          const title = item.querySelector('.ut-accordion-module-heading') ? item.querySelector('.ut-accordion-module-heading').textContent.trim() : '';
          let descHtml = item.querySelector('.ut-accordion-module-inner') ? item.querySelector('.ut-accordion-module-inner').innerHTML : '';
          
          if(title && descHtml) {
              const activeClass = idx === 0 ? 'active' : '';
              const opacity = idx === 0 ? '1' : '0';
              const transform = idx === 0 ? 'translateY(0)' : 'translateY(20px)';
              const pointerEvents = idx === 0 ? 'auto' : 'none';
              
              if (p.id === 'marketing') {
                  if (idx === 0) {
                      nativeBody += `<h4 style="color: var(--text-heading); font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 10px 0 5px; opacity: 0.6;">Digital Marketing</h4>`;
                      nativeBody += `<p style="color: var(--text-body); font-size: 14px; line-height: 1.6; margin-bottom: 20px; opacity: 0.8;">Our performance marketing services specialise in lead generation, search engine marketing, email marketing, and social media marketing. We offer cost-effective marketing programs that generate high-quality engagement, leads and sales. We have a track record of improving conversion rates.</p>`;
                  } else if (idx === 3) {
                      nativeBody += `<h4 style="color: var(--text-heading); font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 30px 0 5px; opacity: 0.6;">Traditional Marketing</h4>`;
                      nativeBody += `<p style="color: var(--text-body); font-size: 14px; line-height: 1.6; margin-bottom: 20px; opacity: 0.8;">Maximize your brand’s reach with our traditional marketing expertise. We craft impactful campaigns through brochures, billboards, print ads, and direct mail, ensuring your message resonates with a broad audience. Our strategies are designed to captivate and engage, creating lasting impressions and driving results. Partner with us for marketing that stands the test of time.</p>`;
                  }
              }
              
              // Left side button
              nativeBody += `
              <button class="premium-tab-btn ${activeClass}" data-target="tab-${p.id}-${idx}" style="text-align: left; background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 25px 0; font-size: clamp(20px, 2vw, 26px); font-weight: 600; color: ${idx===0 ? '#aa00d3' : 'rgba(255,255,255,0.5)'}; cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); display: flex; justify-content: space-between; align-items: center; width: 100%;" onmouseover="if(!this.classList.contains('active')) this.style.color='rgba(255,255,255,0.8)'" onmouseout="if(!this.classList.contains('active')) this.style.color='rgba(255,255,255,0.5)'">
                <span><span style="font-size: 14px; opacity: 0.5; margin-right: 20px; font-weight: 400;">0${idx+1}</span> ${title}</span>
                <i class="fa-solid fa-arrow-right tab-arrow" style="opacity: ${idx===0 ? '1' : '0'}; transform: ${idx===0 ? 'translateX(0)' : 'translateX(-15px)'}; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);"></i>
              </button>`;
              
              // Right side content
              rightSideContent += `
              <div class="premium-tab-pane" id="tab-${p.id}-${idx}" style="position: absolute; top: 50px; left: 50px; right: 50px; opacity: ${opacity}; transform: ${transform}; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); pointer-events: ${pointerEvents};">
                <h3 style="font-size: clamp(28px, 3vw, 36px); color: var(--text-heading); margin-bottom: 25px; line-height: 1.2;">${title}</h3>
                <div style="font-size: 18px; color: var(--text-body); line-height: 1.9;">${descHtml}</div>
              </div>`;
          }
      });
      
      rightSideContent += `</div>`;
      nativeBody += `</div>${rightSideContent}</div>`;
      
      // Script for interaction
      nativeBody += `
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const btns = document.querySelectorAll('.premium-tab-btn');
          
          btns.forEach(btn => {
            btn.addEventListener('click', function() {
              // Only affect tabs within the same container
              const wrapper = this.closest('.premium-tabs-wrapper');
              const localBtns = wrapper.querySelectorAll('.premium-tab-btn');
              const localPanes = wrapper.querySelectorAll('.premium-tab-pane');
              
              localBtns.forEach(b => {
                b.classList.remove('active');
                b.style.color = 'rgba(255,255,255,0.5)';
                b.querySelector('.tab-arrow').style.opacity = '0';
                b.querySelector('.tab-arrow').style.transform = 'translateX(-15px)';
              });
              localPanes.forEach(p => {
                p.style.opacity = '0';
                p.style.transform = 'translateY(20px)';
                p.style.pointerEvents = 'none';
              });
              
              // Activate clicked
              this.classList.add('active');
              this.style.color = '#aa00d3';
              this.querySelector('.tab-arrow').style.opacity = '1';
              this.querySelector('.tab-arrow').style.transform = 'translateX(0)';
              
              const target = document.getElementById(this.getAttribute('data-target'));
              if(target) {
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
                target.style.pointerEvents = 'auto';
              }
            });
          });
        });
      </script>`;
      nativeBody += `</div>`;
  }
  
  // Append the Call to Action section at the bottom
  nativeBody += `
  <section style="background: #1c1c1c; padding: 100px 20px; text-align: center; color: #ffffff;">
    <div class="grid-container" style="max-width: 800px; margin: 0 auto;">
      <h2 style="font-size: clamp(50px, 8vw, 80px); font-weight: 900; color: #ffffff; margin-bottom: 20px; letter-spacing: -2px;">Get Started</h2>
      <div style="width: 120px; height: 3px; background: rgba(255,255,255,0.2); margin: 0 auto 40px;"></div>
      <p style="font-size: 22px; color: rgba(255,255,255,0.8); margin: 0 auto 10px;">Dive Into the Extraordinary</p>
      <p style="font-size: 22px; color: rgba(255,255,255,0.8); margin: 0 auto 50px;">Contact Us to Begin Your Journey.</p>
      <a href="/contact.html" style="display: inline-block; background: #360655; color: #fff; padding: 18px 45px; border-radius: 40px; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(170,0,211,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">GET IN TOUCH</a>
    </div>
  </section>`;
  
  const newMain = '<main id="main-content">\n' + getHeroHtml(p.id) + '\n' + nativeBody + '\n</main>';
  
  let finalHtml = headerContent + newMain + footerContent;
  finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '<title>' + p.title + ' — Mantrakaar</title>');
  
  fs.writeFileSync(p.id + '.html', finalHtml);
  console.log('Successfully rebuilt ' + p.id + '.html natively');
});
