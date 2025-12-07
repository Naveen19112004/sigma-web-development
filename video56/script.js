// == → checks value example: "3" == 3 → true
// === → checks value + type Example: "3" === 3 → false
// &&, ||, ! → logical conditions
// *+, -, , /, %, ** → arithmetic operators
// Ternary → short conditional assignment let c = (a > b) ? a : b;

// 5 problems
// 1️⃣ Use logical operators to find whether the age of a person lies between 10 and 20.
let age=12;
if(age>10 &&age<20){
    console.log("eligible");
}
else{
    console.log("not");
}
// 2️⃣ Demonstrate the use of switch–case statements in JavaScript.
let num=2;
switch(num){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    default:
        console.log("not valid");
        break;
}
// 3️⃣ Write a JavaScript program to find whether a number is divisible by both 2 and 3.
let n=18;
if(n%2==0 && n%3==0){
    console.log("dividible");
}
else{
    console.log("not divisible");
}
// 4️⃣ Write a JavaScript program to find whether a number is divisible by either 2 or 3.
let c=18;
if(c%2==0 || c%3==0){
    console.log("dividible");
}
else{
    console.log("not divisible");
}
// 5️⃣ Print "you can drive" or "you cannot drive" based on the age being greater than 18 using the ternary operator.
let ag=1;
let t=ag>18?"you can drive":"not drive";
console.log(t);