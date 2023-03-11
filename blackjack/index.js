const deck = [
    { value: 'Ace', score: 11 },
    { value: 'Two', score: 2 },
    { value: 'Three', score: 3 },
    { value: 'Four', score: 4 },
    { value: 'Five', score: 5 },
    { value: 'Six', score: 6 },
    { value: 'Seven', score: 7 },
    { value: 'Eight', score: 8 },
    { value: 'Nine', score: 9 },
    { value: 'Ten', score: 10 },
    { value: 'Jack', score: 10 },
    { value: 'Queen', score: 10 },
    { value: 'King', score: 10 }
  ];
  const suits = [
    { properties: 'Hearts', score: 4 },
    { properties: 'Diamond', score: 3 },
    { properties: 'Clubs', score: 2 },
    { properties: 'spades', score: 1 }
  ];
let drawncards = [];
let messageid = document.getElementById ("message");
let cardsid = document.getElementById("cards");
let sumid = document.getElementById("sumresult");
let sum = 0;

// function for drawing card
function drawdeck (){
    return deck[Math.floor(Math.random() *12)];
}   
// function for drawing suits
function drawsuits (){
    return suits[Math.floor(Math.random() *3)];
}



// function for start button -> draw randomly 2 cards
document.getElementById("start-btn").addEventListener("click", start);
function start () {
    let drawncards = [];
    drawncards = [
        {deck: drawdeck(), suit: drawsuits()},
        {deck: drawdeck(), suit: drawsuits()}
    ];
    function sumcard () {
        sum = drawncards[0].deck.score + drawncards[1].deck.score;
        return sum;
    }
    sum = sumcard ();

    if (sum < 21) {
        messageid.innerText = "Do you want to draw a new card?";
    } else if (sum === 21) {
        messageid.innerText = "Woohoo! You've got the blackjack!";
    } else {
        messageid.innerText = "You've been out of the game!";
    };
    // function render the card
    function render (i) {
        let name = "";
        name = drawncards[i].deck.value + "-" + drawncards[i].suit.properties;
        return name;
        }
    
    cardsid.innerText = "Cards: " + render(0) + ", " + render(1);
    sumid.textContent = sum;
    return drawncards;
}
console.log (drawncards);

// function for add acrd button -> draw randomly 1 cards
document.getElementById("new-btn").addEventListener("click", newcard);
function newcard (){
    drawncards = [
        {deck: drawdeck(), suit: drawsuits()}
    ];
    // function render the card
    function render (i) {
        let name = "";
        name = drawncards[i].deck.value + "-" + drawncards[i].suit.properties;
        return name;
        }
    cardsid.innerText += ", " + render(0);
    sum = parseInt(sumid.innerText) + drawncards[0].deck.score;
    sumid.textContent = sum;
    if (sum < 21) {
        messageid.innerText = "Do you want to draw a new card?";
    } else if (sum === 21) {
        messageid.innerText = "Woohoo! You've got the blackjack!";
    } else {
        messageid.innerText = "You've been out of the game!";
    };
}



    


