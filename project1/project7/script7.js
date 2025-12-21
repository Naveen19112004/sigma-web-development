const clear = document.getElementById("clear");
const input = document.querySelector("#inputbox");
const boxEl = document.getElementsByClassName("box");
const equal = document.querySelector(".equal");
let str = "";

clear.addEventListener("click", () => {
    clearinput();
});

for (let i = 0; i < boxEl.length; i++) {
    boxEl[i].addEventListener("click", () => {
        if (boxEl[i].innerText !== "=") {
            input.value = input.value + boxEl[i].innerText;
        }
    });
}

function clearinput() {
    str = "";
    input.value = "";
}

equal.addEventListener("click", () => {
    str = eval(input.value);
    input.value = str;
});
