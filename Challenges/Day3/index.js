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
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  hoverText: hoverText(),
  leaveText: leaveText(),
  rightClick: rightClickHtml(),
  resizeWindow: resizeWindow()
};

function init() {
  superEventHandler.hoverText();
  superEventHandler.leaveText();
  superEventHandler.rightClickHtml();
  superEventHandler.resizeWindow();
}

init();
