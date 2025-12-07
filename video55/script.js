// var const let 
//7 primitive data tyoes
//symbol, bigint,boolean,number,null ,undefined,string
//y type of null is an object
//this is the mistake in js witen on 1995
//y are they called primitive data types
// as we directly store the values 
//non primitive 
//remaining like fns ,dates,objects,which we store through reference


//can wwe change the const object roperties which are insie it?
// ✔ This is valid because you are not changing the variable reference.
// You are only changing the data inside the object.
// ✔ But you can update, add, or delete properties inside the object.

// 5 problems
// 1️⃣ Create a variable of type string and try to add a number to it. Use the typeof operator to check the result.
let a="naveen";
a=a+2;
console.log(a);

// 2️⃣ Use the typeof operator to find the data type of the result from Question 1.
console.log(typeof a);

// 3️⃣ Create a const object in JavaScript. Can you change the variable to hold a number later? Explain why or why not.
const obj1={
    "name":"naveen",
}
obj1["name"]=2;
console.log(obj1["name"]);

// 4️⃣ Try to add a new key–value pair to the const object from Question 3. Were you able to do it? Why?
obj1["rollno"]=41;
console.log(obj1);

// 5️⃣ Write a JavaScript program to create a word–meaning dictionary containing at least 5 words.
const obj2={
    "ambitious":"to desire smthg",
    "self-confident":"to have confidence in some work",
    "sense of humour":"to be funny",
    "hardwork":"to work on somethg",
    "charmful":"to be happy or pleasant"
};
console.log(obj2["charmful"]);
