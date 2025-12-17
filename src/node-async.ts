setTimeout(() => console.log("Macrotask - setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask - Promise"));

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(8, 9));
console.log("Synchronous");
