const body = document.querySelector("body");
const inputSubmit = document.querySelector(".input-submit");
const inputNumber = document.querySelector(".input-number");
const outputNumber = document.querySelector(".output-num");

function writingNumber(num) {
  outputNumber.innerText = num.value;
  limitNumber(num.value);
}

function limitNumber(num) {
  inputNumber.max = num;
}

function showingGame() {
  const newValue = inputNumber.value;
  if (newValue !== "") {
    const span = document.querySelector(".game-box span");
    var randomNumber = Math.floor(
      Math.random() * (parseInt(outputNumber.innerText) + 1)
    );
    span.innerText = `You chose: ${newValue}, the machine chose: ${randomNumber}`;
    showingResult(parseInt(newValue), randomNumber);
  }
}

function showingResult(you, machine) {
  const resultSpan = document.querySelector(".result-box span");
  if (you !== machine) {
    resultSpan.innerText = "You lost!";
  } else {
    resultSpan.innerText = "You won!";
  }
}

function init() {
  inputSubmit.addEventListener("click", showingGame);
}

init();
