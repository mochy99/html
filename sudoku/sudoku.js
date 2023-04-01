// DECLARE VARIABLES AND CONSTANTS
const board = [
    5,3,4,6,7,8,9,1,2,
    6,7,2,1,9,5,3,4,8,
    1,9,8,3,4,2,5,6,7,
    8,5,9,7,6,1,4,2,3,
    4,2,6,8,5,3,7,9,1,
    7,1,3,9,2,4,8,5,6,
    9,6,1,5,3,7,2,8,4,
    2,8,7,4,1,9,6,3,5,
    3,4,5,2,8,6,1,7,9
];
let sudoku;
let initialBoard;
let currentBoard;
let randomIndex = [];
let timerEl = document.getElementById("timer");
let startEl = document.getElementById("startGame");
let hintEl = document.getElementById("hintbtn");
let numberEl = document.getElementById("number");
let tableEl = document.getElementById("table");
let entryEl = document.getElementById("entry");
let cellEl = document.getElementsByClassName("cell");
let fixedCellEl = document.getElementsByClassName("fixedCell");
let submitEl = document.getElementById("submit");
let value = "";
let index = "";
// ---------------------------------------------------------------

// FUNCTION FOR BUTTONS
// function START game button
startEl.addEventListener("click", startbtn);
function startbtn () {
    sudoku = board.slice(0);
    console.log(board.length);
    console.log(sudoku.length);
    // clear the board
    clearEl ();
    //push number generated randomly
    randomIndex = Array.of();
    randomIndex = randomList();
    initialBoard = Array.of();

    generateInitialBoard();
    console.log(board.length);
    console.log(sudoku.length);
    // refresh the number of hint
    numberEl.innerHTML = 3;
    //function timer
}

//function HINT button
hintEl.addEventListener("click", hint);
function hint (){
    if (Number(numberEl.innerHTML) !== 0){
        let list = generateArray();
        let index = list.findIndex((element) => element =="");
        cellEl[index].innerText = sudoku[index];
        numberEl.innerHTML -= 1;
    } else {
        alert("You used all hints!");
    }
    console.log(board.length);
    console.log(sudoku.length);
}

// function SUBMIT button
submitEl.addEventListener("click", check);
let i = 0;
let acc = true;
function check (){
    let list = generateArray();
    listNumber = Array.from(list, x => Number(x));

    if ( listNumber.every(checkFill)){
        if (match(sudoku,listNumber)){
            alert("You win!");
        } else {
            alert("You lose!");
        }
        clearEl ();
    } else {
        alert("You need to fill all the blanks!");
    }
    // check filled board?
    function checkFill(element) {
        return element > 0 && element < 10;
    }

}
// --------------------------------------------------------

//EVENT FROM PLAYER
// function get value in entry row
entryEl.addEventListener("click", getValue);
function getValue (event){
    value = event.target.innerText;
}

// function fill a number in the blank
tableEl.addEventListener("click", fillBlank);
function fillBlank (eve) {
    let cell = eve.target;
    nameCell = cell.getAttribute("class");
    if (nameCell === "cell"){
        if ( cell.innerText === "" && value === ""){
            alert("Please click the value in the last row that you want to insert!");
        }  else if (cell.innerText !== "" && value === "" ) {
            cell.innerText = "";
            cell.style.backgroundColor = "white";
            if (!match(initialBoard,currentArray())){
                generateInitialBoard();
            }
        } else if (value !== "") {
            cell.innerText = value;
            cell.style.backgroundColor = "seashell";
            if (!match(initialBoard,currentArray())){
                generateInitialBoard();
            }
        } 
        value = "";
    } else {
        alert("Choose the cell you want to fill!"); 
    }    

}
// --------------------------------------------------------

// HELPER FUNCTIONS
// function match 2 array
function match (array1, array2){
    if (array1.length == 0 && array2.length == 0 ){
        return true;
    } else {
        if (array1[0] == (array2[0])){
            array1.shift();
            array2.shift();
            return match (array1, array2);      
        } else {
            return false;
        }
    }
}

// function random a list
function randomList () {
    for (i=0; i < 50; i++) {
        let lambda = Math.floor(Math.random ()* 81);
        if (!randomIndex.includes(lambda)){
            randomIndex.push(lambda);
        }
    }
    return randomIndex.sort();
}

//function generate the array from randomIndex
function generateInitialBoard (){
    randomIndex.forEach((element) => {
        cellEl[element].innerText = sudoku[element];
        cellEl[element].style.backgroundColor = "lightsteelblue";
        value = sudoku[element];
        initialBoard.push(value);
    });
}

// function generate the whole board
function generateArray (){
    let checkList = Array.of();
    for (let i = 0; i<81; i++) {
        value = cellEl[i].innerText;
        checkList.push(value);
    }
    return checkList;
}

// generate the current board
function currentArray (){
    currentBoard = Array.of();
    randomIndex.forEach((element) => {
        value = cellEl[element].innerText;
        currentBoard.push(value);
    });
    return currentBoard;
}


// function clear the board
function clearEl (){
    for (let i = 0; i<81; i++){
        if (cellEl.innerText !== ""){
            cellEl[i].innerText = "";
            cellEl[i].style.backgroundColor = "white";
        }
    }
}

// function timer


