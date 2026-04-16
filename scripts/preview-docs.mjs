import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const docs = path.resolve('docs');
const port = 8001;

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.json': 'application/json',
    '.txt': 'text/plain',
  };
  if (mimeTypes[ext]) {
    res.setHeader('Content-Type', mimeTypes[ext]);
  }
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  const prefix = '/ab';
  let rel = url.pathname;
  if (rel === '/ab') {
    rel = '/ab/';
  }

  if (!rel.startsWith(prefix + '/')) {
    res.statusCode = 302;
    res.setHeader('Location', '/ab/');
    res.end();
    return;
  }

  let requestPath = rel.slice(prefix.length);
  if (requestPath === '' || requestPath === '/') {
    requestPath = '/index.html';
  }

  const fullPath = path.join(docs, requestPath);
  if (!fullPath.startsWith(docs)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    sendFile(res, fullPath);
  });
});

server.listen(port, () => {
  console.log(`Serving docs at http://localhost:${port}/ab/`);
});
