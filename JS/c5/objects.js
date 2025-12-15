const emptyObj = {};
// console.log(emptyObj);

const obj = {
    user: "Virat",
    score: 105
}

// console.log(obj);
// console.log(typeof obj);
// console.log(obj.user); 
// console.log(obj.score);
// console.log(obj["user"]);
// console.log(obj["score"]);

// console.log(Object.keys(obj)); //array of keys
// console.log(Object.values(obj)); //array of values

// console.log(Object.keys(emptyObj)); //[]
// console.log(Object.values(emptyObj)); //[]

// if(emptyObj) { //{} => true value
//     console.log("Object is not empty");
// }
// else {
//     console.log("Object is empty")
// }

// if(Object.keys(emptyObj).length !==0 ) {
//     console.log("Object is not empty");
// }
// else {
//     console.log("Object is empty");
// }

let student = {
    user: {
        name: "Rohit"
    },
    age: 35,
    score: 103,
    "is Logged In": true
}

// console.log(student);
// console.log(student.age);
// console.log(student.user.name);
// console.log(student["user"]["name"]);
// console.log(student["age"]);
// // console.log(student.is Logged In);
// console.log(student["is Logged In"]);

// for(let key in student) {
//     console.log(key, student[key])
// }

// Object.freeze(student);

// student.id = 1;

//Insert key-value pair in Obj
// student.email = "abcd@gmail.com";

// console.log(student);
// student.greeting = function () {
//     console.log("Happy Monday!!");
// }

// console.log(student);
// console.log(student.greeting);
// console.log(student.greeting());

// Delete keys in Obj 

// delete student["is Logged In"];
// delete student.user;
// console.log(student);

// const user = {}
// user.id = 123;
// user.name = "Rohit";
// user.isLoggedIn = false;

// console.log(user);

// const obj1 = {
//     1: "first",
//     2: "second"
// }

// const obj2 = {
//     3: "third",
//     4: "fourth"
// }

// console.log(Object.keys(obj1));
// console.log(obj2);

// const obj3 = {...obj1, ...obj2}; //spread operator will create a shallow copy
// console.log(obj3);

// obj3["3"] = "third Modified";
// console.log(obj3);

// console.log(obj1);
// console.log(obj2);

// Shallow copy And Deep Copy 
const obj1 = {
    id1: 123,
    count1: 2,
    userName1: {
        first1: "Rohit",
        last1: "Sharma"
    }
}

const obj2 = {
    id2: 234,
    count2: 4,
    userName2: {
        first2: "Virat",
        last2: "Kohli"
    }
}

// const obj3 = {...obj1, ...obj2}; //Spread Operator (Shallow Copy)

// console.log(obj3);

// obj3.count1 = 1;
// console.log(obj3);

// console.log(obj1); //Original Obj is not modified (for normal key-value)

// obj3.userName1.first1 = "Rohit Modified";
// console.log(obj3);

// console.log(obj1); //Original Value is modified (for nested key-value pairs)


// Deep Copy 
// const obj3 = JSON.parse(JSON.stringify({...obj1, ...obj2}));
// // console.log(obj3);

// obj3.userName1.first1 = "Rohit Modified";
// console.log(obj3);

// console.log(obj1);

const user = [
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 2,
        email: "random@gmail.com"
    }
]

// console.log(user[1].email);

// for(let i=0; i<user.length; i++) {
//     let obj = user[i];
//     console.log(obj.email);
// }

// const user2 = {
//     months: ["Jan", "Feb", "Mar"],
//     days: ["Sun", "Mon", "Tue"]
// }

// console.log(user2.months.join(","));