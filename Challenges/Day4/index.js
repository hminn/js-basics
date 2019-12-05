const body = document.querySelector("body");

function createTitle() {
  const title = document.createElement("h2");
  title.innerText = "Hello!";
  title.style.color = "white";
  body.insertBefore(title, body.firstChild);
  coloringBody();
}

function coloringBody() {
  if (body.offsetWidth >= 1400) {
    body.style.backgroundColor = "red";
  } else if (body.offsetWidth >= 750) {
    body.style.backgroundColor = "skyblue";
  } else {
    body.style.backgroundColor = "purple";
  }
}

function resizeChecking() {
  window.addEventListener("resize", coloringBody);
}

function init() {
  createTitle();
  resizeChecking();
}

init();
