let date = new Date();
console.log(date);
// console.log(typeof date);

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.getFullYear());
// console.log(date.getMonth()); // 0 based index Jan -> 0
// console.log(date.getDate()); 
// console.log(`Date is ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)

// let myDate = new Date("11-32-2025") //MM-DD-YYYY
// console.log(myDate); //Invalid Date

// console.log(Date.now()); //Time in milliseconds from the epoch 1st Jan 1970

const start = Date.now();
//long code which takes time to execute
// for(let i=0; i<2000000; i++) {

// }
console.log(`Time elapsed: ${Date.now() - start} ms`);