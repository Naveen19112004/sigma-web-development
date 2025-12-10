// ---------------- DOM SELECTION ----------------

document.querySelector(".box")              
// → <div class="box">i am the box</div>

document.querySelector(".box").innerHTML    
// → "i am the box"

document.querySelector(".container").innerHTML
// → "<div class='box'>i am the box</div><div class='box'>i am the box</div>"

document.querySelector(".container").outerHTML
// → "<div class='container'>...</div>"

document.querySelector(".container").tagName
// → "DIV"

document.querySelector(".container").nodeName
// → "DIV"

document.querySelector(".container").textContent
// → "i am the box i am the box"

document.querySelector(".container").hidden
// → false

document.querySelector(".container").hidden = true  
// Hides the entire container

document.querySelector(".box").innerHTML = "hey i am harry"
// First .box changes to → <div class="box">hey i am harry</div>

document.querySelector(".box").hasAttribute("style")
// → false

document.querySelector(".box").getAttribute("style")
// → null

document.querySelector(".box").setAttribute("style","display:inline")
// Adds style → <div class="box" style="display:inline">...</div>

document.querySelector(".box").attributes
// → NamedNodeMap { class: "box", style: "display:inline" }

document.querySelector(".box").removeAttribute("style")
// style removed successfully

document.querySelector(".box").remove()
// Removes the first .box from DOM

// ❌ WRONG: classList() is not a function
// ❌ document.querySelector(".container").classList()

// ✅ CORRECT:
document.querySelector(".container").classList
// → DOMTokenList []

document.querySelector(".container").classList.add("red")
// container now has class="container red"

document.querySelector(".container").classList.toggle("red")
// If red exists → it removes it. If not → adds it.

document.querySelector(".box").innerText
// → "i am the box" (for the second remaining box)


// ---------------- CREATING ELEMENTS ----------------

let div = document.createElement("div");
div.setAttribute("class", "created");

// append to container
document.querySelector(".container").append(div);
// Now container has: <div class="created"></div> at the end

let cont = document.querySelector(".container");

// Insert HTML after container
cont.insertAdjacentHTML("afterend", "<b> I am awanbg </b>");
// Output added after container
