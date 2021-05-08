const defaultResult = 0;
let currentResult = defaultResult;
let logDescription = [];
let enteredNumber;

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

function add() {
  performOperation("ADD");
}

function subtract() {
  performOperation("SUBTRACT");
}

function multiply() {
  performOperation("MULTIPLY");
}

function divide() {
  performOperation("DIVIDE");
}

function performOperation(operationType) {
  enteredNumber = getEnteredNumber();
  const initialNumber = currentResult;
  let mathOperator;
  let calcDesc;

  if (operationType == "ADD") {
    mathOperator = "+";
    currentResult = currentResult + enteredNumber;
  } else if (operationType == "SUBTRACT") {
    mathOperator = "-";
    currentResult = currentResult - enteredNumber;
  } else if (operationType == "MULTIPLY") {
    mathOperator = "*";
    currentResult = currentResult * enteredNumber;
  } else {
    mathOperator = "/";
    currentResult = currentResult / enteredNumber;
  }

  calcDesc = logOutput(mathOperator, initialNumber, enteredNumber);
  outputResult(currentResult, calcDesc);
  logEntryAsObject(operationType, initialNumber, enteredNumber, currentResult);
}

function logOutput(mathOperator, currentResult, enteredNumber) {
  return (desc = `${currentResult} ${mathOperator} ${enteredNumber}`);
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", subtract);

multiplyBtn.addEventListener("click", multiply);

divideBtn.addEventListener("click", divide);
