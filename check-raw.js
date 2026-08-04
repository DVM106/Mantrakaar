const fs = require('fs');
const html = fs.readFileSync('raw_design.html', 'utf8');

// Find the end of the header/hero
// Usually there's a <section id="ut-hero"... or a <div id="main-content"
const mainStart = html.indexOf('<div id="main-content"');
console.log('main-content index:', mainStart);
if(mainStart !== -1) {
    const mainSection = html.slice(mainStart, mainStart + 2000);
    console.log(mainSection);
}
