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

// DOM Elements
const aE1 = document.getElementById("a");
const bE1 = document.getElementById("b");
const op = document.getElementById("op");
const resultVal = document.getElementById("result-val");
const goBtn = document.getElementById("go");
const clearBtn = document.getElementById("clear");
const historyList = document.getElementById("historyList");

let hasHistory = false;

// Add to history list
function addToHistory(expression, result) {
    if (!hasHistory) {
        historyList.innerHTML = ""; // Remove empty message
        hasHistory = true;
    }
    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li); // Add new history at top
}

// Calculate logic
goBtn.addEventListener("click", () => {
    const valA = aE1.value.trim();
    const valB = bE1.value.trim();

    // Input Validation
    if (valA === "" || valB === "") {
        resultVal.textContent = "Please enter both numbers";
        resultVal.style.color = "#ef4444";
        return;
    }

    const a = Number(valA);
    const b = Number(valB);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        resultVal.textContent = "Invalid Numbers";
        resultVal.style.color = "#ef4444";
        return;
    }

    const result = calculate(a, b, op.value);

    // Format operator for display
    let opSymbol = op.value;
    if (opSymbol === "*") opSymbol = "×";
    if (opSymbol === "/") opSymbol = "÷";

    resultVal.style.color = "#1e293b";
    resultVal.textContent = result;

    // Save to history if valid calculation
    if (typeof result === "number") {
        addToHistory(`${a} ${opSymbol} ${b}`, result);
    }
});

// Reset logic
clearBtn.addEventListener("click", () => {
    aE1.value = "";
    bE1.value = "";
    op.value = "+";
    resultVal.textContent = "0";
    resultVal.style.color = "#1e293b";
});

console.log("QuickCalc loaded successfully");