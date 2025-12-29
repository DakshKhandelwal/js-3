const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
console.log(circles);

let currentCircle = 0;

nextButton.addEventListener('click', () => {

    if(currentCircle < circles.length - 1) {
        currentCircle++;
        circles[currentCircle].classList.add('active');
    }

    // console.log(prevButton);
    // console.dir(prevButton);
    prevButton.disabled = false;

    if(currentCircle === circles.length - 1) {
        nextButton.disabled = true;
    }
})

prevButton.addEventListener('click', () => {
    if(currentCircle > 0) {
        circles[currentCircle].classList.remove('active');
        currentCircle--;

        if(currentCircle === 0) {
            prevButton.disabled = true;
            nextButton.disabled = false;
        }
    }
})
