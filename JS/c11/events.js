// Events 
// Change in the state of an object is called as event.
// Events are fired to notify code of "interesting changes" that may affect the code

// MouseEvents (clicking, double click)
// KeyboardEvents (keypress, keyup, keydown)
// FormEvents (submit etc)

// Inline event handling 
// ondblclick="console.log('This is a double click event!')" 
// onclick="console.log('This is a click event!')" 

// Event Handling in JS 

// node.event = () => {
    //code
// }

let btn = document.querySelector("button");

// btn.onclick = (e) => {
    // console.log("Button was clicked!");
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.clientX);
    // console.log(e.clientY);
// }

// btn.onclick = () => {
//     console.log("Second event");
// }

// btn.onclick = () => {
//     console.log("Third event");
// }

// Note: If we have 2 events with the same name js will keep the last event
// If we have inline events and js events only js events will be executed
// (html events will not be executed)

// btn.ondblclick = () => {
//     console.log("Double click");
// }

// let div = document.querySelector("div");

// div.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log("Inside the div");
// }

// div.onmouseleave = () => {
//     console.log("Outside the div");
// }

// Event Object 
// It is a special object which has details about the event

// node.event = (e) => {
    // console.log(e);
// }


// Event Listeners 
// node.addEventLister(event, callback)

// btn.addEventListener("click", () => {
//     console.log("Button was clicked");
// })

// btn.addEventListener("click", () => {
//     console.log("Second event handler");
// })

// btn.addEventListener("click", () => {
//     console.log("Third event handler");
// })

// const handler3 = () => {
//     console.log("Third event handler");
// }

// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//     console.log("Fourth event handler");
// })

// To remove event Listener
// node.removeEventListener(event, callback)

// btn.removeEventListener("click", () => {
//     console.log("Third event handler");
// })

// btn.removeEventListener("click", handler3);


// Question: Create a toggle button that toggles b/w light and dark mode

let button = document.querySelector("button");
let body = document.querySelector("body");

let currMode = "light";

button.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.setAttribute("class", "dark");
        // body.classList.add("dark");
        // body.classList.remove("light");
    }
    else {
        currMode = "light";
        body.setAttribute("class", "light");
        // body.classList.add("light");
        // body.classList.remove("dark");
    }
    console.log(currMode);
})