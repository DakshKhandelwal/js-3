"use strict"

// console.log("Hello");
// console.log(this);
// console.log(window);

// console.log(window === this);

// this is referring to the global object (window obj) for the browser
// and {} for the nodejs

// function x() {
//     console.log(this);  //window obj or undefined (based on the non-strict or strict mode)
// }

// x();

// window.x();

// this inside the non-strict mode (this substitution occurs)

// this substitution: If the value of this keyword is undefined or null, then
// this keyword will be replaced by the global object in non-strict mode.

// this inside an object (this keyword refers to the obj itself inside a function)
// const obj = {
//     a: 10,
//     x: function() {
//         console.log("World");
//         console.log(this);  //referes to the obj itself
//     },
//     c: this  //window obj
// }

// console.log(this);  //window obj
// console.log(obj);

// obj.x();  //this will refer to the entire obj itself

// const obj = {
//     a: 10,
//     x: () => {
//         console.log("World");
//         console.log(this);  //arrow functions do not have their own this binding
//     },
//     c: this
// }

// console.log(obj);
// obj.x(); //this will refer to the window obj b/c arrow functions do not have their own this binding

// arrow functions do not have their own this binding, this is the main difference
// b/w arrow functions and traditional or normal functions.

// const user = {
//     userName: "Narendra",
//     age: 22,

//     welcomeMessage: function () {
//         console.log(`${this.userName} welcome to the JS course`);
//         console.log(this);
//     }
// }

// // user.welcomeMessage();

// user.userName = "Kaladi";
// user.welcomeMessage();

// user.userName = "akshay";
// user.welcomeMessage();

// ----------------------------------------------------------------

// Call, apply, bind method (sharing methods)

// const student = {
//     name: "Pratibha",
//     printName: function() {
//         console.log(this.name);
//     }
// }

// student.printName();
// student.name = "Sneha";
// student.printName();

// const student2 = {
//     name: "Reshma"
// }

// student.printName.call(student2);

// let name1 = {
//     fName: "Rohit",
//     lName: "Sharma"
// }

// let name2 = {
//     fName: "Virat",
//     lName: "Kohli"
// }

// let printFullName = function(city, state, country) {
//     console.log(`${this.fName} ${this.lName} lives in ${city} ${state} ${country}` );
// }

// printFullName.call(name1, "Mumbai", "Maharashtra", "India");
// printFullName.call(name2, "Delhi", "UT", "India");

// apply Method: It will here only and in apply method we pass arguments as an array list

// printFullName.apply(name1, ['Mumbai', "Maharashtra", "India"]);
// printFullName.apply(name2, ["Delhi", "UT", "India"]);

// bind Method: It returns a function bind to that object and we can use it anywhere in the code
// let printName = printFullName.bind(name2, "Delhi", "UT", "India");
// console.log(printName);
// printName();  //Virat Kohli

// name2.fName = "Rahul";
// printName(); //Rahul Kohli


// ------------------------------------------------------------------------

// Currying in JS 

// function add(a, b, c) {
//     return a+b+c;
// }

// console.log(add(1, 2, 3)); //6
// console.log(add(1, 2)); //NaN (Not a number)

// I do not want to execute the function if I do not have all the arguments for it 

// function add(a) {
//     return function(b) {
//         return function (c) {
//             return a+b+c;
//         }
//     }
// }

// console.log(add(2)(3)(5));
// console.log(add(2)(3));

// const add = (a) => (b) => (c) => a+b+c;
// console.log(add(2)(3)(5));

// to, subject, body => email to be sent

// function sendAutoEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`Sending email to ${to} with subject ${subject} and body ${body}`)
//         }
//     }
// }

const sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending email to ${to} with subject ${subject} and body ${body}`)

let step1 = sendAutoEmail("random@gmail.com");

let step2 = step1("New order confirmation");

step2("Hello random, here is something for you!");