const http=require('node:http');

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
//packages are the black box we dont understand what is there inside it