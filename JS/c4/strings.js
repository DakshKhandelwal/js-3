//Strings 

// let str1 = "Javascript";
// let str2 = 'Javascript';
// console.log(str1, str2);

// let str3 = new String("myString");
// console.log(str3);

// console.log(str3[0]);
// console.log(str3[1]);
// console.log(str3[str3.length - 1]);

// Properties and Methods for strings 
// console.log(str3.length);

// Methods in String 
// String is immutable in JS (all methods will return a new string, they will never modify original string)

let str4 = new String("Nitin/Kumar");
console.log(str4);
// String Methods 
// console.log(str4.trim())
console.log(str4.charAt(2)); //returns value at that index
console.log(str4.charCodeAt(1)); //returns ascii code for that char
console.log(str4.indexOf('i')); //returns first matching char and if not matched returns -1
console.log(str4.toUpperCase()); 
console.log(str4.toLowerCase()); 
console.log(str4.split("/")); //returns an array based on the split value
console.log(str4.slice(1, 3)); //[1, 2] returns the removed string
console.log(str4.substring(-2,5)); //[1, 2] returns the removed string


// Template Literals in JS 
// String Interpolation 
// let x = 5;
// let a = 3;
// let str5 = `This is a string interpolation ${x} ${a} ${str4}`;
// console.log(str5);

// let newString = `This is called as template literal ${1+2+3}`;
// console.log(newString);
// console.log(typeof newString);

// Escape Characters (\n,\t)
let str6 = "Rohit\nSharma";
console.log(str6);
console.log(str6.length); // \n or \t -> counted as length 1
