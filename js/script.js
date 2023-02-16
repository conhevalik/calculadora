const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  // add digit to calculator screen
  addDigit(digit) {
    //check if current operation already has a dot 
    if(digit ==="." && this.currentOperationText.innerText.includes(".")) {
        return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  //
  processOperation(operation){
    console.log(operation);
  }
  

  // Change values of calculator screen
  updateScreen() {
    this.currentOperation.innerText += this.currentOperation;
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      console.log(value);
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
