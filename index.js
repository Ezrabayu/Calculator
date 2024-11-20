const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        const lastChar = display.value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            return; 
        }

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
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1); 
}
