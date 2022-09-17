function start(){
  var buttonCalculate = document.querySelector('#button-calculate');
  buttonCalculate.addEventListener('click', handleButtonClick);
}

function calculate(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function handleButtonClick() {
  var inputFirst = document.querySelector('#input-first-number');
  var inputSecond = document.querySelector('#input-second-number');

  var calcResult = document.querySelector('#calculate-result');

  var first = Number(inputFirst.value);
  var second = Number(inputSecond.value);

  var calc = calculate(first, second);
  
  calcResult.textContent = calc;

}


start();