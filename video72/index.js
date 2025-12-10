function randomcolour() {
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);

    return `rgb(${a}, ${b}, ${c})`;  
}

// Select ALL boxes (NOT containers)
let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.style.backgroundColor = randomcolour();
    box.style.color = randomcolour();
});
