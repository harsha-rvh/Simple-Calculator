let result = document.getElementById('result');
let equation = '';

function insertNumber(number) {
  if (equation === '0') {
    equation = '';
  }
  equation += number;
  result.innerHTML = equation;
}

function insertOperator(operator) {
  if (equation === '' || equation.endsWith('+') || equation.endsWith('-') || equation.endsWith('*') || equation.endsWith('/')) {
    return;
  }
  equation += operator;
  result.innerHTML = equation;
}

function insertDecimal() {
  if (equation === '' || equation.endsWith('+') || equation.endsWith('-') || equation.endsWith('*') || equation.endsWith('/')) {
    equation += '0.';
  } else if (!equation.includes('.')) {
    equation += '.';
  }
  result.innerHTML = equation;
}

function toggleSign() {
  if (equation === '') {
    return;
  }
  if (equation.startsWith('-')) {
    equation = equation.substring(1);
  } else {
    equation = '-' + equation;
  }
  result.innerHTML = equation;
}

function clearResult() {
  equation = '';
  result.innerHTML = '0';
}
function backspace() {
  equation = equation.slice(0, -1);
  result.innerHTML = equation;
}

function calculateResult() {
  if (equation === '' || equation.endsWith('+') || equation.endsWith('-') || equation.endsWith('*') || equation.endsWith('/')) {
    return;
  }
  let resultValue = eval(equation);
  resultValue = parseFloat(resultValue.toFixed(2));
  equation = resultValue.toString();
  result.innerHTML = equation;
}


