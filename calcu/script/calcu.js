
let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function displayCalculation() {
  document.querySelector('.js-display').innerHTML = calculation;
}

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}
