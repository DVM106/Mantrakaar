const https = require('https');
const http = require('http');
const fs = require('fs');

// 10 high-quality Unsplash photos related to business consultancy/strategy
// Using Unsplash direct image URLs at 800px width
const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', desc: 'Team strategy whiteboard session' },
  { id: 2, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', desc: 'Corporate boardroom presentation' },
  { id: 3, url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', desc: 'Business planning with sticky notes' },
  { id: 4, url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', desc: 'Consultants collaborating at desk' },
  { id: 5, url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', desc: 'Team analyzing data together' },
  { id: 6, url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', desc: 'Business analytics on laptop' },
  { id: 7, url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', desc: 'Woman presenting strategy on screen' },
  { id: 8, url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', desc: 'Professional business discussion' },
  { id: 9, url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80', desc: 'Modern office strategy session' },
  { id: 10, url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80', desc: 'Conference room meeting' },
];

let done = 0;
photos.forEach(p => {
  const file = fs.createWriteStream(`assets/feature/consult_option_${p.id}.jpg`);
  https.get(p.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      // Follow redirect
      https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
        res2.pipe(file);
        file.on('finish', () => { done++; console.log(`Downloaded option ${p.id}: ${p.desc}`); if(done===10) console.log('All 10 downloaded!'); });
      });
    } else {
      res.pipe(file);
      file.on('finish', () => { done++; console.log(`Downloaded option ${p.id}: ${p.desc}`); if(done===10) console.log('All 10 downloaded!'); });
    }
  }).on('error', err => console.log(`Error ${p.id}: ${err.message}`));
});
