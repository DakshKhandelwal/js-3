// Scope: Where you can access a variable or a function 

// Block: It is used to club multiple statements into single statement

// if(true) {
//     console.log("Hi");
//     let a= 100;
//     console.log(a);
// }

// for(let i=0; i<n; i++) {

// }

// let a = 100;
// console.log(a);

// {
//     console.log("Hello world");
//     let a = 10;
//     console.log(a);
// }

// console.log(a);

// var a = 100;
// console.log(a);

// {
//     console.log("Hello world");
//     var a = 10;
//     console.log(a);
// }

// console.log(a);

// let a = 100;
// console.log(a);

// {
//     console.log("Hello world");
//     console.log(a);
// }

// console.log(a);


// {
//     console.log("Hello world");
//     let a = 100;
//     console.log(a);
// }

// console.log(a);

// Lexical Environment

var x = 1;

function myFunction() {
    console.log(x);
}

myFunction();

console.log(x);


// Memory Allocation     Code Execution
// x: undefined          1
// myFunction(): {...}   1

// o/p 
// 1
// 1

