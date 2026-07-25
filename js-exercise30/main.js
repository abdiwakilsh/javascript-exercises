function operate(a, b, callback) {
    return callback(a, b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

console.log("Multiplication:", operate(5, 3, multiply)); 
console.log("Division:", operate(6, 3, divide)); 
console.log("Division by zero:", operate(5, 0, divide)); 