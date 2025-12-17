import fs from "node:fs";
import path from "node:path";

const filePath: string = path.join(__dirname, "data", "example.txt");
console.log(filePath);

fs.writeFileSync(filePath, "Hello, Node!");