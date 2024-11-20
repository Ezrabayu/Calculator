const display = document.getElementById("display");

function appendToDisplay(input) {
    // Prevent multiple consecutive operators
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        const lastChar = display.value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            return; // Ignore input if the last character is already an operator
        }

        // Prevent operator at the start of the input
        if (display.value === "" && (input === "+" || input === "-" || input === "*" || input === "/")) {
            return;
        }
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Safely evaluate the expression
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1); // Hapus karakter terakhir
}
