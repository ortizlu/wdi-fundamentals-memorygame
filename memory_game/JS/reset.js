var item = document.querySelector("button");
 
var timerID;
var counter = 0;

var pressHoldEvent = new CustomEvent("pressHold");

// Increase or decreae value to adjust how long
// one should keep pressing down before the pressHold
// event fires
var pressHoldDuration = 20;

// Listening for the mouse and touch events
item.addEventListener("mousedown", pressingDown, false);
item.addEventListener("mouseup", notPressingDown, false);
// item.addEventListener("mouseleave", notPressingDown, false);

item.addEventListener("touchstart", pressingDown, false);
item.addEventListener("touchend", notPressingDown, false);

// Listening for our custom pressHold event
item.addEventListener("pressHold", doSomething, false);

function pressingDown(e) {
  // Start the timer
  requestAnimationFrame(timer);

  e.preventDefault();

  console.log("Resetting cards!");
  resetBoard();
}

function notPressingDown(e) {
  // Stop the timer
  cancelAnimationFrame(timerID);
  counter = 0;
}

//
// Runs at 60fps when you are pressing down
//
function timer() {

  if (counter < pressHoldDuration) {
    timerID = requestAnimationFrame(timer);
    counter++;
  } else {
    item.dispatchEvent(pressHoldEvent);
  }
}

function doSomething(e) {
  console.log("resetting score");
  score = 0;
  currentScore.textContent = score;
}