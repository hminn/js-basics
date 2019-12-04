// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const html = document.querySelector("html"),
  body = document.querySelector("body"),
  text = body.children[0];

function hoverText() {
  text.addEventListener("mouseover", function() {
    text.style.color = colors[0];
    text.innerText = "The mouse is here!";
  });
}

function leaveText() {
  text.addEventListener("mouseleave", function() {
    text.style.color = colors[1];
    text.innerText = "The mouse is gone!";
  });
}

function rightClickHtml() {
  html.addEventListener("contextmenu", function() {
    text.style.color = colors[4];
    text.innerText = "That was a right click!";
  });
}

function resizeWindow() {
  window.addEventListener("resize", function() {
    text.style.color = colors[2];
    text.innerText = "You just resized!";
  });
}

const superEventHandler = {
  hoverText: hoverText(),
  leaveText: leaveText(),
  rightClick: rightClickHtml(),
  resizeWindow: resizeWindow()
};

function init() {
  superEventHandler.hoverText;
  superEventHandler.leaveText;
  superEventHandler.rightClickHtml;
  superEventHandler.resizeWindow;
}

init();
