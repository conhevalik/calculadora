const previousOpetationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator {
    constructor(previousOpetationText, currentOperationText) {
        this.previousOpetationText = previousOpetationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
}

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >=0 || value ==="."){
            console.log(value);
        } else {
            console.log("op: " +value);
        }

    });
});