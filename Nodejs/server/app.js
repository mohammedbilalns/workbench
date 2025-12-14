import http from "http";

http
  .createServer((req, res) => {
    res.end("Hello world");
  })
  .listen(3000, () => {
    console.log("Server running on port 3000 ");
  });
