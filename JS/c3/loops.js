// Loops in JS
// Loops are used to execute a piece of code again and again 
// 1) For loop 

// for(let i = 1; i<=5; i++) {
//     console.log("Hello world", i);
// }

// Calculate sum of numbers from 1 to 10 
// let sum = 0;
// for(let i=1; i<=10; i++) {
//     sum += i; // sum = sum + i;
// }
// console.log(sum);

// for(var i=1; i<=5; i++) {
//    console.log("i=", i);
// }
// console.log(i);

//Infinite loop: Loop that never ends (condition will always be true)

// for(let i=1; i>=0; i++) {
//     console.log("i=", i);
// }

// 2) while loop 

// let i=1;
// while(i<=5) {
//     console.log("i=",i);
//     i++;
// }

// 3) do-while loop 

// let i = 0;
// do {
//     console.log("i=", i);
//     i++;
// }while(i>10);

// 4) for-of loop: It is used to iterate over arrays or strings or Maps.

// const arr = [1, 2, 3, 4, 5];
// console.log(typeof arr);
// console.log(arr.length);

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// for(const num of arr) {
//     console.log(num);
// }

// const strArr = ["Rohit", "Virat", "Rahul", "Narendra", "Yash"];

// for (const name of strArr) {
//     console.log(name);
// }


// const myStr = "I Love Javascript";

// for(let char of myStr) {
//     console.log(char);
// }


//Destructuring of Array
// const arr = ["In", "Fr", "Ch", "USA", "Th"];
// const v1 = arr[0];
// const v2 = arr[1];
// const v3 = arr[2];
// const v4 = arr[3];
// const v5 = arr[4];

// console.table([v1, v2, v3, v4, v5]);

// const [v1, v2, v3] = arr;
// console.log(v1, v2, v3);


// Maps: are used to store unique values in the same order as inserted

// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("Ch", "China");
// map.set("Fr", "France123");

// console.log(map);

// for(const item of map) {
//     console.log(item);
// }

// for(const [key, value] of map) {
//     console.log(key, value);
// }


// 5) for-in loop: It is used to iterate over js objects

// let student = {
//     user: {
//         name: "Rohit"
//     },
//     age: 35,
//     score: 103,
//     "is Logged In": true
// }

// console.log(student);
// console.log(student.age);
// console.log(student.user.name);
// console.log(student["user"]["name"]);
// console.log(student["age"]);
// console.log(student.is Logged In);
// console.log(student["is Logged In"]);

// for(let key in student) {
//     console.log(key, student[key])
// }

// Note: We can't iterate over maps using for-in loop
// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("Ch", "China");
// map.set("Fr", "France123");
// // console.log(map);

// for(const key in map) {
//     console.log(key);
// }

// console.log(typeof map);


// Question: Print first 20 odd numbers

// for(let i=0; i<=40; i++){
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

// Question: Create a game where user can start with any number.
// User has to keep on guessing the number until user enters correct number.

let guessNumber = 10;
let userNumber = prompt("Enter a number");

while(userNumber != guessNumber) {
    userNumber = prompt("You entered wrong number. Guess again");
}
console.log("You entered correct number");

// Question: For a marks list find the max, min, mean.

let marks = [30, 40, 50, 60, 70, 80, 200, -3];

let max = marks[0];
let min = marks[0];
let sum = 0;

for(let i=0; i<marks.length; i++) {
    sum+=marks[i];
    if(marks[i] > max) max = marks[i];
    if(marks[i] < min) min = marks[i];
}

console.log(min);
console.log(max);
let mean = sum / marks.length;
console.log(mean);
