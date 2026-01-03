// Everything in JS is an object 

// let arr = ["Rohit", "Virat"];

// console.log(arr.__proto__);
// console.log(Array.prototype);

// console.log(arr.__proto__.__proto__);
// console.log(Object.prototype)

// console.log(arr.__proto__.__proto__.__proto__); //null


// const obj = {
//     name: "Rohit",
//     city: "Mumbai",
//     getIntro : function () {
//         console.log(`${this.name} from ${this.city}`);
//     }
// }

// console.log(obj.__proto__)
// console.log(Object.prototype)

// console.log(obj.__proto__.__proto__)
// null


// function fun () {
//     //
// }

// console.log(fun.__proto__)
// console.log(Function.prototype)

// console.log(fun.__proto__.__proto__)
// console.log(Object.prototype)

// console.log(fun.__proto__.__proto__.__proto__)
// null


// ---------------------------------------------------------

// let obj2 = {
//     name: "Virat"
// }

// console.log(obj2.name); //Virat
// console.log(obj2.city); //undefined

// // Prototype Inheritance 

// // Never do this 
// obj2.__proto__ = obj;

// console.log(obj2.city); //Mumbai
// console.log(obj2.getIntro()); //Mumbai

// let arr = ["Rohit", "Virat"];


Function.prototype.myFunction = function () {
    console.log("Some imp. function");
}

function fun() {

}

function fun2() {
    
}