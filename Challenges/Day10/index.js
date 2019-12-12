const inputSubmit = document.querySelector(".input-submit");
const inputNumber = document.querySelector(".input-number");
const outputNumber = document.querySelector(".output-num");
const inputRange = document.querySelector(".input-range");

function writingNumber(event) {
  const target = event.target;
  outputNumber.innerText = target.value;
  limitNumber(target.value);
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
    resultSpan.innerText = "😫 You lost! 😫";
  } else {
    resultSpan.innerText = "🥰 You won! 🥰";
  }
}

function init() {
  inputRange.addEventListener("input", writingNumber);
  inputSubmit.addEventListener("click", showingGame);
}

init();
