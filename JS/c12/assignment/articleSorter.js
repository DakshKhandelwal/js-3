const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// const sortedArray = bands.sort();

const sortedArray = bands.sort((a, b) => {
    //If I remove a, an, the from this a, b inside this function and then compare them
    const nameA = a.replace(/^(a |an |the)/i, "").trim().toLowerCase();
    const nameB = b.replace(/^(a |an |the)/i, "").trim().toLowerCase();
    return nameA.localeCompare(nameB);
})

let list = document.querySelector("#band");
// console.log(list);

sortedArray.forEach((item) => {
    // console.log(item);
    let li = document.createElement("li");
    li.innerText = item;
    list.append(li);
})