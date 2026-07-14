import http, { IncomingMessage, ServerResponse } from "node:http";

const server = http.createServer((req : IncomingMessage, res : ServerResponse) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        secondName: "Wayne",
      }),
    );
  } else {
    res.writeHead(404, {
      "content-type": "application/json",
    });
    res.end("Page not found");
  }
});
server.listen(3000, () => {
  console.log("Sever running on port 3000");
});
