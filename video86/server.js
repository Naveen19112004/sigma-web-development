//we will get the modules through ecmascript and also by common js
//npm init -y to skip giving name and all

// const http=require('node:http');
// const fs=require("fs");
//- require() -> Synchronous module loading that blocks execution until the entire module is loaded, with no tree shaking or lazy loading support.
//- import -> Modern module system that supports asynchronous loading, tree shaking, and selective importing of only the required parts of a module.
import http from "http"; 
const hostname='127.0.0.1';
const port=3000;
const server=http.xreateServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('hello World\n');
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);

});