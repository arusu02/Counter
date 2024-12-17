document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Creazione elementi
    const container = document.createElement('div');
    const counterDisplay = document.createElement('span');
    const btnContainer = document.createElement('div');
  
    // Stile al contenitore principale
    container.style.textAlign = 'center';
    container.style.marginTop = '20vh';
  
    // Valore del contatore
    let counterValue = 0;
  
    // Testo del contatore
    counterDisplay.textContent = counterValue;
    counterDisplay.style.fontSize = '5rem';
    counterDisplay.style.color = 'black';
  
    // Pulsanti
    btnContainer.innerHTML = `
      <button id="decrease">-</button>
      <button id="increase">+</button>
      <button id="reset">Reset</button>
    `;
  
    // Aggiunta al DOM
    container.appendChild(counterDisplay);
    container.appendChild(btnContainer);
    document.body.appendChild(container);
  
    // Gestione eventi con Event Delegation
    btnContainer.addEventListener('click', (event) => {
      const buttonId = event.target.id;
  
      if (buttonId === 'increase') {
        counterValue++;
      } else if (buttonId === 'decrease') {
        counterValue--;
      } else if (buttonId === 'reset') {
        counterValue = 0;
      }
  
      // Aggiorna il contatore e il colore
      counterDisplay.textContent = counterValue;
      if (counterValue > 0) {
        counterDisplay.style.color = 'green';
      } else if (counterValue < 0) {
        counterDisplay.style.color = 'red';
      } else {
        counterDisplay.style.color = 'black';
      }
    });
  });
});


