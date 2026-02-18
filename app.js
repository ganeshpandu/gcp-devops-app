const http = require('http');
const port = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.end("Cloud Run Production in us-central1 🚀");
}).listen(port);
