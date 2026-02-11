const http = require("http");
const fs = require("fs");

const server = http.createServer(() => {
    fs.readFile("./welcome.html", () => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    })
});

server.listen(8080);