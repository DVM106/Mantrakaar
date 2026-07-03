const fs = require('fs');

const pages = [
  { id: 'design', title: 'Design Solutions' },
  { id: 'development', title: 'Website Development' },
  { id: 'marketing', title: 'Marketing' },
  { id: 'consultancy', title: 'Consulting Strategy' }
];

let template = fs.readFileSync('about.html', 'utf8');

// Isolate the top and bottom of the template outside of <main>
const mainStart = template.indexOf('<main id="main-content">');
const mainEnd = template.indexOf('</main>') + 7;
const headerContent = template.substring(0, mainStart); 
const footerContent = template.substring(mainEnd);

// Custom Heroes

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
      window.addEventListener('resize', () => { c.width = window.innerWidth; c.height = window.innerHeight; });
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
            if(dist < 150) { ctxn.beginPath(); ctxn.moveTo(particles[i].x, particles[i].y); ctxn.lineTo(particles[j].x, particles[j].y); ctxn.strokeStyle = \`rgba(170,0,211,\${1 - dist/150})\`; ctxn.stroke(); }
          }
        }
        requestAnimationFrame(animateNodes);
      }
      animateNodes();
      window.addEventListener('resize', () => { cn.width = window.innerWidth; cn.height = window.innerHeight; });
    </script>
    `;
  }

  if (pageId === 'consultancy') {
    return `
    <style>
      .hero-consult { position: relative; height: 100vh; background: #0c0c0e; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: left; perspective: 1000px; }
      .cube-wrapper { position: absolute; right: 10%; top: 50%; transform: translateY(-50%); width: 300px; height: 300px; transform-style: preserve-3d; animation: rotateCube 20s infinite linear; }
      .cube-face { position: absolute; width: 300px; height: 300px; border: 2px solid #aa00d3; background: rgba(170,0,211,0.05); }
      .front  { transform: translateZ(150px); } .back   { transform: rotateY(180deg) translateZ(150px); }
      .right  { transform: rotateY(90deg) translateZ(150px); } .left   { transform: rotateY(-90deg) translateZ(150px); }
      .top    { transform: rotateX(90deg) translateZ(150px); } .bottom { transform: rotateX(-90deg) translateZ(150px); }
      @keyframes rotateCube { from { transform: translateY(-50%) rotateX(0deg) rotateY(0deg); } to { transform: translateY(-50%) rotateX(360deg) rotateY(360deg); } }
      
      .hero-consult-content { position: relative; z-index: 10; color: #fff; width: 100%; max-width: 1200px; padding: 0 40px; }
      .hero-consult h1 { font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; }
      .hero-consult p { font-size: 1.5rem; opacity: 0.8; max-width: 500px; }
      
      @media(max-width: 900px) { .cube-wrapper { right: 50%; transform: translate(50%, -50%) scale(0.6) !important; opacity: 0.3; } .hero-consult-content { text-align: center; } }
    </style>
    <section class="hero-consult">
      <div class="cube-wrapper">
        <div class="cube-face front"></div><div class="cube-face back"></div>
        <div class="cube-face right"></div><div class="cube-face left"></div>
        <div class="cube-face top"></div><div class="cube-face bottom"></div>
      </div>
      <div class="hero-consult-content">
        <h1>Consultancy</h1>
        <p>Strategic perspectives mapping your digital future.</p>
      </div>
      <div class="hero-scroll-down"><i class="fa-solid fa-arrow-down"></i></div>
    </section>
    `;
  }
};

pages.forEach(p => {
  const rawHtml = fs.readFileSync(`raw_${p.id}.html`, 'utf8');
  
  const mcStartIdx = rawHtml.indexOf('<div id="main-content"');
  const wpbStartIdx = rawHtml.indexOf('<section id="ut-section-', mcStartIdx);
  if (wpbStartIdx === -1) {
    console.log("Could not find start of WP Bakery content for", p.id);
    return;
  }
  
  const footerStartIdx = rawHtml.indexOf('<footer data-cursor-skin="global"');
  if (footerStartIdx === -1) {
    console.log("Could not find footer for", p.id);
    return;
  }
  
  let contentBlock = rawHtml.substring(wpbStartIdx, footerStartIdx);
  
  const newMain = `<main id="main-content">
    ${getHeroHtml(p.id)}
    <div class="main-content-background clearfix"><div class="grid-container"><div id="primary" class="grid-parent grid-100 global"><div class="entry-content clearfix"><div class="wpb-content-wrapper">
    ${contentBlock}
    </div></div></div></div></div>
  </main>`;
  
  let finalHtml = headerContent + newMain + footerContent;
  
  finalHtml = finalHtml.replace(/<title>.*?<\/title>/, `<title>${p.title} — Mantrakaar</title>`);
  
  fs.writeFileSync(`${p.id}.html`, finalHtml);
  console.log(`Successfully generated ${p.id}.html`);
});
