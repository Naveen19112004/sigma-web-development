// import { a } from "./mymodule.js";
// console.log(a);


// import obj from "./mymodule.js"
// console.log(obj);

const a=require("./mymodule2.js");
console.log(a,__dirname,__filename);//we get the directory full name


//interview question
//actually what happens is node js actuallys wraps in this fn
// (function(exports,require,module,__filename,__dirname){
//     //module code actually lives here
// })