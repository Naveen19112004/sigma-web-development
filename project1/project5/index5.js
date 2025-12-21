const days = document.getElementById("d");
const hours = document.getElementById("h");
const minutes = document.getElementById("m");
const seconds = document.getElementById("s");

function updatetime() {
    const now = new Date().getTime();
    const newYear = new Date(2026, 0, 1).getTime();
    const gap = newYear - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;   // ✅ FIXED

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}

setInterval(updatetime, 1000); // ✅ better than setTimeout
updatetime();
