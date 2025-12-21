const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errorTime;
let resultTime;

function updateResults() {
  const value = Number(inputEl.value);

  // If input is empty → clear everything
  if (inputEl.value === "") {
    errorEl.innerText = "";
    resultEl.innerText = "";
    return;
  }

  if (value <= 0 || isNaN(value)) {
    errorEl.innerText = "Please enter a valid number!";
    resultEl.innerText = "";

    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } else {
    errorEl.innerText = "";
    resultEl.innerText = (value / 2.2).toFixed(2);

    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
}

inputEl.addEventListener("input", updateResults);
