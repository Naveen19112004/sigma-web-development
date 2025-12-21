//here understand that js is asynchrouns and also promises too
//so js shows behaviour that is not waiting to the promise to be resolved 
//but the promises will give us the clearer structure and chaining  also error handling methods clearly and feels easy to understand 
//helps to prevent from the promblem pyramid of doom casued by callbacks
//we have one more method to 
// function getData(){
//     return new Promise((resolve ,reject)=>{
//          setTimeout(()=>{
//             resolve(455)
//          },3000);
//     }).then((a)=>{
//         console.log(a);
//     })

// }
// console.log("lading modules");
// console.log("so smthg else");
// console.log("load data")
// let data=getData();
// console.log(data);
// console.log("process data");
// A function returning a promise gives back the
//  promise object immediately, before the async work 
// finishes — that’s why logging it shows Promise
//  { <pending> } unless we use await or .then().



//we have callback method to make it print just after accessing the data 
// function getData(){
//     return new Promise((resolve ,reject)=>{
//          setTimeout(()=>{
//             resolve(455)
//          },3000);
//     }).then((a)=>{
//         console.log(a);
//     })

// }
// console.log("lading modules");
// console.log("so smthg else");
// console.log("load data")
// let data=getData();
// data.then((v)=>{
// console.log(data);
// console.log("process data");
// console.log("task2");
// })






//but this is the chainging method by the promises
//we have async await to do this task
//async awit is used only for not doing that chaining
// function getData(){
//     return new Promise((resolve ,reject)=>{
//          setTimeout(()=>{
//             resolve(455)
//          },7000);
//     }).then((a)=>{
//         console.log(a);
//     })

// }
// async function main(){
// console.log("lading modules");
// console.log("so smthg else");
// console.log("load data");

// let data= await getData();
// console.log(data);
// console.log("process data");
// console.log("task2");
// }
// main()




//json placeholder website where we get apis with fake data

async function getData(){
    //fetch is going to return a promise
    //convert it into json
   let data=await fetch('https://jsonplaceholder.typicode.com/todos/1');
   let a=await data.json();//if json we get it as js object
   console.log(a);
   return 455;
}
// Fetch returns a promise that resolves to a Response object.
// The Response body is streamed, so we must call .json() which
// also returns a promise. Awaiting .json() gives the actual data.
async function main(){
console.log("lading modules");
console.log("so smthg else");
console.log("load data");

let data= await getData();
console.log(data);
console.log("process data");
console.log("task2");
}
main()
// spread breaks a collection into individual elements, Rest collects individual elements into a collection.