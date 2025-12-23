// DOM Manipulation 

// 1) How we can select the elements from the DOM? 
// 2) How can we update those selected elements?

// console.log(window);
// console.log(window.document);

// console.log(document);
// console.dir(document);

// Element / Node Selection 

// 1) Selection by id (if not present it will return null)

// let myPara = document.getElementById("myPara");
// console.log(myPara); //element
// console.dir(myPara); //object

// let button = document.getElementById("myBtn");
// console.log(button);

// 2) Selection by class (it returns HTML collection as o/p and if not present returns empty html collection)
// let headings = document.getElementsByClassName("myHeading");
// console.log(headings);

// console.log(headings[0]);
// console.log(headings[1]);

// 3) Selection by tag (it returns HTML collection as o/p and if not present returns empty html collection)
// let pTags = document.getElementsByTagName('p');
// console.log(pTags);

// console.log(pTags[0]);
// console.log(pTags[1]);


// Query Selection (# -> ids, . -> classes)
// 1) Selection by Id: document.querySelector("#myPara");
// let pTag = document.querySelector("#myPara");
// console.log(pTag);
// console.dir(pTag);

// Selection by Class (returns the first matching element): document.querySelector(".myHeading");
// let myHeading = document.querySelector(".myHeading");
// console.log(myHeading);

// 2) document.querySelectorAll(".myHeading");
//Selection by class (returns all matching elements in a Node list)
// let allHeadings = document.querySelectorAll(".myHeading");
// console.log(allHeadings);

// console.log(allHeadings[0]);
// console.log(allHeadings[1]);

// 3) Selection by element
// let myButton = document.querySelector("button");
// console.log(myButton); //element
// console.dir(myButton); //object

// ----------------------------------------------------------------------------

// Properties

// 1) tagName: return a tag for that element

// let firstPara = document.querySelector('p');
// console.log(firstPara); //element
// console.dir(firstPara); //object

// console.log(firstPara.tagName); //P

// let button = document.querySelector("button");
// console.log(button.tagName); //BUTTON

// 2) innerText: returns the text content of the element and all its children

// let button = document.querySelector("button");
// console.log(button.innerText);

// button.innerText = "Modified text for button";

// let div = document.querySelector("div");
// // console.log(div);
// // console.dir(div);
// console.log(div.innerText);

// div.innerText = "Modified div";

// let h6 = document.querySelector("#smallHeading");
// console.log(h6);
// console.log(h6.innerText);

// h6.innerText = "My new Heading...";

// 3) innerHTML: returns the plain text or HTML content in that element and all of its children

// let div = document.querySelector("div");
// console.log(div.innerText);
// console.log(div.innerHTML);

// 4) textContent: returns the text content even for the hidden elements

// let div = document.querySelector("div");
// console.log(div.innerText);
// console.log(div.innerHTML);
// console.log(div.textContent);

// Question: Create 3 div elements all with common class name box.
// Access them and add some unique text to each of these 3 divs.

// let divs = document.querySelectorAll(".box");
// console.log(divs);

// divs[0].innerText = "Unique div 1";
// divs[1].innerText = "Unique div 2";
// divs[2].innerText = "Unique div 3";

// for(let i=0; i<divs.length; i++) {
//     // divs[i].innerText = `Unique div ${i+1}`;
//     divs[i].innerText = "Unique div " + (i + 1);
// }

// let index = 1;
// for(let div of divs) {
//     div.innerText = `Unique div ${index}`;
//     index++;
// }

// divs.forEach((div, index) => {
//     div.innerText = `Unique div ${index + 1}`;
// })

// -----------------------------------------------------------------------

// Attributes 
// 1) getAttribute(attr)

// let h1 = document.querySelector("h1");
// console.log(h1);

// let name = document.querySelector("h1").getAttribute("style")
// console.log(name);

// 2) setAttribute(attr, value)
// let firstDiv = document.querySelector("div");

// firstDiv.setAttribute("id", "newDiv1234");

// firstDiv.setAttribute("class", "newClass"); //overwriting the old class

// firstDiv.classList.add("newClass"); //append the new class
// firstDiv.classList.remove("box"); 

// ---------------------------------------------------------------

// Manipulate CSS using JS 

//Style
// element.style.backgroundColor

// CSS => JS in Camel Case (firstletter small and others start with capital) 

// color => color 
// background-color => backgroundColor
// font-size => fontSize 

let body = document.querySelector("body");
console.log(body);

body.style.backgroundColor = "yellow";

document.querySelector("#newHeading").style.fontSize = "50px";
document.querySelector("#newHeading").style.fontFamily = "cursive";
document.querySelector("#newHeading").style.visibility = "hidden";
