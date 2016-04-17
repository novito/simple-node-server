var http = require("http");

function startServer() {
  function onRequest(request, response) {
    console.log("Request received");
    response.writeHead(200, { "Content/Type": "text/plain" });
    response.write("Hello from my simple server");
    response.end();
    console.log("Returned response");
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server just started")
}

exports.startServer = startServer;
