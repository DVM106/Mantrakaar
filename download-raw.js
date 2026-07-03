const https = require('https');
const fs = require('fs');

const pages = ['design', 'development', 'marketing', 'consultancy'];

pages.forEach(p => {
  https.get(`https://mantrakaar.com/${p}/`, res => {
    let d = '';
    res.on('data', chunk => d += chunk);
    res.on('end', () => {
      fs.writeFileSync(`raw_${p}.html`, d);
      console.log(`Saved raw_${p}.html`);
    });
  });
});
