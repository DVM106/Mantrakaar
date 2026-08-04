const fs = require('fs');
const { JSDOM } = require('jsdom');
const clientHtml = fs.readFileSync('.system_generated/steps/1262/content.md', 'utf8');
const testHtml = fs.readFileSync('.system_generated/steps/1263/content.md', 'utf8');
const clientDom = new JSDOM(clientHtml);
const testDom = new JSDOM(testHtml);
fs.writeFileSync('raw_clients.html', clientDom.window.document.documentElement.outerHTML);
fs.writeFileSync('raw_testimonials.html', testDom.window.document.documentElement.outerHTML);
