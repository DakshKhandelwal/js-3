// API (Application Programming Interface)

// fetch API 
// The fetch API provides an interface for the fetching (sending/receiving)
// data or resource 
// It uses request and response objects
// fetch() method is used to fetch the data

// fetch API returns a promise

// let promise = await fetch(url, [optional])

// const url = "https://official-joke-api.appspot.com/random_joke";

// let data = await fetch(url); //fetch api uses GET method as default

// const getData = async () => {
//     console.log("Calling an api...");
//     let response = await fetch(url);
//     console.log(response);
//     // console.log(response.type);
//     let data = await response.json(); //return a js object
//     console.log(data);
//     console.log(data.setup);
//     console.log(data.punchline);
// }

// getData();

// let button = document.querySelector("#myBtn");
// const joke = document.querySelector("#joke");

// button.addEventListener('click', getData);
// button.addEventListener('click', async () => {
//     console.log("Calling an api...");
//     let response = await fetch(url);
//     console.log(response);
//     console.log(response.type);
//     console.log(response.status);
//     console.log(response.body);

//     let data = await response.json(); //return a js object
//     console.log(data);
//     console.log(data.setup);
//     console.log(data.punchline);
//     joke.innerHTML = `<b> Setup: </b> ${data.setup} <br> <b> Punchline: </b> ${data.punchline}`;
// });


// AJAX is Asynchronous JS & XML 
// JSON is Javascript Object Notation
// json() method: returns a promise that resolves with the result
// of the parsing of the response body as JSON

// json() method 
// Input: JSON
// Output: js object

// JSON Object 
// {
//     "type": "general",
//     "setup": "How do you get a baby alien to sleep?",
//     "punchline": "You rocket.",
//     "id": 124
// }

// js object
// const myObject = {
//     id: 124,
//     punchline: "You rocket.",
//     setup: "How do you get a baby alien to sleep?",
//     type: "general"
// }

// ------------------------------------------------------------------

// Using promise chain to make api calls 

// function getData() {
//     fetch(url).then((res) => {
//                  console.log(res);
//                  return res.json();
//                })
//                .then((data) => {
//                 console.log(data);
//                })
// }

// button.addEventListener('click', getData);


//Request and Response headers
//HTTP protocol (https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
// HTTP Status Code (https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)


const newAPIURL = "https://randomuser.me/api/";

const button = document.querySelector("#myBtn");
const joke = document.querySelector("#joke");

button.addEventListener('click', async () => {
    console.log("Calling api...");

    let response = await fetch(newAPIURL);
    let data = await response.json();
    console.log(data);

    let result = data.results;
    let email = result[0].email;
    let firstName = result[0].name.first;
    let lastName = result[0].name.last;
    let phoneNumber = result[0].phone;
    console.table([email, firstName, lastName, phoneNumber]);
})