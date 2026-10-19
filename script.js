
function addValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var exp = document.getElementById("display").value;
    var result = 0;
    var operator = "";

    if (exp == "") return;

    if (exp.includes("+")) operator = "+";
    else if (exp.includes("-")) operator = "-";
    else if (exp.includes("*")) operator = "*";
    else if (exp.includes("/")) operator = "/";

    if (operator == "") return;

    var numbers = exp.split(operator);
    var a = Number(numbers[0]);
    var b = Number(numbers[1]);

    if (operator == "+") result = a + b;
    else if (operator == "-") result = a - b;
    else if (operator == "*") result = a * b;
    else if (operator == "/") {
        if (b == 0) {
            document.getElementById("display").value = "Error";
            return;
        }
        result = a / b;
    }

    document.getElementById("display").value = result;
}
