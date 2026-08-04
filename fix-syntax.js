const fs = require('fs');
let c = fs.readFileSync('native-build.js', 'utf8');
c = c.replace(/\\\\`/g, '`').replace(/\\\\\$/g, '$');
c = c.replace(/\\`/g, '`').replace(/\\\$/g, '$'); // Just in case it was a single backslash
fs.writeFileSync('native-build.js', c);
