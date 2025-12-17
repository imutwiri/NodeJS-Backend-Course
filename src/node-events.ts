import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.on("greet", (name: string) => {
    console.log(`Hello, ${name}`);
});

emitter.emit("greet", "Ian Kinoti");