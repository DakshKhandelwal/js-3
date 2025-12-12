//Arrays 

// const emptyArray = [];
// const marks = [20, 30, 40, 50, 60]; //0-based index
// console.log(marks);
// console.log(typeof marks); //object

// console.log(marks.length);
// console.log(marks[0]); //firstElement
// console.log(marks[marks.length - 1]); //lastElement
// console.log(marks[-1]); //undefined
// console.log(marks[100]); //undefined

// for(let i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

// for-of 
// for(const item of marks) {
//     console.log(item);
// }

// const strArr = Array("Hello", "World", "Arrays");
// console.log(strArr);

// Properties and Methods/Function of Array 
// console.log(strArr.length);

// Methods in Array 
// 1) Mutating Methods (modify the original array)

// strArr.push("Strings", "Objects", "Numbers"); //O(1) (It adds element to the end)
// console.log(strArr);

// strArr.pop(); //O(1) (It removes the last element)
// console.log(strArr);

// strArr.unshift("New Datatype", "My Data"); //O(n) (It adds element to the start)
// console.log(strArr);

// strArr.shift(); //O(n) (It removes the first element)
// console.log(strArr);

// const months = ["March", "Jan", "Feb", "Dec"];
// console.log(months);
// months.sort();
// console.log(months);

// const newArr = [0, 10, 3, 2, 100, -200, 400, 0, -6, 5];
// console.log(newArr);
// // newArr.sort();
// // console.log(newArr);

// newArr.sort(function (a, b) {
//     return b - a;
// })

// console.log(newArr);


// 2) Non-mutating methods (returns a new array)

// const myArr = [0, 1, 2, 3, 4, 5];

// const updatedArr = myArr.slice(1, 5) //[1, 5) => [1, 4]
// console.log(updatedArr);

// console.log(myArr.slice(-2, -4));

// In slice menthod if we pass -ve index it starts to count from the end starting -1, -2 in reverse
// -5 -4 -3 -2 -1   //index for -ve numbers
// [6, 7, 8, 9, 10]
//  0, 1, 2, 3, 4  //0-based index (index for +ve numbers)

// const newArr = [6, 7, 8, 9, 10];
// // console.log(newArr.slice(-3, -1)); //[]
// // console.log(newArr);

// const myArr = ["Ram", "Shyam", "Dhyanshayam", "Balram"];
// console.log(myArr);
// const mergedArray = newArr.concat(myArr);
// console.log(mergedArray);

//splice method
// const newArr = [0, 1, 2, 3, 4, 5];
//                -6 -5 -4 -3 -2 -1
// console.log("Our original array", newArr);

// const myArr = newArr.splice(-5, 3);
// console.log("Splice array", myArr);
// console.log("Original Array", newArr);

// 3) ES2023 immutable methods: These methods are newer non-mutative alternative to older mutative methods

// const strArr = ["March", "Jan", "Feb", "Dec"];
// console.log(strArr);
// const newArr = strArr.toSorted();
// console.log(newArr);
// console.log(strArr);


// toReversed()
// toSplice() 
// const reversedArr = strArr.toReversed();
// console.log(reversedArr);
// console.log(strArr);

// 4) Search Methods (return a value not array)

// const strArr = ["March", "Jan", "Feb", "Dec"];
// console.log(strArr);

// const index = strArr.indexOf("jan");
// console.log(index);

// const exist = strArr.includes("Feb");
// console.log(exist);

// find();

// 5) Iterative Methods (do not return a new array)

// forEach() 
// map()
// filter()
// reduce()

// Some More Examples 
// flat()

// const randomArray = [1, 2, [3, 4, 5], 6, [7, 8], 9, [4, 5, [11, 12]]];
// const newArr = randomArray.flat(2);
// const newArr = randomArray.flat(Infinity);
// console.log(newArr);

// const heroes = ["thor", "batman", "hulk"];
// const indianHeroes = ["shaktiman", "krrish"];
// const comicHeroes = ["spiderman", "superman"]

// const allHeroes = heroes.concat(indianHeroes);
// We can use concat to merge only 2 arrays
// spread operator (...)

// const allHeroes = [...heroes, ...indianHeroes, ...comicHeroes];
// console.log(allHeroes);

// const newArr = ["Rohit", "Virat"];
// console.log(Array.isArray(newArr));
console.log(Array.from("Narendra Sharma")); //array of character
console.log(Array.from({name: "Nitin"})); //[]
console.log(Array.of(100, 200, 300));

