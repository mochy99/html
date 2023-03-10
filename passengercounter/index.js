function increment() {
    let count = document.getElementById("count-el").innerText;
    count = parseInt(count) + 1;
    document.getElementById("count-el").innerText = count;
  }
  
  document.getElementById("increment-btn").
  addEventListener("click", increment);

console.log(document.getElementById("return").innerText.length);
console.log(Boolean(document.getElementById("return").innerText == ""));

function save() {
    let store = document.getElementById("count-el").innerText;
    let previous = document.getElementById("return").innerText;
        if (previous == ""){
            document.getElementById("return").innerText = store;
        } else {
            document.getElementById("return").innerText = store + " , " + previous;
        }
}    
  document.getElementById("save-btn").
  addEventListener("click", save);

function reset (){
    document.getElementById("count-el").innerText = 0;
    document.getElementById("return").innerText = "";
}
document.getElementById("reset-btn").
addEventListener("click", reset);