const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");

const currentDisplay = document.getElementById("current-display");
const previousDisplay = document.getElementById("previous-display");

const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");


let currentNumber = "";
let previousNumber = "";
let operation = null;


// number buttons
numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        const number = button.dataset.number;
        // more that 1 decimal point not allowed
        if (number === "." && currentNumber.includes(".")) {
            return;
        }
        currentNumber += number;
        updateDisplay();
    });

});


// OPERATOR BUTTONS
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        // operation not allowed unless an operation is used
        if (currentNumber === "") {
            return;
        }
        previousNumber = currentNumber;
        operation = button.dataset.operation;
        currentNumber = "";
        updateDisplay();
    });

});


// equal button
equalsButton.addEventListener("click", () => {
    if (currentNumber === "" || previousNumber === "" || operation === null) {
        return;
    }
    calculate();
    updateDisplay();

});

// calculate
function calculate() {

    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result;

    switch (operation) {
        case "+":
            result = previous + current;
            break;

        case "-":
            result = previous - current;
            break;

        case "*":
            result = previous * current;
            break;

        case "/":

            if (current === 0) {
                currentNumber = "Error";
                previousNumber = "";
                operation = null;
                return;
            }

            result = previous / current;
            break;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operation = null;
}


// clear button
clearButton.addEventListener("click", () => {
    currentNumber = "";
    previousNumber = "";
    operation = null;
    updateDisplay();

});


// delete
deleteButton.addEventListener("click", () => {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();

});


// update display
function updateDisplay() {
    currentDisplay.textContent = currentNumber || "0";
    if (previousNumber !== "" && operation !== null) {
        previousDisplay.textContent =
            `${previousNumber} ${getOperationSymbol(operation)}`;

    } else {
        previousDisplay.textContent = "";
    }
}


// display operator symbol
function getOperationSymbol(operation) {

    switch (operation) {
        case "+":
            return "+";
        case "-":
            return "−";
        case "*":
            return "×";
        case "/":
            return "÷";
        default:
            return "";
    }

}