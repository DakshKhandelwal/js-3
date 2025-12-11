//Operations
// 1) Arithmetic Operator: (+, -, *, /, %, **, ++, --)
// let a = 5;
// let b = 2;

// console.log("a+b=", a+b);
// console.log("a-b=", a-b);
// console.log("a*b=", a*b);
// console.log("a/b=", a/b);
// console.log("a%b=", a%b);
// console.log("a**b=", a**b);

// let c = a--; 
// let d = ++b;
// console.log(a, c);
// console.log(b, d);

// 2) Assignment Operator: (=, +=, -=, *=, /=, %=, **=)
// let a = 5;
// let b = 2;

// a += 4; // a = a + 4;
// a -= 4; // a = a - 4;
// a *= 4; // a = a * 4;
// a /= 4; // a = a / 4;
// a %= 4; // a = a % 4;
// a **= 4; // a = a ** 4;

// 3) Comparison Operator: (>, <, >=, <=, ==, !=, ===, !==) (retuns boolean values)
// let a = 5;
// let b = "5";

// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);

// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);

// == (Checks the value)
// != (Checks the value)
// === (Checks both type and value)
// !== (Checks both type and value)

// 4) Logical Operator (&&, ||, !)
// let a = 6;
// let b = 5;

// let cond1 = a < b;  //false
// let cond2 = a === 6; //true

// console.log(cond1 || cond2); // Logical OR (even if one condition is true it returns true)
// console.log(cond1 && cond2); // Logical AND (even if one condition is false it returns false)

// console.log(!(a<b));

// 5) Terniary Operator
// condition ? if true: else 

// let a = 1;
// let b = 2;

// let condition = a > b ? console.log("a is greater") : console.log("b is greater");


// -----------------------------------------------------------------------------------
// User Input 
let num = prompt("Enter a number");
console.log(num);