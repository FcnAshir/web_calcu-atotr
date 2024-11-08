let display = document.getElementById("display");

function appendNumber(number) {
  if (display.value === "0") display.value = "";
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === "") return;
  const lastChar = display.value[display.value.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) return;
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value) || "0";
  } catch (error) {
    display.value = "Error";
  }
}
