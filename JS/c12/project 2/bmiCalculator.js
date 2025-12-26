const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    let remark = document.querySelector("#remark");

    // console.log(height, weight);

    if(height <= 0 || isNaN(height)) {
        // alert("Invalid height", height);
        result.innerHTML = `Please enter a valid height: ${height}`;
        result.style.color = "red";
    }
    else if(weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight: ${weight}`;
        result.style.color = "red";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // console.log(bmi);
        // console.log(typeof bmi);
        result.innerHTML = `<span> <b> ${bmi} </b> </span>`;

        if(bmi < 18) {
           remark.innerHTML = `<div> Underweight </div>`; 
        }
        else if( bmi > 24) {
           remark.innerHTML = `<div> Overweight </div>`
        }
        else {
            remark.innerHTML = `<div> Healthy </div>`
        }
    }

})