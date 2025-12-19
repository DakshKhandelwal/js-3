// How JS executes the code

// Javascript is a synchronous single-threaded language
// Eveything JS executes on the Call Stack 

// var a = 2;

// function square(num) {
//     var ans = num * num;
//     return ans;
// }

// var square2 = square(a);
// var square5 = square(5);

//Call Stack is maintaining the order of execution of execution context

// printName();
// console.log(x);
// var x = 5;

// function printName() {
//     var a = 5;
//     console.log("Hello JS");
// }


// Memory Allocation   Code Execution
// x: undefined           //undefined 
// printName: {...}    


// ------------------------------------------------------

var apple = 1;

a();
b();

console.log(apple);

function a() {
    var apple = 10;
    console.log(apple);
}

function b() {
    var apple = 100;
    console.log(apple);
}

// Note: var variable is function scope 