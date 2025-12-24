// CRUD Operations for DOM Manipulation (Create, Read, Update, Delete)

// Read => Query Selection (querySelector(), getElementById() etc.)
// Update => Element properties (innerText, innetHTML, textContent, tagName etc.)

// Create and Delete Elements in the DOM using js

// let ele = document.createElement("div");

// Ways to insert the created element in the DOM 

// 1) node.append(ele): It adds the element at the end of the node (inside the node)

// let newButton = document.createElement("button");
// newButton.innerText = "Click me!";
// console.log(newButton);
// console.dir(newButton);
// console.dir(newButton.tagName);
// console.dir(newButton.innerText);
// console.dir(newButton.innerHTML);

// let div = document.querySelector("div");
// console.log(div);

// div.append(newButton);

// 2) node.prepend(ele): Adds the element at the start of the node (inside the node)

// div.prepend(newButton);

// 3) node.before(ele): Adds the element before the node (outside)

// div.before(newButton);

// 4) node.after(ele): Adds element after the node (outside)

// div.after(newButton);

// --------------------------------------------------------------

// Delete Elements 

// node.remove() //remove that node from the dom

// let div = document.querySelector("div");

// div.remove();

// let newHeading = document.createElement("h1");
// console.log(newHeading);

// newHeading.innerHTML = "<i> <u> Hello JS </u> </i>"

// console.log(newHeading);

// let body = document.querySelector("body");

// body.prepend(newHeading);

// document.querySelector(".myPara").remove();

// newHeading.remove();



// Question: Create a <p> tag in HTML file and give it a class.
// Now create a new class in CSS and try to append this new class
// to the <p> tag using js 

let p = document.querySelector(".myPara");
console.log(p);

// p.setAttribute("class", "newClass");
p.classList.add("newClass");
// p.classList.add("newClass123");
// p.classList.remove("myPara");