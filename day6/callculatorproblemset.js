// Arithmetic operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero.";
    }
    return a / b;
}

// Function to get input from user
function getInput(promptMessage) {
    return prompt(promptMessage);
}

// Function to convert string to number
function convertToNumber(input) {
    return Number(input);
}

// Function to show type of variables
function showTypes(a, b) {
    alert("Before conversion:\n" +
          "Type of first input: " + typeof a + "\n" +
          "Type of second input: " + typeof b);
}

// Function to perform calculation
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid operator.";
    }
}

// Main function to run the calculator
function runCalculator() {
    let input1 = getInput("Enter the first number:");
    let input2 = getInput("Enter the second number:");

    showTypes(input1, input2);  // Show types before conversion

    let num1 = convertToNumber(input1);
    let num2 = convertToNumber(input2);

    let operator = getInput("Choose an operator: +, -, *, /");

    let result = calculate(num1, num2, operator);
    alert("Result: " + result);
}

// Run the calculator
runCalculator();
