let sudoku = new Array(81);
sudoku.unshift(5,3,4,6,7,8,9,1,2,
    6,7,2,1,9,5,3,4,8,
    1,9,8,3,4,2,5,6,7,
    8,5,9,7,6,1,4,2,3,
    4,2,6,8,5,3,7,9,1,
    7,1,3,9,2,4,8,5,6,
    9,6,1,5,3,7,2,8,4,
    2,8,7,4,1,9,6,3,5,
    3,4,5,2,8,6,1,7,9);
let arrayLength = sudoku.length;
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

// function start game button
startEl.addEventListener("click", startbtn);
function startbtn () {
   for (let i = 0; i<cellEl.length; i++) {
        if (cellEl.innerText !== ""){
            cellEl[i].innerText = "";
            cellEl[i].style.backgroundColor = "white";
        }
       };
    //push number generated randomly
    randomIndex = Array.of();
    randomIndex = randomList();

    randomIndex.forEach((element) => {
        cellEl[element].innerText = sudoku[element];
       });
    // resent the number of hint
    numberEl.innerHTML = 3;
    //function timer
}

//function hint button
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
}
// function submit button
submitEl.addEventListener("click", check);
let i = 0;
let acc = true;
function check (){
    let list = generateArray();

    if ( list.every(checkFill)){
        if (match(sudoku, list, 0)){
            alert("You win!");
        } else {
            alert("You lose!");
        }
    } else {
        alert("You need to fill all the blanks!");
    }
    function checkFill(element) {
        return element > 0 && element < 10;
      }
}
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
    if (cell.getElementsByClassName)
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

// function match 2 array
function match (array1, array2, acc){
    if (Array.isArray(array1) && Array.isArray(array2) ){
        if (array1[0] == Number(array2[0])){
            acc = true; 
            newArray1 = array1.pop();
            newArray2 = array2.pop();
            return match (newArray1, newArray2, acc);      
        } else {
            return acc = false;
        }
    } else {
        return acc;
    }    
}
let ar1 = [1,92];
ar1 = ar1.pop();
console.log(ar1);
let ar2 = [1,6];
console.log(match (ar1, ar2, acc));


// function random a list
function randomList () {
    for (i=0; i < 40; i++) {
        let lambda = Math.floor(Math.random ()* 81);
        if (!randomIndex.includes(lambda)){
            randomIndex.push(lambda);
        }
    }
    return randomIndex.sort();
}
// function generate the array of cell
function generateArray (){
    let checkList = Array.of();
    for (let i = 0; i<cellEl.length; i++) {
        value = cellEl[i].innerText;
        checkList.push(value);
    }
    return checkList;
}


