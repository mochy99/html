const sudoku = new Array(81);
let tableEl = document.getElementById("table");
let entryEl = document.getElementById("entry");
let value = "";

// function get value in entry row
entryEl.addEventListener("click", getValue);
function getValue (event){
    value = event.target.innerText;
}

// function fill a number in the blank
tableEl.addEventListener("click", fillBlank);
function fillBlank (eve) {
    let cell = eve.target;
    if (eve.target.innerText !== "" && eve.target.style.backgroundColor == "white") {
        alert("You cannot change this cell!")
    } else if ( eve.target.innerText === "" && value === ""){
        alert("Please click the value in the last row that you want to insert!");
    } else if (eve.target.innerText !== "" && value === "" ) {
        eve.target.innerText = "";
        eve.target.style.backgroundColor = "white";
    } else if (value !== "") {
        eve.target.innerText = value;
        eve.target.style.backgroundColor = "grey";
    } 
    value = "";

}



  




