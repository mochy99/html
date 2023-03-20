let sudoku = new Array(81);
sudoku.unshift(5,3,4,6,7,8,9,1,2,
    6,7,2,1,9,5,3,4,8,
    1,9,8,3,4,2,5,6,7,
    8,5,8,7,6,1,4,2,3,
    4,2,6,8,5,3,7,9,1,
    7,1,3,9,2,4,8,5,6,
    9,6,1,5,3,7,2,8,4,
    2,8,7,4,1,9,6,3,5,
    3,4,5,2,8,6,1,7,9);
let arrayLength = sudoku.length;
let randomIndex = [];
let timerEl = document.getElementById("timer");
let startEl = document.getElementById("startGame");
let hintEl = document.getElementById("hint");
let tableEl = document.getElementById("table");
let entryEl = document.getElementById("entry");
let cellEl = document.getElementsByClassName("cell");
let submitEl = document.getElementById("submit");
let value = "";
let index = "";


// function get value in entry row
entryEl.addEventListener("click", getValue);
function getValue (event){
    value = event.target.innerText;
}
// function generate the valid board
// function fill a number in the blank
tableEl.addEventListener("click", fillBlank);
function fillBlank (eve) {
    let cell = eve.target;
     if ( cell.innerText === "" && value === ""){
        alert("Please click the value in the last row that you want to insert!");
    } else if (cell.innerText !== "" && value === "" ) {
        cell.innerText = "";
        cell.style.backgroundColor = "white";
    } else if (value !== "") {
        cell.innerText = value;
        cell.style.backgroundColor = "grey";
    } 
    value = "";
    
}

// function start game button
startEl.addEventListener("click", startbtn);
function startbtn () {
    // randomly a list
    //push number generated randomly
    randomIndex.forEach((element) => {
        cellEl[element].innerText = sudoku[element];
       });
    //function timer
    
}
// function submit button
submitEl.addEventListener("click", check);
let i = 0;
let acc = true;
function check (){
    if (match(sudoku, cellEl, 0, true)){
        alert("You win!");
    } else {
        alert("You lose!")
    }
}

function match (sudoku, cellEl, i, acc){
    if (i <= arrayLength){
        if (sudoku[i] == cellEl[i].innerText){
            i ++;
            return match (sudoku, cellEl, i, acc);    
        } else {
            acc = false;
        }
    }
    
    return acc;
}


// function random a list
function randomList () {
    for (i=0; i < 25; i++) {
        let lambda = Math.floor(Math.random ()* 81);
        if (!randomIndex.includes(lambda)){
            randomIndex.push(lambda);
        }
    }
    return randomIndex.sort();
}
randomIndex = randomList();





// function timer


  




