const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  redo = document.querySelector(".js-redo");

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  SHOWING_CN_REDO = "showing-redo";

function clearName() {
  redo.addEventListener("click", function() {
    localStorage.removeItem(USER_LS);
    window.location.reload();
  });
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  redo.classList.add(SHOWING_CN_REDO);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}.`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  clearName();
}

init();
