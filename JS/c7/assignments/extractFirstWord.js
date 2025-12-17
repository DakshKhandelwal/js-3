function firstWord(s) {
 let str = s.trim();
 let words = str.split(" ");
//  console.log(words);
 return words[0];
}

console.log(firstWord(""));