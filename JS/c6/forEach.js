//Arrays: for, while, do-while, for-of
// forEach loop 

// arr.forEach(callback function)

// Callback function: A function that is passed as an argument to another function/method

// Higher Order Functions (HOF): Methods or functions which takes function as
// a parameter or returns a function is called as HOF

// For Each  => HOF (Higher order function)

// let arr = [1, 2, 3, 4];
// arr.push(5);

// arr.forEach(function (val) {
//     console.log(val);
// })

// let newArray = ["Pune", "Mumbai", "Delhi"];

// newArray.forEach(function (city) {
//     console.log(city);
// })

// newArray.forEach( (city) => {
//     console.log(city);
// })

let num = [1, 2, 3, 4];

let calculateSquare = function (ele, index, arr) {
    console.log(ele, index, arr)
    console.log(ele * ele);
}

num.forEach(calculateSquare);