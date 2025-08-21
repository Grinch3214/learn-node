// stream file
import http from 'http';
import fs from 'fs';

const PORT = 5000;

const server = http.createServer((req, res) => {
  const filePath = './files/index.html';
  // streams
  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
  }
  // no streams
  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading file on server');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
