var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World');
});
try {
  throw new Error("Testing an error message and stack...");
} catch (error) {
  console.error(error);
}
server.listen(8080);
