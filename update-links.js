const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const replacements = [
  { search: /https:\/\/mantrakaar\.com\/design\//g, replace: 'design.html' },
  { search: /https:\/\/mantrakaar\.com\/development\//g, replace: 'development.html' },
  { search: /https:\/\/mantrakaar\.com\/marketing\//g, replace: 'marketing.html' },
  { search: /https:\/\/mantrakaar\.com\/consultancy\//g, replace: 'consultancy.html' },
  { search: /https:\/\/mantrakaar\.com\/contact\//g, replace: 'contact.html' },
  { search: /index\.html#contact-section/g, replace: 'contact.html' },
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  for (const {search, replace} of replacements) {
    content = content.replace(search, replace);
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
