//advanced js concepts
//iife->immediately invoked fn expression
//when you want to execute fn immediately

//()->first parenthesis to execte the fn 
//()->second parenthesis to invoke the fn

async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },1000)
    })
}

(async function fn(){
    let a=await sleep();
    let b=await sleep();
    console.log(a);
    console.log(b);
})();
//destructuring
//1)arrays
const arr=[1,2,3,4,5];
let [x,y,...z]=arr;
console.log(x);
console.log(y);
console.log(z);
//...rest operator if we do not use that remaiming elements will be skiipped
//2)objects
const obj={
    p:1,
    q:2,
    r:3,
    s:4
}
const {p,q}=obj;
console.log(p);
console.log(q);


//3)spread operator
function sum(s1,s2,s3){
    return s1+s2+s3;
}
let a1=[1,2,3];
console.log(a1[0]+a1[1]+a1[2]);
console.log(sum(...a1));//it opens the value





//hoisting 
//hoisting refers to the process whre the interpreter peers to move the declaration to the top of the code.
function hoisting(){
    console.log(a1);
    var a1=8;
}