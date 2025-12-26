let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button");
// console.log(buttons);

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        console.dir(e.target);
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    })
})