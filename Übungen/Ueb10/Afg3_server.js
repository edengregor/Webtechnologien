const http = require("http");
const router = require("./Afg3_router");

const server = http.createServer(router);

server.listen(3000);