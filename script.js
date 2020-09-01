const table = document.getElementsByTagName('table')[0];
const addRowBtn = document.getElementById('add-row');
const selector = document.getElementsByTagName('select')[0];
let pickColor = 'red';

const makeRow = dataQ => {
  const tRow = document.createElement('tr');

  for (let i = 0; i < dataQ; i++) {
    const tData = document.createElement('td');
    tRow.appendChild(tData);
  }
  table.appendChild(tRow);
};

const colorize = (evt, color) => {
  // event.target.matches('td') evt.target.tagName === 'TD'
  if (evt.target.tagName === 'TD') evt.target.classList.toggle(color);
};

addRowBtn.addEventListener('click', () => makeRow(10));
selector.addEventListener('change', event => (pickColor = event.target.value));
table.addEventListener('click', event => colorize(event, pickColor));
