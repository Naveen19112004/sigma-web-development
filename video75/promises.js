console.log("these are the promises")
const prom1=new Promise((resolve,reject)=>{
    let b=Math.random()
    if(b<0.5){
        reject("promise got rejected because of the math arndom")
    }
    else{
    setTimeout(()=>{
        console.log("this is setTimeout fn");
        resolve("harry");
    },2000)
    }
})
prom1.then((a)=>{//a is the result o reject or resolve
    console.log(a);
}).catch((err)=>{
    console.error("failed somewhere")
})
// ✔ Promise settles only once (resolve OR reject).

// ✔ Repeated resolve/reject calls are ignored.

// ✔ setTimeout and Promise do NOT depend on each other.

// ✔ setTimeout controls time, Promise controls result.

// ✔ Even inside a Promise, setTimeout keeps running independently.



//promises api methods
// Promise P1
const P1 = new Promise((resolve, reject) => {
    let b = Math.random();

    if (b < 0.5) {
        reject("P1 rejected because Math.random < 0.5");
    } else {
        setTimeout(() => {
            console.log("P1: setTimeout finished");
            resolve("P1 resolved value");
        }, 2000);
    }
});

// Promise P2
const P2 = new Promise((resolve, reject) => {
    let b = Math.random();

    if (b < 0.5) {
        reject("P2 rejected because Math.random < 0.5");
    } else {
        setTimeout(() => {
            console.log("P2: setTimeout finished");
            resolve("P2 resolved value");
        }, 1000);
    }
});

// ⭐ 1) Promise.resolve()
const P3_resolve = Promise.resolve("Instant resolve!");
P3_resolve.then(console.log);

// ⭐ 2) Promise.reject()
const P3_reject = Promise.reject("Instant rejection!");
P3_reject.catch(console.error);

// resolve() / reject() = used inside a promise to decide the result after some async work finishes.
// Promise.resolve() / Promise.reject() = used outside to instantly create a resolved or rejected promise.
// ⭐ 3) Promise.all([P1, P2])

Promise.all([P1, P2])
    .then(values => console.log("ALL:", values))
    .catch(err => console.log("ALL ERROR:", err));


// 🔹 If any one rejects, whole thing rejects.

// ⭐ 4) Promise.allSettled([P1, P2])
Promise.allSettled([P1, P2])
    .then(results => console.log("ALL SETTLED:", results));


// 🔹 Always returns an array
// 🔹 Never throws
// 🔹 Shows status and value/reason

// ⭐ 5) Promise.race([P1, P2])
Promise.race([P1, P2])
    .then(val => console.log("RACE:", val))
    .catch(err => console.log("RACE ERROR:", err));


// 🔹 First promise to settle wins
// 🔹 Could be resolve or reject

// ⭐ 6) Promise.any([P1, P2])
Promise.any([P1, P2])
    .then(val => console.log("ANY:", val))
    .catch(err => console.log("ANY ERROR:", err));


    // 🔹 Returns first resolved promise
    // 🔹 Ignores rejections
    // 🔹 Errors only if all promises reject