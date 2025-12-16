// Function in JS 
// Block of code that performs a specific task and can be invoked whenver required

// Built-in functions in JS 
// console.log("Hello");

// "abc".toUpperCase();

// [1, 2, 3, 4].push(5);

// function definition 
// function functionName() {
//     //code
// }

// functionName(); //function call

// console.log("Javascript");
// console.log("We are learning JS functions");

// // 100 lines of code
// console.log("Javascript");
// console.log("We are learning JS functions");

// //100 lines of code
// console.log("Javascript");
// console.log("We are learning JS functions");

// function myFunction() {
//     console.log("Javascript");
//     console.log("We are learning JS functions");
// }

// myFunction();
// myFunction();
// myFunction();

// function functionName(param1, param2) { //parameters
//     //code
// }

// functionName(arg1, arg2); //arguments

// function printMsg(msg) {
//     console.log(msg);
// }

// printMsg("Learning JS");
// printMsg("I Love JS");

// function sum(x, y) {
//     // x and y are local variablescan't be accesses outside the block
//     let result = x + y;
//     console.log(result);
//     // return result;
//     //console.log("Hello world");
// }

// let res = sum(2, 3);
// console.log(res);

// sum(10, 20);

// Function in a variable name 
// let sumFunction = function (x, y) {
//     return x + y;
// }

// console.log(sumFunction);
// console.log(typeof sumFunction);
// console.log(sumFunction(10, 20)); //Function call

// sumFunction = "Hello World";

// console.log(sumFunction);
// console.log(typeof sumFunction);
// console.log(sumFunction(10, 20));


// Arrow functions 
// Compact way to write a function 

// const storeFunction = (param1, param2) => {
//     //code
// }

// storeFunction(x, y);

// let sum = (a,b) => {
//     return a+b;
// }

// console.log(sum(2, 3));

// let myFunction = () => {
//     console.log("Hello world");
// }

// myFunction();
// console.log(typeof myFunction); //function

// myFunction = "JS";
// console.log(typeof myFunction); //string

// Question: Write a function using function keyword which takes string as an
// argument and returns no. of vowels in the string.

// "Hello" => 2

// function countVowels(str) {
//     let count = 0;
//     str = str.trim().toLowerCase();
//     console.log(str);
//     //for, while, for-of
//     for(const char of str) {
//         // console.log(char);
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }

//     return count;
// }

// // let result = countVowels("Hello");
// let result = countVowels("   Javascript   ");
// console.log(result);


// Passing default values as param 
// function loginMessage(user1 = "student", user2 ="student2") {
//     if(!user1) {
//         console.log("User 1 does not exits", user1);
//         return;
//     }
//     console.log(`${user1} and ${user2} logged in`);
// }

// loginMessage("Rohit", "Virat");

// Rest operator: ... it spreads the arguments and returns it in array
// console.log("Hi", "Hello", "World", "JS");

// function calculateCartPrice(val1, val2, val3, ...num) {
//     console.log(val1, val2, val3);
//     console.log(num);
// }

// // calculateCartPrice(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
// calculateCartPrice(10);


// Immediately Invoked Function Expression (IIFE)
(function myFunction() {
    console.log("Call it immediately");
})();

// myFunction();

// methods and function
// Whenever we attach a function to a specific object like arrays, strings
// we call those functions as method 

[1, 2, 3].pop(); //pop() => method

"Hello World".toUpperCase(); //toUpperCase() => method

// [1, 2, 3].toUpperCase(); //Error

// Higher Order Functions (HOF): Methods or functions which takes function as
// a parameter or returns a function is called as HOF
