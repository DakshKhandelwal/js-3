// Hoisting in JS 
// Trying to access the variables or functions before initialization 

// console.log(x);
// getName();

// var x = 5;

// function getName() {
//     console.log("Hello world");
// }

//Output
// undefined
// Hello World 

// --------------------------------------------------------------

// console.log(a);
// getName();

// var a = 5;

// var getName = function() {
//     console.log("Hello World")
// }

// Memory Allocation     Code Execution 
// a: undefined             
// getName: undefined


// Output 
// undefined
// Type Error: getName is not a function 

// ---------------------------------------------------------

// var variable are hoisted in JS 

// Are let and const variables also hoisted in JS?

// Yes let and const variables are also hoisted in JS but they are stored in
// Temporal Dead Zone. 
// Temporal Dead Zone: Time b/w which variables are hoisted and just before their initialization

// console.log("Hi");

// let a = 5;
// console.log(a);

// console.log("Bye");

console.log("Hello");

let a = 100;
var b = 200;

const d = 400;
const c = 300;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
