import http, { IncomingMessage, ServerResponse } from "node:http";

class Server {
    private port: number;
    private server: http.Server;

    constructor(port: number = 5000) {
        this.port = port;
        this.server = http.createServer(this.requestHandler.bind(this));
    }

    private requestHandler(req: IncomingMessage, res: ServerResponse): void {
        res.setHeader("content-type", "application/json");

        if (req.url === "/" && req.method === "GET") {
            res.statusCode = 200;
            res.end(
                JSON.stringify({
                    message: "Welcome to Free NodeJS Backend Dev Course",
                })
            );
        }else if (req.url === "/about" && req.method === "GET") {
            res.statusCode = 200;
            res.end(
                JSON.stringify({
                    message: "About this server: built with NodeJS Typecsript",
                })
            );
        }else {
            res.statusCode = 404;
            res.end(
                JSON.stringify({
                    error: "Route not found",
                })
            )
        }
    }

    public start(): void {
        this.server.listen(this.port, () => {
            console.log(`Server (class) is running on port ${this.port}`);
        });
    }
}

const myServer = new Server(5000);
myServer.start();