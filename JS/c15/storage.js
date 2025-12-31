// Local Storage, Session Storage, Cookies

// Local Storage: It can store upto 5MB data. Data is stored in browser,
// even if you refresh your page or if we close the tab or browser.

// console.log(localStorage);

// CRUD operation for localStorage 

// Create 
// localStorage.setItem("username", "john wick");
// localStorage.setItem("movie", "dhurandhar");
// localStorage.setItem("event", "Happy New Year");
// localStorage.setItem("car", "bmw");

//Read 
// console.log(localStorage.getItem("username"));
// console.log(localStorage.getItem("car"));

// Update 
// localStorage.setItem("car", "audi");
// console.log(localStorage.getItem("car"));

//Delete
// localStorage.removeItem("movie");

// localStorage.clear();
// console.log(localStorage);

// const user = { isLoggedIn: false};
// localStorage.setItem("loginDetails", user); //user is not a string
// console.log(localStorage.getItem("loginDetails")); //[object Object]

// localStorage.setItem("loginDetails", JSON.stringify(user)); //converted object to string
// console.log(localStorage.getItem("loginDetails")); 

// let userDetails = localStorage.getItem("loginDetails");

// console.log(JSON.parse(userDetails)); //we are converting string back to an object
// console.log(JSON.parse(userDetails).isLoggedIn);

// -----------------------------------------------------------------------

// Session Storage: It also stores data upto 5MB. It stores data for a particular session/tab.
// If you close the tab or change the tab data is lost. 

// sessionStorage.setItem("animal", "tiger");
// sessionStorage.setItem("sports", "cricket");

// console.log(sessionStorage.getItem("sports"));

// sessionStorage.removeItem("animal");
// sessionStorage.clear();

// --------------------------------------------------------------------------

// Cookies: It can store data upto 4KB of data.

// document.cookie = "key=value; expire='time'";

// document.cookie = "username=johnwick007";
// document.cookie = "username=johnwick007; expires='Fri 31 Dec 2026 23:59:00 GMT';";
// document.cookie = "username=johnwick007; expires='31 Dec 2024 23:59:00 GMT';"; //not stored b/c time has already expired

// User will be able to access the Storage API's (localStorage, sessionStorage, cookies)
// only if they have same origin
 
// Same Origin 
// 1) Protocol (http/https)
// 2) host/domain (flipkart.com or localhost)
// 3) port (8080 or 3000)