//js is asynchronous
console.log("harry is hacker")
setTimeout(()=>{
    console.log("setimeout now starrted");
},2000)
console.log("raohan is hacker");
// as it is asynchromous 
// harry is hacker
// raohan is hackerthese both come first then the setimeout now starrted
// which is not waiting evn it is 0 sec
//because settime is macrotask in eventloop
// 📌 🔴 PART 1 — Asynchronous Functions (WITHOUT callbacks or promises)
// Example: Making Tea (Async tasks run independently → output mismatch)
function boilMilk() {
  setTimeout(() => {
    console.log("1️⃣ Milk boiled");
  }, 3000);
}

function addTeaPowder() {
  setTimeout(() => {
    console.log("2️⃣ Tea powder added");
  }, 1000);
}

function addSugar() {
  setTimeout(() => {
    console.log("3️⃣ Sugar added");
  }, 2000);
}

//Calling them
boilMilk();
addTeaPowder();
addSugar();

// ❌ Explanation (Why output mismatches)

// boilMilk() takes 3 sec,

// addSugar() takes 2 sec,

// addTeaPowder() takes 1 sec.

// Since we are not controlling the order, output becomes:

// 2️⃣ Tea powder added
// 3️⃣ Sugar added
// 1️⃣ Milk boiled


// 👉 This is NOT the real order of making tea.
// 👉 This problem is called asynchronous mismatch.
// 👉 This leads to callback hell when we try to fix it manually.

//📌 🟡 PART 2 — Using CALLBACKS (Manual waiting)
// Example: Making tea in correct order using callbacks
function boilMilk(callback) {
  setTimeout(() => {
    console.log(" Milk boiled");
    callback();
  }, 3000);
}

function addTeaPowder(callback) {
  setTimeout(() => {
    console.log("2️⃣ Tea powder added");
    callback();
  }, 1000);
}

function addSugar(callback) {
  setTimeout(() => {
    console.log("3️⃣ Sugar added");
    callback();
  }, 2000);
}

// CALLBACK HELL
boilMilk(() => {
  addTeaPowder(() => {
    addSugar(() => {
      console.log("☕ Tea is ready!");
    });
  });
});

// ✔ Correct Output:
// 1️⃣ Milk boiled
// 2️⃣ Tea powder added
// 3️⃣ Sugar added
// ☕ Tea is ready!

// ✔ Explanation

//Here callbacks force the next task to wait.
// 
// We manually place each task inside the previous task.

// This creates waiting behavior.

// ❌ PROBLEM

// This becomes:

// boilMilk(() => {
//   addTeaPowder(() => {
//     addSugar(() => {
//       ...
//     });
//   });
// });


// This is called callback hell 😵.

// 📌 🟢 PART 3 — Using PROMISES (Cleaner waiting + error handling)
// Example using PROMISES:
function boilMilk() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("1️⃣ Milk boiled");
      resolve();
    }, 3000);
  });
}

function addTeaPowder() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("2️⃣ Tea powder added");
      resolve();
    }, 1000);
  });
}

function addSugar() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("3️⃣ Sugar added");
      resolve();
    }, 2000);
  });
}

boilMilk()
  .then(addTeaPowder)
  .then(addSugar)
  .then(() => console.log("☕ Tea is ready!"));

// ✔ Output

// Same correct order:

// 1️⃣ Milk boiled
// 2️⃣ Tea powder added
// 3️⃣ Sugar added
// ☕ Tea is ready!

// 📌 🟣 PART 4 — Using async/await (Best, cleanest)
async function makeTea() {
  await boilMilk();
  await addTeaPowder();
  await addSugar();
  console.log("☕ Tea is ready!");
}

makeTea();


// 👉 async/await looks synchronous but handles async perfectly.