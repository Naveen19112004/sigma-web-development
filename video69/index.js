let factof = 6;

// ❌ Your mistake was here → Array(factof) creates [0,1,2,3,4,5]
// ✔ Fix: use Array(factof + 1) so keys become [0,1,2,3,4,5,6]
let arr = Array.from(Array(factof + 1).keys());

let fina = arr.slice(1);  // same line as your code: this gives [1,2,3,4,5,6]

let red = ((a, b) => {
    return a * b;
})

console.log(fina.reduce(red));   // now prints 720

let ans = 1;
for (let i = 1; i <= factof; i++) {
    ans = i * ans;
}
console.log(ans);  // 720
