import http, { IncomingMessage, ServerResponse } from "node:http";

function requestHandler(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end("Hello from node server!");
}

const server = http.createServer(requestHandler);

const PORT = 5000;

const listenFunc = () => {
    console.log(`Server is running on port ${PORT}`);
}

server.listen(PORT, listenFunc);