// JSON (Javscript Object Notation) 

// JSON is a plain text for storing and transporting the data.
// JSON is used for send, receive and store data

// let myObj = {
//     name: "Virat",
//     age: 36
// }

// console.log(myObj);

// let jsonString = '{ "name": "Virat", "age": 36}';
// console.log(jsonString);

// If we want to convert JSON string into JS obj we can use
// JSON.parse()

// console.log(JSON.parse(jsonString));

// To convert JS obj to JSON string
// JSON.stringify() 

// console.log(JSON.stringify(myObj));
// console.log(typeof JSON.stringify(myObj));

// console.log(JSON.parse(jsonString).name);
// console.log(JSON.parse(jsonString).age);

// let myObj2 = {
//     employee: [
//         {
//             firstName: "Virat",
//             lastName: "Kohli",
//             age: 35
//         },
//         {
//             firstName: "Rohit",
//             lastName: "Sharma",
//             age: 36
//         }
//     ]
// }

// console.log(JSON.stringify(myObj2));

let jsonString2 = '{"employee":[{"firstName":"Virat","lastName":"Kohli","age":35},{"firstName":"Rohit","lastName":"Sharma","age":36}]}';

let jsObj2 = JSON.parse(jsonString2);
console.log(jsObj2);

console.log(jsObj2.employee[0].firstName);