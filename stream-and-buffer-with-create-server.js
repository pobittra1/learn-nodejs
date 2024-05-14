//here i will explore about stream and buffer , and create server

//require http and fs
const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

//create server using raw node js
const server = http.createServer();

//create listener
server.on("request", (req, res) => {
  if (req.url === "/read-stream" && req.method === "GET");
  //create readStream file
  const readableStream = fs.createReadStream(
    process.cwd() + "/texts/streamRead.txt"
  );

  //listen readableStream with write
  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });
  //listen readableStream with read
  readableStream.on("end", () => {
    res.end("res ended");
  });
});

//listen server or call server
server.listen(5000, () => {
  console.log(`server listening on port 5000`);
});
