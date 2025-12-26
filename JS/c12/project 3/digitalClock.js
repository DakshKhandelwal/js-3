// let date = new Date();
// console.dir(date);

// console.log(date.toLocaleTimeString());


// setTimeout: Executes the callback function only once after given time
// setTimeout(() => {
//     console.log("Hello world");
//     //code will be executed after 3000 milliseconds = 3 seconds
// }, 3000) 

// // 3000 ms = 3 sec 

// // setInteval: It will execute the code after every interval given time
// setInterval(() => {
//     //code is executed after every 1000 millisecond = 1 second
// }, 1000)


let clock = document.querySelector("#clock");

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    console.log("Hello world", date);
}, 1000);

// setInterval(() => {
//     document.querySelector("#clock").innerHTML = new Date().toLocaleTimeString();
// }, 1000)

