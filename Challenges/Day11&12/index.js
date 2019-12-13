const divBoxes = document.querySelectorAll(".grid div");
const divWindow = divBoxes[0];
let leftValue = "";
let rightValue = "";
let operator = "";

function getValue(event) {
  const target = event.target;
  showNumber(target);
}

function clickEffect(event) {
  const target = event.target;
  target.classList.remove("click");
  target.offsetWidth = target.offsetWidth;
  target.classList.add("click");
}

function resetValue() {
  leftValue = "";
  rightValue = "";
  operator = "";
}

function calculateEval() {
  const evalValue = leftValue + operator + rightValue;
  const resultNumber = eval(evalValue);
  return resultNumber;
}

function moveToLeft() {
  leftValue = calculateEval();
  divWindow.innerText = leftValue;
  rightValue = "";
  operator = "";
}

function showNumber(target) {
  const inputValue = target.innerText;
  if (Number.isInteger(parseInt(inputValue, 10))) {
    if (operator === "") {
      leftValue += inputValue;
      const leftInt = parseInt(leftValue, 10);
      divWindow.innerText = leftInt;
    } else {
      rightValue += inputValue;
      const rightInt = parseInt(rightValue, 10);
      divWindow.innerText = rightInt;
    }
  } else {
    if (inputValue === "C") {
      divWindow.innerText = 0;
      resetValue();
    } else if (inputValue === "=") {
      moveToLeft();
      divWindow.innerText = leftValue;
    } else {
      if (operator === "") {
        operator = inputValue;
      } else {
        if (rightValue === "") {
          operator = inputValue;
        } else {
          moveToLeft();
          operator = inputValue;
        }
      }
    }
  }
}

function init() {
  divBoxes.forEach(function(divBox) {
    divBox.addEventListener("click", getValue);
    divBox.addEventListener("click", clickEffect);
  });
}

init();
