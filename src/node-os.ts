import os from "os";

console.log("OS Type", os.type());
console.log("OS Platform", os.platform());
console.log("OS Architecture", os.arch());
console.log("OS CPU Count", os.cpus().length);
