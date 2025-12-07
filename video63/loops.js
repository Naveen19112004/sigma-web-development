let a = [1, 93, 5, 6, 88];

// ----------------------
// 🔹 1. Normal for loop
// ----------------------
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    // 1
    // 93
    // 5
    // 6
    // 88
}

// ----------------------
// 🔹 2. for-in loop → used for iterating over OBJECT KEYS
// ----------------------
const obj = {
    name: "nav",
    roll: 21,
    likes: "apples"
};

for (const i in obj) {
    console.log(obj[i]);
    // nav
    // 21
    // apples
}

// ----------------------
// 🔹 3. forEach() → executes a function for each element (does NOT return new array)
// ----------------------
a.forEach((value, index, arr) => {
    console.log(value * value);
    // 1
    // 8649
    // 25
    // 36
    // 7744
});

// ----------------------
// 🔹 4. map() → returns a NEW array with modified values
// ----------------------
const newarr = a.map((value, index, arr) => {
    return value * value;
});
console.log(newarr);
// [ 1, 8649, 25, 36, 7744 ]

// ----------------------
// 🔹 5. filter() → returns a NEW array containing elements that satisfy condition
// ----------------------
const filtered = a.filter((value, index, arr) => {
    return value > 7;
});
console.log(filtered);
// [ 93, 88 ]

// ----------------------
// 🔹 6. reduce() → reduces array to a SINGLE value
// ----------------------
const reducer = (a, b) => {
    return a * b;
};
console.log(a.reduce(reducer));
// 1 * 93 * 5 * 6 * 88 = 245520
// 5problems
// 1️⃣ Create an array of numbers and take input from the user to add numbers to this array.
// (PROMPT works only in browser, not Node.js)

let arr = [];
for (let i = 0; i < 5; i++) {
    let c = prompt("Enter a number for the array:");
    arr.push(Number(c));
}

console.log("Array after 5 inputs:", arr);
// 👉 OUTPUT example: Array after 5 inputs: [3, 10, 22, 7, 0]


// 2️⃣ Keep adding numbers to the array in Question 1 until the user enters 0.

let bee = [];
let input;

while (input != 0) {
    input = Number(prompt("Enter a number (0 to stop):"));
    if (input != 0) {
        bee.push(input);
    }
}

console.log("Bee array:", bee);
// 👉 OUTPUT example: Bee array: [5, 20, 7, 30]


// 3️⃣ Filter out numbers divisible by 10 from a given array.

let div10 = bee.filter((value) => value % 10 === 0);
console.log("Numbers divisible by 10:", div10);
// 👉 OUTPUT example: Numbers divisible by 10: [20, 30]


// 4️⃣ Create an array containing the squares of the given numbers.

const newarrr = bee.map((value) => value * value);
console.log("Squares:", newarrr);
// 👉 OUTPUT example: Squares: [25, 400, 49, 900]


// 5️⃣ Use reduce() to calculate factorial of a given number
// Example: array of first 5 natural numbers → factorial of 5 = 120

let f = [1, 2, 3, 4, 5];
const reduc = (a, b) => a * b;

console.log("Factorial:", f.reduce(reduc));
// 👉 OUTPUT: Factorial: 120
