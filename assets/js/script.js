const counter = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById("reset")

// Sezione per l'azione del bottone
increaseButton.addEventListener('click', increment);
decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', resetbtn);

// settiamo il valore del count 0 - punto di partenza
let counterValue = 0;

/*
counter = 0 black
counter > 0 green
counter < 0 red
*/ 
function updateCounter() {
  counter.textContent = counterValue;

  if (counterValue > 0) {
    counter.style.color = "green"
  } else if (counterValue < 0) {
    counter.style.color = "red"
  } else {
    counter.style.color = "black"
  }
}

// Funzione per aumentare il counter
function increment() {
  counterValue++;

  updateCounter();
}

// funzione per diminuire il counter
function decrease() {
  counterValue--;

  updateCounter();
}

// funzione per resettare il counter
function resetbtn() {
  counterValue = 0;

  updateCounter();
} 

