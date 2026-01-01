// Event Propogation

// document.querySelector("#grandParent").addEventListener('click', () => {
//     console.log("Grandparent clicked");
// })

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log("parent clicked");
// })

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("child clicked");
// })

// ----------------------------------------------------------------

// document.querySelector("#grandParent").addEventListener('click', () => {
//     console.log("Grandparent clicked");
// }, true)

// // isCapture -> true (Capturing)
// // isCapture -> false (Bubbling by default)

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log("parent clicked");
// }, false)

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("child clicked");
// }, false)

// First event capturing takes place and then event bubbling

// -----------------------------------------------------------------
// Stop Event Propogation 

// document.querySelector("#grandParent").addEventListener('click', (e) => {
//     console.log("Grandparent clicked");
//     // e.stopPropagation();
// }, true)

// document.querySelector("#parent").addEventListener('click', (e) => {
//     console.log("parent clicked");
//     e.stopPropagation();
// }, true)

// document.querySelector("#child").addEventListener('click', (e) => {
//     console.log("child clicked");
//     // e.stopPropagation();
// }, false)

// --------------------------------------------------------------------------

// Event Delegation: Due to event bubbling (by default) we are able to access
// child elements in the parent which reduces the need for child events

// document.getElementById("laptops").addEventListener('click', () => {

// })

// document.getElementById("watches").addEventListener('click', () => {
    
// })

// document.getElementById("books").addEventListener('click', () => {
    
// })

// document.getElementById("mobiles").addEventListener('click', () => {
    
// })

document.getElementById("categories").addEventListener("click", (e) => {
    console.log("categories clicked");
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.id);
    window.location.href = "/" + e.target.id;
})
