// let outputScreen = document.querySelector(".calculator-input");
// const numberKeys = document.querySelectorAll(".numbers")
// const clearButton = document.getElementById("clear")

// numberKeys.forEach(element =>{
//   element.addEventListener("click", () => {
//     outputScreen.value += element.innerHTML
//   })
// })

// function calculate() {
//   try {
//     outputScreen.value = eval(outputScreen.value);
//   } catch (err) {
//     alert("Invalid");
//   }
// }

// function clearInput() {
//   console.log("Being called")
//   outputScreen.value = "";
// }

// function del() {
//   outputScreen.value = outputScreen.value.slice(0, -1);
// }
let outputScreen = document.querySelector(".calculator-input");
const numberKeys = document.querySelectorAll(".numbers");
const clearButton = document.getElementById("clear");
const symbols = document.querySelectorAll(".symbols");
const equalButton = document.querySelector(".equal");
const bracket = document.querySelectorAll(".bracket");
const deleteButton = document.getElementById("delete");

numberKeys.forEach((element) => {
  element.addEventListener("click", () => {
    outputScreen.value += element.innerHTML;
  });
});

clearButton.addEventListener("click", () => {
  outputScreen.value = "";
});

symbols.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    outputScreen.value += symbol.innerHTML;
  });
});
equalButton.addEventListener("click", () => {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
});
bracket.forEach((bracketButton) => {
  bracketButton.addEventListener("click", () => {
    outputScreen.value += bracketButton.innerHTML;
  });
});

deleteButton.addEventListener("click", () => {
  outputScreen.value = outputScreen.value.slice(0, -1);
});
