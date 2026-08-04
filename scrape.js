const fs = require('fs');

const html = fs.readFileSync('projects.html', 'utf8');

const projects = {};

// Regex to find all proj-card blocks
const cardRegex = /<div class="proj-card"[^>]*data-category="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
let match;

while ((match = cardRegex.exec(html)) !== null) {
  const category = match[1];
  const cardContent = match[2];

  const linkMatch = cardContent.match(/href="([^"]+portfolio-item\/([^"\/]+)\/?[^"]*)"/);
  if (!linkMatch) continue;
  const originalUrl = linkMatch[1];
  const id = linkMatch[2];

  const imgMatch = cardContent.match(/<img class="proj-photo" src="([^"]+)"/);
  const image = imgMatch ? imgMatch[1] : '';

  const tagMatch = cardContent.match(/<span class="proj-tag">([^<]+)<\/span>/);
  const tag = tagMatch ? tagMatch[1] : '';

  const titleMatch = cardContent.match(/<div class="proj-title">([^<]+)<\/div>/);
  const title = titleMatch ? titleMatch[1] : '';

  const caps = [];
  const capRegex = /<span class="proj-cap">([^<]+)<\/span>/g;
  let capMatch;
  while ((capMatch = capRegex.exec(cardContent)) !== null) {
    caps.push(capMatch[1]);
  }

  projects[id] = {
    id,
    title,
    tag,
    image,
    caps,
    originalUrl,
    category
  };
}

fs.writeFileSync('projects-data.json', JSON.stringify(projects, null, 2));
console.log('Successfully generated projects-data.json with', Object.keys(projects).length, 'projects.');
