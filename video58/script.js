// number + undefined=NaN in js
function sum(a,b,c=2){
   console.log(a+b+c);
}
sum(2);//calling a fn
//NaN=not a number as the output as we have not mentioned the value
sum(7,8);
sum(2,3,5);
// or even we can return the values
function name(nam){
    return nam;
}
result=name("naveen");
console.log(result);
// 4 problems
// 1️⃣ Write a program to print the marks of a student stored in an object using a for loop.
const obj={
    harry:98,
    rohan:70,
    akash:7
}
let  keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
    console.log(obj[keys[i]]);
}
// 2)write the program using for in loop
for(const i in obj){
    console.log(obj[i]);
}
// 3)Write a program to keep printing "Try again" until the user enters the correct number.
let correctnum=5;
while(user!=correctnum){
    user=prompt("guess the nummber:");
    console.log("try again");
}
console.log("correct!");
// 4)Write a function to find the mean of 5 numbers.
function mean(num1,num2,num3,num4,num5){
    result=(num1+num2+num3+num4+num5)/5;
    return result;
}
mean(5,10,15,20,25);