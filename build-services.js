const fs = require('fs');

const data = JSON.parse(fs.readFileSync('services-data.json', 'utf8'));
let template = fs.readFileSync('about.html', 'utf8');

// Isolate the top and bottom of the template outside of <main>
const mainStart = template.indexOf('<main id="main-content">');
const mainEnd = template.indexOf('</main>') + 7;
const headerContent = template.substring(0, mainStart + 24); // Includes <main id="main-content">
const footerContent = template.substring(mainEnd - 7); // Includes </main>

// Define custom Hero settings for each page
const heroSettings = {
  design: {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4', // Fallback
    bgGradient: 'linear-gradient(135deg, rgba(30,0,50,0.9) 0%, rgba(10,10,15,0.9) 100%)',
    icon: 'fa-compass-drafting',
    subtitle: 'Igniting creative energy to shape timeless brand stories.'
  },
  development: {
    video: '', // We'll use CSS grid
    bgGradient: 'radial-gradient(circle at top right, rgba(0, 50, 100, 0.8), rgba(10, 10, 15, 0.95))',
    icon: 'fa-code',
    subtitle: 'Building secure, scalable, and high-performance digital architectures.'
  },
  marketing: {
    video: '',
    bgGradient: 'linear-gradient(45deg, rgba(80, 0, 40, 0.85), rgba(15, 15, 20, 0.95))',
    icon: 'fa-chart-line',
    subtitle: 'Data-driven growth strategies that convert and scale.'
  },
  consultancy: {
    video: '',
    bgGradient: 'linear-gradient(to bottom, rgba(20, 40, 40, 0.9), rgba(10, 10, 12, 1))',
    icon: 'fa-user-tie',
    subtitle: 'Strategic architectural analysis and digital roadmapping.'
  }
};

for (const [slug, info] of Object.entries(data)) {
  const settings = heroSettings[slug];
  
  // Build Hero HTML
  const heroHtml = `
    <!-- Custom Hero Section -->
    <section class="about-hero" style="background: ${settings.bgGradient}; display:flex; align-items:center; justify-content:center; text-align:center; min-height:60vh; position:relative; overflow:hidden;">
      ${settings.video ? `<video class="hero-bg-video" src="${settings.video}" autoplay muted loop playsinline style="position:absolute; width:100%; height:100%; object-fit:cover; z-index:0; opacity:0.3;"></video>` : ''}
      <div class="hero-layout-grid" style="z-index:1; opacity:0.1;"></div>
      <div class="about-hero-content" style="z-index:2; max-width:800px; padding: 0 20px;">
        <i class="fa-solid ${settings.icon}" style="font-size:48px; color:var(--text-accent); margin-bottom:20px;"></i>
        <h1 style="font-size: clamp(48px, 6vw, 80px); margin-bottom:20px; color:#fff;">${info.heroTitle}</h1>
        <p style="font-size:20px; color:rgba(255,255,255,0.8);">${settings.subtitle}</p>
      </div>
    </section>
  `;

  // Build Intro HTML
  let introHtml = `
    <section style="padding: 100px 0;">
      <div class="grid-container" style="max-width:1000px; margin: 0 auto; text-align:center;">
  `;
  info.paragraphs.forEach(p => {
    introHtml += `<p style="font-size:22px; line-height:1.8; color:var(--text-body); margin-bottom:30px;">${p}</p>`;
  });
  introHtml += `</div></section>`;

  // Build Features HTML
  let featuresHtml = `
    <section style="padding: 60px 0 120px; background:var(--bg-card);">
      <div class="grid-container">
        <div style="text-align:center; margin-bottom: 60px;">
          <h2 style="font-size:36px; color:var(--text-heading);">Our Expertise in ${info.heroTitle}</h2>
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:30px;">
  `;
  
  // De-duplicate features by title
  const seenTitles = new Set();
  const uniqueFeatures = info.features.filter(f => {
    if (seenTitles.has(f.title)) return false;
    seenTitles.add(f.title);
    return true;
  });

  uniqueFeatures.forEach(f => {
    featuresHtml += `
          <div style="background:var(--bg-main); border:1px solid rgba(255,255,255,0.05); padding:40px; border-radius:12px; transition: transform 0.3s; cursor:pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--text-accent)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.05)'">
            <h3 style="font-size:22px; color:var(--text-heading); margin-bottom:15px; border-bottom: 2px solid var(--text-accent); display:inline-block; padding-bottom:5px;">${f.title}</h3>
            <p style="font-size:15px; line-height:1.7; color:var(--text-body);">${f.desc}</p>
          </div>
    `;
  });
  featuresHtml += `</div></div></section>`;

  // Build CTA HTML
  const ctaHtml = `
    <section class="about-cta-section" style="padding: 100px 0; text-align:center;">
      <div class="grid-container">
        <h2 style="font-size: 36px; margin-bottom: 20px;">Ready to Elevate Your ${info.heroTitle}?</h2>
        <p style="font-size:18px; color:var(--text-body); margin-bottom:40px;">Let's collaborate to build something extraordinary.</p>
        <a href="https://wa.me/919091091903" target="_blank" class="btn-magnetic" style="display:inline-block; padding:15px 40px; border:2px solid #fff; border-radius:50px; color:#fff; text-decoration:none; font-weight:600; font-size:16px;">
          <span>Get in Touch</span>
        </a>
      </div>
    </section>
  `;

  const newMain = heroHtml + introHtml + featuresHtml + ctaHtml;
  
  let newPage = headerContent + newMain + footerContent;
  
  // Replace Title
  newPage = newPage.replace(/<title>.*?<\/title>/, `<title>${info.heroTitle} Services — Mantrakaar</title>`);
  
  fs.writeFileSync(`${slug}.html`, newPage);
  console.log(`Created ${slug}.html`);
}
