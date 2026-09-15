const fs = require('fs');
let b = fs.readFileSync('public/index-body.html', 'utf8');
b = b.replace(/src="\//g, 'src="/');
b = b.replace(/href="\//g, 'href="/');
fs.writeFileSync('public/index-body.html', b);
let h = fs.readFileSync('public/index-head.html', 'utf8');
h = h.replace(/href="\//g, 'href="/');
fs.writeFileSync('public/index-head.html', h);