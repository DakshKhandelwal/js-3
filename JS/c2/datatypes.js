// Primitive Datatypes

// 1) Number 
// let score = 11;
// console.log(score);
// console.log(typeof score);

// let price = 13.1234;
// let myPrice = price;
// console.log(myPrice);
// console.log(typeof myPrice); //number

// myPrice = "Rahul";
// console.log(myPrice);
// console.log(typeof myPrice); //string

// let count = Number(10);
// console.log(count);
// console.log(typeof count);

// 2) String 
// let myStr = "Yash";
// console.log(myStr);
// console.log(typeof myStr);

// let user = String("Narendra");
// console.log(user);
// console.log(typeof user); //string

// 3) Boolean 
// let isLoggedIn = true;
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

// let isAuthorized = Boolean(false);
// console.log(isAuthorized);
// console.log(typeof isAuthorized); //boolean

// 4) null 
// let userId = null; //empty placeholder where user knows the value is null
// console.log(userId);
// console.log(typeof userId); //object (Exception)

// 5) undefined
// let userEmail = undefined; //user do not kmnow the value
// console.log(userEmail);
// console.log(typeof userEmail); //undefined

// let count1;
// console.log(count1); //undefined
// console.log(typeof count1); //undefined

// count1 = 20;
// console.log(count1); //20
// console.log(typeof count1); //number

// 6) bigint
// let largePrimeNumber = 33333333344444444444555555566666667777777777777777888888n;
// console.log(largePrimeNumber);
// console.log(typeof largePrimeNumber); //bigint

// 7) Symbol 
// let uniqueValue1 = Symbol("Hello");
// console.log(uniqueValue1);
// console.log(typeof uniqueValue1); //symbol

// let uniqueValue2 = Symbol("Hello");
// console.log(uniqueValue2);
// console.log(typeof uniqueValue2); //symbol

// console.log(uniqueValue1 == uniqueValue2); //both values are different (unique values)

// ------------------------------------------------------------------------------------------

// Non-primitive Datatypes 

// Note: Everything in JS is an object

// 1) Array (variable in size, heterogenous, 0-based indexing)
// const emptyArray = [];
// const marks = [20, 30, 40, 50, 60];
// console.log(marks);
// console.log(typeof marks); //object

// const heroes = ["superman", "batman", "spiderman"];
// console.log(heroes);
// console.log(typeof heroes); //object

// const everything = ["heroes", "villans", 2, 30, null, undefined, true, false, 12];
// console.log(everything);
// console.log(typeof everything);

// console.log(everything.length);
// console.log(everything[0]); //firstElement
// console.log(everything[everything.length - 1]); //lastElement
// console.log(everything[-1]); //undefined
// console.log(everything[100]); //undefined

// everything[11] = "Hello";
// console.log(everything);
// console.log(everything[10]);

// 2) Objects 

// {
//     key: value
// }

const obj = {}; //empty obj

const newObj = {
    firstName: "Virat",
    age: 35,
    isLoggedIn: false,
    score: [20, 50, 100, 150, 200],
    matches: {
        ipl: 30,
        test: 50
    }
}

// console.log(newObj);
// console.log(typeof newObj); //object
// console.log(newObj.firstName);
// console.log(newObj.age);
// console.log(newObj.isLoggedIn);
// console.log(newObj.score[0]);
// console.log(newObj.matches.ipl);

// 3) Function 

// function definition 
// function printName(name) {
//     console.log("Hello world");
//     console.log("My name is ", name);
// }

// function call 
// printName();
// printName("Virat");
// printName("Rohit");

// console.log(typeof printName); //function

const printName = function () {
    console.log("Hello world");
    console.log("Learning functions!");
}

// console.log(printName);
// console.log(typeof printName);
// printName();