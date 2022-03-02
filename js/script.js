let outputScreen = document.querySelector(".calculator-input");
// const numberKeys = document.querySelectorAll(".numbers")

function display(num) {
  outputScreen.value += num;
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
}

function clear() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
