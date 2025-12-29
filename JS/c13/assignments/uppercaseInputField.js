let input = document.querySelector("#fname");
// console.log(input);
// console.dir(input);

input.addEventListener("blur", (e) => {
    // console.log(e.target.value);
    // console.log(typeof e.target.value);
    // console.log(e.target.value.toUpperCase());
    e.target.value = e.target.value.toUpperCase();
})