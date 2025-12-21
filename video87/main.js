const fs=require("fs");
//console.log(fs);
console.log("starting");
//fs.writeFileSync("harry.txt","harry is a good boy");
//js executes it synchronously in the main thread

//js gives to web apis and runs at the background
fs.writeFile("harry2.txt","harry is a good boy2",()=>{
    console.log("home");
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())
    })//writing reading again and so on callback hell
})

//this runs every tym you run the file asynchronously
fs.appendFile("harry.txt","robo",(e,d)=>{
    console.log(d)
})
console.log("ending");