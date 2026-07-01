const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function scrapeData() {
  const html = fs.readFileSync('projects.html', 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const projects = {};
  const cards = Array.from(document.querySelectorAll('.proj-card'));

  console.log(`Found ${cards.length} projects in projects.html`);

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const linkEl = card.querySelector('.proj-link');
    if (!linkEl) continue;
    
    const originalUrl = linkEl.getAttribute('href');
    const match = originalUrl.match(/portfolio-item\/([^\/]+)/);
    if (!match) continue;
    const id = match[1];

    console.log(`Scraping [${i + 1}/${cards.length}]: ${originalUrl}`);

    try {
      const res = await fetch(originalUrl);
      const pageHtml = await res.text();
      const pageDom = new JSDOM(pageHtml);
      const pageDoc = pageDom.window.document;

      // Extract images (gallery)
      const images = [];
      pageDoc.querySelectorAll('.ut-image-gallery-image img, .ut-gallery-slider-caption-wrap img').forEach(img => {
        const src = img.getAttribute('data-src') || img.getAttribute('src');
        if (src && !src.includes('svg+xml') && !images.includes(src)) {
          images.push(src);
        }
      });

      // Extract title
      const titleEl = pageDoc.querySelector('h2.section-title span');
      const title = titleEl ? titleEl.textContent.trim() : card.querySelector('.proj-title').textContent.trim();

      // Extract subtitle/description
      const descEl = pageDoc.querySelector('.lead p');
      const description = descEl ? descEl.innerHTML.replace(/<br\s*\/?>/gi, ' ').trim() : '';

      // Extract services and links from the fancy list or details
      const services = [];
      const links = {};
      
      const listItems = pageDoc.querySelectorAll('.bklyn-list li');
      listItems.forEach(li => {
        const text = li.textContent.trim();
        if (text.toLowerCase().includes('services provided:')) {
          const spans = li.querySelectorAll('span.grey_color');
          spans.forEach(s => services.push(s.textContent.replace(/^- /, '').trim()));
        } else if (text.toLowerCase().includes('website:')) {
          const a = li.querySelector('a');
          if (a) links.website = a.href;
        } else if (text.toLowerCase().includes('facebook:')) {
          const a = li.querySelector('a');
          if (a) links.facebook = a.href;
        } else if (text.toLowerCase().includes('instagram:')) {
          const a = li.querySelector('a');
          if (a) links.instagram = a.href;
        } else if (text.toLowerCase().includes('linkedin:')) {
          const a = li.querySelector('a');
          if (a) links.linkedin = a.href;
        }
      });

      // If we couldn't find services, fallback to caps in projects.html
      const fallbackCaps = Array.from(card.querySelectorAll('.proj-cap')).map(c => c.textContent);

      projects[id] = {
        id,
        title,
        description,
        images: images.length > 0 ? images : [card.querySelector('.proj-photo').src],
        services: services.length > 0 ? services : fallbackCaps,
        links,
        originalUrl
      };

    } catch (e) {
      console.error(`Failed to scrape ${originalUrl}`, e.message);
    }
  }

  fs.writeFileSync('projects-data.json', JSON.stringify(projects, null, 2));
  console.log(`Scraped ${Object.keys(projects).length} projects successfully!`);
}

scrapeData();
