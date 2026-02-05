const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

http.createServer((req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Error reading file');
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});