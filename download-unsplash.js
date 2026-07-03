const https = require('https');
const fs = require('fs');

https.get('https://unsplash.com/s/photos/web-development', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
        const matches = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"&\s]+/g);
        if(matches) {
            const unique = [...new Set(matches.map(m => m.split('?')[0] + '?auto=format&fit=crop&w=800&q=80'))].slice(0, 4);
            unique.forEach((url, i) => {
                https.get(url, (imgRes) => {
                    const file = fs.createWriteStream(`unsplash_opt${i+1}.jpg`);
                    imgRes.pipe(file);
                });
            });
            console.log('Downloading 4 options...');
        } else {
            console.log('No matches');
        }
    });
}).on('error', e => console.error(e));
