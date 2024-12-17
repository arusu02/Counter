document.addEventListener('DOMContentLoaded', () => {
  /**
   * @param {string} tagName - Il tipo di elemento 
   * @param {string} id - L'id dell'elemento
   * @param {string} className - La classe CSS dell'elemento
   * @param {string} innerHTML - Il contenuto HTML o testo dell'elemento
   * @returns {HTMLElement} - L'elemento creato
   */
  const createElement = (tagName, id = '', className = '', innerHTML = '') => {
    const element = document.createElement(tagName);
    if (id) element.id = id;
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
  };

  //contenitore principale
  const container = createElement('div', 'counter-container');
  const counterDisplay = createElement('div', 'counter', '', '0');

  //pulsanti + e -
  const btnContainer = createElement('div', 'btn-container');
  const btnDecrease = createElement('button', 'decrease', 'btn', '-');
  const btnIncrease = createElement('button', 'increase', 'btn', '+');

  //Reset in un contenitore separato
  const resetContainer = createElement('div', 'reset-container');
  const btnReset = createElement('button', 'reset', 'btn', 'Reset');

  //pulsanti al contenitore
  btnContainer.appendChild(btnDecrease);
  btnContainer.appendChild(btnIncrease);
  resetContainer.appendChild(btnReset);

  // Struttura finale del DOM
  container.appendChild(counterDisplay);
  container.appendChild(btnContainer);
  container.appendChild(resetContainer);
  document.body.appendChild(container);

  // contatore
  let counterValue = 0;

  // Event Delegation
  container.addEventListener('click', (event) => {
    const buttonId = event.target.id;

    switch (buttonId) {
      case 'increase':
        counterValue++;
        break;
      case 'decrease':
        counterValue--;
        break;
      case 'reset':
        counterValue = 0;
        break;
      default:
        return; 
    }

    // Aggiornamento del contatore e colore
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