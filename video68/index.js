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
document.getElementsByclassName(".box")[0].style.backgroundColor="red";