document.addEventListener('DOMContentLoaded', () => {
  // Creazione dinamica del DOM
  // con style CSS
  const container = document.createElement('div');
  container.id = 'counter-container';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.height = '95vh';

  const counterDisplay = document.createElement('span');
  counterDisplay.id = 'counter';
  counterDisplay.textContent = '0';
  counterDisplay.style.fontSize = '8rem';

  const btnContainer = document.createElement('div');
  btnContainer.className = 'container-btn';
  btnContainer.style.display = 'flex';
  btnContainer.style.gap = '10px';

  const decreaseButton = document.createElement('button');
  decreaseButton.id = 'decrease';
  decreaseButton.textContent = '-';
  decreaseButton.className = 'btn btn-decrease';

  const increaseButton = document.createElement('button');
  increaseButton.id = 'increase';
  increaseButton.textContent = '+';
  increaseButton.className = 'btn btn-increase';

  const resetButton = document.createElement('button');
  resetButton.id = 'reset';
  resetButton.textContent = 'Reset';
  resetButton.className = 'btn btn-reset';

  // Append degli elementi al DOM
  btnContainer.appendChild(decreaseButton);
  btnContainer.appendChild(increaseButton);
  container.appendChild(counterDisplay);
  container.appendChild(btnContainer);
  container.appendChild(resetButton);
  document.body.appendChild(container);

  // Logica del contatore
  let counterValue = 0;

  function updateCounter() {
    counterDisplay.textContent = counterValue;

    if (counterValue > 0) {
      counterDisplay.style.color = 'green';
    } else if (counterValue < 0) {
      counterDisplay.style.color = 'red';
    } else {
      counterDisplay.style.color = 'black';
    }
  }

  function increment() {
    counterValue++;
    updateCounter();
  }

  function decrease() {
    counterValue--;
    updateCounter();
  }

  function resetCounter() {
    counterValue = 0;
    updateCounter();
  }

  // Event listeners
  increaseButton.addEventListener('click', increment);
  decreaseButton.addEventListener('click', decrease);
  resetButton.addEventListener('click', resetCounter);
});


