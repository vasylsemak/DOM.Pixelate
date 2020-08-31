const table = document.getElementsByTagName('table')[0];
const addRowBtn = document.getElementById('add-row');
const selector = document.getElementsByTagName('select')[0];

// console.log('HHH', selector);

const makeRow = dataQ => {
  const tRow = document.createElement('tr');
  for (let i = 0; i < dataQ; i++) {
    const tData = document.createElement('td');
    tRow.appendChild(tData);
  }
  table.appendChild(tRow);
};

const colorize = (evt, color) => evt.target.classList.toggle(color);

addRowBtn.addEventListener('click', () => makeRow(10));
table.addEventListener('click', event => colorize(event, 'red'));
selector.addEventListener('change', event => {
  console.log(event.target);
});

// makeRow(20);
// makeRow(20);
