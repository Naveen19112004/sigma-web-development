/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let a=prompt("enter te first number")
let b=prompt("enter the operation that you want ot perform");
let c=prompt("enter the secomd number");
let r=Math.random();

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(r>0.1){
    alert(`the value is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    c=obj[c];
    alert(`the wrong value is ${eval(`${a} ${b} ${c}`)}`);
}
//i can also do with the if else to know about the eval keyword we used this 