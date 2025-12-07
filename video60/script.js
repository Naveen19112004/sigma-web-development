let str="harry";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);//undefined 
// js gives very lesss eroors compred to other languages 
//so it is called forgiving language

let str1=" naveen";
console.log(`hi my name is ${str1}`);
// ``->called template literals
// writing variable inside string literals called string interpolation
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.length);
// length is a "property" 
// toUpperCase(),or wherever we put barackets called "functions"
console.log(str1.replace("ee","aa"));
console.log(str1.slice(1,3));
console.log(str1.trim());
console.log(str1.concat("harry"));// '+
console.log(str1.indexOf("n"));
console.log(str1.charAt(1));
//even after performing these funs on the string they donot change 
// so strings are immutable
console.log(str1);//it prints " naveen"
// if we want the value we need to stroore it in another variab;e

// /n for the newline
// /t for the tab space


// 5 problems
// 1️⃣ What will the following print in JavaScript?
console.log("har\"".length);
// Output: 4   (h a r ")

// 2️⃣ Explore the includes(), startsWith() and endsWith() functions of a string.
console.log(str1.startsWith("n"));// true
console.log(str1.endsWith("n"));// true
console.log(str1.includes("v"));// true

// 3️⃣ Write a program to convert a given string to lowercase.
console.log(str1.toLowerCase());

// 4️⃣ Extract the amount out of this string:"Please give Rs 1000"
let str2="Please give Rs 1000"
console.log(str2.slice(15));

// **5️⃣ Try to change the 4th character of a given string.
// we cannot do this because strings are immutable