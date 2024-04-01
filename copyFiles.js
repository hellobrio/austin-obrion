const fs = require('fs');
const path = require('path');

// Copy robots.txt
fs.copyFileSync(path.resolve(__dirname, 'robots.txt'), path.resolve(__dirname, '.vuepress/dist/robots.txt'));

// Copy sitemap.xml
fs.copyFileSync(path.resolve(__dirname, 'sitemap.xml'), path.resolve(__dirname, '.vuepress/dist/sitemap.xml'));
