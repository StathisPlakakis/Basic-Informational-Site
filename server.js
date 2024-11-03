const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 2000;
const server = http.createServer((req, res) => {
  if (req.url === '/index.html' || req.url === '/') {
    fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('There is a netwotk problem');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/about.html') {
    fs.readFile(path.join(__dirname, 'dist/about.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('There is a netwotk problem');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/contact-me.html') {
    fs.readFile(path.join(__dirname, 'dist/contact-me.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('There is a netwotk problem');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else {
    fs.readFile(path.join(__dirname, 'dist/404.html'), (err, data) => {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`The server is running at http://${hostname}:${port}`);
});
