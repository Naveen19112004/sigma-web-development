import fs from "fs/promises";
let a=await fs.readFile("harry.txt")
//await can be written directly as we are using modules
let b=await fs.writeFile("harry.txt","\n\n\nthis is amazing promise")
console.log(a.toString(),b);
