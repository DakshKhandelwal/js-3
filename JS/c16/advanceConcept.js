// Use this website to visualize JS (https://www.jsv9000.app/)

// console.log("start");

// setTimeout(() => {
//     console.log("timeout")
// }, 0);

// console.log("end");

// O/P
// start 
// end 
// timeout
// ---------------------------------------------------------

// console.log("start");

// setTimeout(() => {
//     console.log("timeout")
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// }) 

// console.log("end");

// O/P
// start 
// end 
// Promise 
// timeout 

// -----------------------------------------------------------

// Promise.resolve().then(() => {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");
//     }, 0)
// })

// setTimeout(()=> {
//     console.log("C");
// }, 0)

// O/P 
// A
// C
// B

// ---------------------------------------------------------------

// async function test() {
//     console.log("1");
//     await Promise.resolve();
//     console.log("2");
// }

// console.log("3");
// test();
// console.log("4");

// O/p
// 3
// 1
// 4
// 2

// -------------------------------------------------------------------

// setTimeout(() => console.log(1), 0);

// Promise.resolve()
//  .then(() => console.log(2))
//  .then(() => console.log(3));

// console.log(4);

// O/P 
// 4
// 2
// 3
// 1

// -------------------------------------------------------------------

console.log(1);

setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => console.log(3));
}, 0)

Promise.resolve().then(() => {
    console.log(4);
    setTimeout(() => console.log(5), 0)
})

queueMicrotask(() => console.log(6));
console.log(7);

// O/P 
1
7
4
6
2
3
5
