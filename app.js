const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Deployed via Cloud Build 🚀\n");
}).listen(3000, '0.0.0.0');

console.log("Server running on port 3000");

