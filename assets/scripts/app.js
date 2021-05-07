const defaultResult = 0;
let currentResult = defaultResult;
let logDescription = [];

function getEnteredNumber() {
  return parseInt(userInput.value);
}

function logEntryAsObject(operationName, prevNumber, newNumber, result) {
  const logEntryAsObject = {
    operation: operationName,
    prevNumber: prevNumber,
    newNumber: newNumber,
    result: result,
  };
  logDescription.push(logEntryAsObject);
  console.log(logDescription);
}

function add(num1, num2) {
  enteredNumber = getEnteredNumber();
  const initialNumber = currentResult;
  const calcDesc = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDesc);
  logEntryAsObject("ADD", initialNumber, enteredNumber, currentResult);
}

function subtract(num1, num2) {
  enteredNumber = getEnteredNumber();
  const initialNumber = currentResult;
  const calcDesc = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calcDesc);
  logEntryAsObject("SUBTRACT", initialNumber, enteredNumber, currentResult);
}

function multiply(num1, num2) {
  enteredNumber = getEnteredNumber();
  const initialNumber = currentResult;
  const calcDesc = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, calcDesc);
  logEntryAsObject("MULTIPLY", initialNumber, enteredNumber, currentResult);
}

function divide(num1, num2) {
  enteredNumber = getEnteredNumber();
  const initialNumber = currentResult;
  const calcDesc = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / enteredNumber;
  outputResult(currentResult, calcDesc);
  logEntryAsObject("DIVIDE", initialNumber, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", subtract);

multiplyBtn.addEventListener("click", multiply);

divideBtn.addEventListener("click", divide);
