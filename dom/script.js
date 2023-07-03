const decrementbtn = document.getElementById("dec");
const incrementbtn = document.getElementById("inc");
const resetbutton = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");

decrementbtn.addEventListener("click",() => {
    const value = Number(displayvalue.innerText);
    if (value > 0){
        displayvalue.innerText = value - 1;
    } else {
        alert("Negative value not allowed")
    }
});

incrementbtn.addEventListener("click",() => {
    const value = Number(displayvalue.innerText);
    if (value >=10) {
        alert("10+ values are not allowed");
    } else {
        displayvalue.innerText = value + 1;
    }
});

resetbutton.addEventListener("click",() => {
    displayvalue.innerText = 0;
});
