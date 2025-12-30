// Synchronous JS and Asynchronous JS

// console.log("one");
// console.log("two");
// console.log("three");

// Sync in JS 
// Synchronous: The code runs in a particular sequence of instructions
// given in a program. Each instruction waits for the previous
// instruction to be executed. 

// JS is non-blocking in nature.

// const button = document.querySelector("button");
// button.addEventListener('click', () => {
//     console.log("Button clicked");
// })

// for(let i=0; i<100; i++) {
//     console.log("Hello world", i);
// }

// console.log("four");
// console.log("five");

// Asynchronous (setTimeout, events, fetch API's)
// Due to synchronous programming, some important instructions
// gets blocked due to previous instruction, which cause delay
// in UI.
// Asynchronous code execution allows to execute the instructions
// without blocking the flow.

// console.log("10");
// console.log("11");

// function hello() {
//     console.log("Hello");
// }

// setTimeout(hello, 2000); //It will execute the function hello after 2 sec

// console.log("12");
// console.log("13");


// console.log("1");

// setTimeout(() => {
//     console.log("From setTimeout")
// }, 0)

// console.log("2");
// console.log("3");

// for(let i=0; i<100; i++) {
//     console.log("Hello", i);
// }

// console.log("4");


// ------------------------------------------------------------------

// Callbacks
// A callback is a function which is passed as an argument to another function

// function calculator(a, b, sumCallback) {
//     sumCallback(a,b)
// }

// calculator(1, 2, (x, y) => {
//     console.log(x+y);
// })

// const hello = () => {
//     console.log("Hello");
// }

// setTimeout(hello, 1000);

// --------------------------------------------------------------

// Callback hell 

// Callback hell: Nested callbacks stacked below one another 
// forming a pyramid structure

// if(15 > 12) {
//     if(20 > 30) {
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }

// for(let i=0; i<4; i++) {
//     for(let j=0; j<3; j++) {
//         console.log(i,j);
//     }
// }


// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 4000)
// }

// getData(1); //Objective: this line should wait for result (4 sec) and then go to the next line
// getData(2);
// getData(3);

// data 1
// data 2
// data 3

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 4000)
// }

// console.log("Getting data 1...");

// getData(1, () => {
//     console.log("Getting data 2...");
//     // 100 lines of code
//     getData(2, () => {
//         console.log("Getting data 3...");

//         getData(3, () => {
//             console.log("Getting data 4...");

//             getData(4);
//         });
//     })
// })

//This above code is an example of a callback hell. (Nested callbacks stacked on top of another)
//This style of programming is very difficult to understand, manage and debug. 

// ------------------------------------------------------------------------

// Promises: It is for the eventual completion of a task. It is a js object.
// It is solution to callback hell.

// let promise = new Promise(() => {
//     console.log("This is a promise");
// })

// let promise = new Promise((resolve, reject) => {
//     console.log("This is a promise");
//     // resolve("success 123");
//     reject("error 123");
// })

// console.log(promise);

// resolve and reject are 2 function handlers provide by js.
// They are callback functions.

// 3 states in promise 
// 1) pending: result is undefined
// 2) fulfilled (resolve): The result is the value send in resolve. //resolve(data)
// 3) rejected (reject): The result is the error. //reject(error)

// Promise handling in JS 
// .then() -> if the promise is fulfilled
// .catch() -> if the promise is rejected

// Promise.then((res) => {
//     console.log(res);
// })

// Promise.catch((err) => {
//     console.log(err);
// })


//Simulating API calling

// const getPromise = () => {
//     return new Promise((res, rej) => {
//         console.log("This is a promise");
//         res("success");
//         // rej("error123");
//     })
// }

// let promise = getPromise(); // API call which returns a promise
// console.log(promise);

// promise.then((val) => {
//     console.log("Promise is fulfilled/resolved:", val);
// })

// promise.catch((err) => {
//     console.log("Promise wa rejected", err)
// })


// function asyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data");
//             resolve({success: 1, data: "successful"})
//             // reject({success: 0, data: "error"})
//         }, 4000)
//     })
// }

// console.log("Calling API");

// let apiCallPromise = asyncFunction(); // this will return me promise (data) after 4 sec

// console.log(apiCallPromise);

// apiCallPromise.then((res) => {
//     console.log("This is the api result", res);
//     console.log(apiCallPromise);
// })

// apiCallPromise.catch((err) => {
//     console.log("This is api error", err);
//     console.log(apiCallPromise);
// })

// asyncFunction().then((res) => {
//     console.log("This is the api result", res);
// })

// asyncFunction().catch((err) => {
//     console.log("This is api error", err);
// })



function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000)
    })
}

// console.log("getting data 1...");

// getData(1).then(() => {
//     console.log("getting data 2...");

//     getData(2).then(() => {
//         console.log("getting data 3...");

//         getData(3).then(() => {
//             console.log("getting data 4...");
//             getData(4);
//         })
//     })
// })

//Promise Chaining

//   getData(1).then((res) => {
//                 console.log(res);
//                 return getData(2);
//             })
//             .then((res) => {
//                 console.log(res);
//                 return getData(3);
//             })
//             .then((res) => {
//                 console.log(res);
//             })

// This promise chain has resolved the callback hell issue

// -----------------------------------------------------------------------

// async-await 

// Note: async functions always returns a promise

// function hello() {
//     console.log("Hello world");
//     return "success";
// }

// let result = hello();
// console.log(result);

// async function hello() {
//     console.log("Hello world");
// }

// let result = hello(); //will always returns a promise
// console.log(result);

// Note: await pause the execution of its surrounding async function
// until the promise is settled. (either resolved or rejected)

// Note: await should be used inside an asunc function only.

// async function myPromiseAPI() {
//     console.log("API result");
// }

// let myPromiseResult = await myPromiseAPI(); //can't use await without async function

// console.log(myPromiseResult);


function api(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("server data", id);
            res(200);
        }, 4000)
    })
}

// await api(1);
// await api(2);

async function getAPIData() {
    console.log("Getting data 1...");
    let result = await api(1);
    console.log("This is result", result);

    // debugger;

    console.log("Getting data 2...");
    await api(2);

    console.log("Getting data 3...");
    await api(3);

    // debugger; 

    console.log("Getting data 4...");
    await api(4);
}

getAPIData();