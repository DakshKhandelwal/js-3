function stringChop(str, size) {
   let chunks = [];
   for(let i=0; i<str.length; i = i + size) {
      let subStr = str.slice(i, i+size);
    //   console.log(subStr);
      chunks.push(subStr);
   }
   return chunks;
}

// console.log(stringChop("12345", 2));
console.log(stringChop("Hello, world!", 5));