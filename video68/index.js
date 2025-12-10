// ✅ 1. What is an HTMLCollection?

// HTMLCollection contains ONLY HTML elements.
// No text nodes, no comments, nothing else.

// It is live → meaning if the DOM changes, the collection updates automatically.

// Example:
// document.body.children


// Returns only the element nodes
// (E.g., <div>, <p>, <span>)

// ✅ 2. What is a NodeList?

// NodeList can contain:
// ✔ Elements
// ✔ Text nodes
// ✔ Comment nodes

// It is usually static → does NOT update when DOM changes
// (Except in childNodes, which is live).
// Changes background of the second element with class="box"
document.getElementsByClassName("box")[1].style.backgroundColor = "red";
// ✔ No error
// ✔ getElementsByClassName → returns HTMLCollection
// ✔ [1] means second element



// Changes background of the element with id="b3"
document.getElementById("b3").style.backgroundColor = "blue";
// ✔ Works only if an element has id="b3"
// ❗ If no such element, you'll get an error



// querySelector selects the FIRST matching element → .box (first box)
document.querySelector(".box").style.backgroundColor = "yellow";
// ✔ Uses CSS selectors
// ✔ Only FIRST matching element is affected



// querySelectorAll(".box") returns a NodeList of ALL .box elements
let c = document.querySelectorAll(".box");

// Loop: sets all .box backgrounds to orange
c.forEach((value, index, a) => {
    value.style.backgroundColor = "orange";
});
// ✔ forEach works because NodeList supports forEach()



// Prints all <div> elements inside the document
console.log(document.getElementsByTagName("div"));
// OUTPUT (example):
// HTMLCollection [div.container, div.box, div.box, div.box, div.box, div.box]
