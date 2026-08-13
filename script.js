// Calculation functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (b === 0 ? "Cannot divide by 0" : a / b);

function calculate(a, b, op) {
    if (op === "+") return add(a, b);
    if (op === "-") return sub(a, b);
    if (op === "*") return mul(a, b);
    if (op === "/") return div(a, b);
    return "Invalid";
}