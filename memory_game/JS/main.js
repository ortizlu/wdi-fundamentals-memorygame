var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];
var score = 0;

//reset
var btn = document.querySelector("button");
btn.addEventListener('click', function() {
  resetBoard();
});

//set score in title
//get span tag
var currentScore = document.querySelector('span');
//set the score to score
currentScore.textContent = score;

function flipCard() {
  //this refers to the cardElement inside createBoard that calls flipCard.
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if(cardsInPlay.length === 2) {
    checkForMatch();
  }
};

function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("data-id", i);
    cardElement.setAttribute("src", "images/back.png");
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

function resetBoard() {
  cardsInPlay = [];
  //get cards from board
  var cards = document.querySelectorAll('img');
  //loop through cards
  for(var i = 0; i < cards.length; i++) {
    //change the image to be the back again
    cards[i].setAttribute('src', 'images/back.png');
  }
}

function checkForMatch() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    score++;
    currentScore.textContent = score;
  } else {
    alert("Sorry, try again");
  }
}

createBoard();
