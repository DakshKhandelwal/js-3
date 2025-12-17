function indexOfIgnoreCase(s1, s2) {
  if(s1.length < s2.length) {
    return -1;
  }

  return s1.toLowerCase().indexOf(s2.toLowerCase()); 
}

// console.log(indexOfIgnoreCase("apple", "ple"));
console.log(indexOfIgnoreCase("Hello World", "world"));
// console.log(indexOfIgnoreCase("test", "aaa"));