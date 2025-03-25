let currentInput = '';
let operation = '';
let previousInput = '';

function appendDigit(digit) {
    currentInput += digit.toString();
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operation = '';
    previousInput = '';
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    previousInput = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}
