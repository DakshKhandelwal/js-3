// "use-strict"

// console.log("Javascript");
// console.log("Introduction to Javascript"); // print statement in JS

// Single line comment

/*
  This is a 
  multi-line comment
*/

// ------------------------------------------------------------------
// Variables in JS 
// Variables are containers for JS 

// fullName = "Rohit Sharma";
// age = 25;
// price = 21.45;

// console.log(fullName, age, price);

// Variable Rules 

// 1) Variable names are case-sensitive. "a", "A" are different.
// age = 30;
// Age = 45;

// 2) Only letters, digits, underscore (_) and dollar ($) is allowed. (not even space)

// full_Name = "Virat Kohli";
// user1 = "Rohit";
// user2 = "Virat";

// 3) Only letters, underscore (_) and dollar ($) can be the first character.
// 1user = "Yash"; (not valid)
// _user = "Yash";
// $user = "Yash";

// 4) Reserved keywords cannot be variable names. 
// eg: for, while, if, else 

// Use camel case to write variable names. (it is a good practice not compulsory)
// fullName
// isLoggedIn


// ------------------------------------------------------------------------

// let, var, const (to declare variables) 
// let fullName = "Rohit Sharma";
// var price = 15.30;
// const userName = "Rohit";

// JS is a loosely typed language
// we do not have to define type of variable (int, string, boolean)

// var: Variables can be re-declared and updated. A function scope variable.
// let: Variables cannot be re-declared but can be updated. A block scope variable.
// const: Variables cannot be re-declared or updated. A block scope variable.

// var user = "Rahul";
// console.log("User is: ", user);

// //After 1000 lins of code

// var user = 20;
// console.log("Re-declared user is: ", user);

// user = "Rohit";
// console.log("Updated user is:", user);


// let user1 = "Virat";
// console.log("User1 is ", user1);

// let user1 = "Kohli";
// console.log("Updated user1 is ", user1);  //Syntax error (Nothing will run)

// user1 = "Sharma";  
// console.log("Updated user1 is ", user1);


// const accountNumber = 123;
// console.log("Account Number is ", accountNumber);

// accountNumber = 321;
// console.log("Updated accountNumber is ", accountNumber); //Runtime error (Type error) Some code will run

// console.log("1234");

// Note: Always try to use only let and const variables do not use var

// const accountId = 12345;
// let accountEmail = "abcd@gmail.com";
// let password = "123";
// let accountCity;
// let nothing = null;

// console.log(accountId, accountEmail, password,  accountCity, nothing);

// console.table([accountId, accountEmail, password,  accountCity, nothing])


// alert("Hello world");

console.log("Hello");
console.log("World");
console.log(2+3*5);

console.log(2
    +
    3
);

//Code should be highly readable
console.log(2+3);
