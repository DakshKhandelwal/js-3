// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// console.log(x());
// const z = x();
// console.log(z);

// z();

// Closure: It is a function bind togther with its lexical environment

// function x() {
//     var a = 7;
//     var b = 45;
//     function y() {
//         // let b = 5;
//         console.log(a);
//         console.log(b);
//     }
//     a = 100;
//     b = 200;
//     return y;
// }

// const z = x();
// z();


function z() {
    var b = 100;
    function x() {
        var a = 200;
        function y() {
            console.log(a, b);
        }
        a = 2000;
        return y;
    }
    b = 1000;
    return x;
}

let p = z();
console.log(p);

let q = p();
console.log(q);

q();
