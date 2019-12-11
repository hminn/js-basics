// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const pendingList = document.querySelector(".js-pList"),
  finishedList = document.querySelector(".js-fList"),
  taskForm = document.querySelector(".js-form"),
  taskInput = taskForm.querySelector("input");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";
const UNDO_ICON = "far fa-meh";
const DONE_ICON = "far fa-laugh-squint";

let pending = [];
let finished = [];

function moveTask(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  const ulClassName = li.parentNode.className;
  if (ulClassName === "js-pList") {
    deleteTask(event);
    paintFinished(li);
  } else {
    deleteTask(event);
    paintPending(li);
  }
}

function removePending(li) {
  pendingList.removeChild(li);
  const cleanTask = pending.filter(function(toDo) {
    return toDo.id !== li.id;
  });
  pending = cleanTask;
}

function removeFinished(li) {
  finishedList.removeChild(li);
  const cleanTask = finished.filter(function(toDo) {
    return toDo.id !== li.id;
  });
  finished = cleanTask;
}

function deleteTask(event) {
  const where = event.target.parentNode.parentNode.parentNode.className;
  const btn = event.target;
  const li = btn.parentNode.parentNode;

  if (where === "js-pList") {
    removePending(li);
    savePending();
  } else {
    removeFinished(li);
    saveFinished();
  }
}

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}
function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function paintTask(text, where) {
  const icon = document.createElement("i");
  const li = document.createElement("li");
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  const moveBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTask);
  moveBtn.addEventListener("click", moveTask);
  span.innerText = text;

  div.appendChild(delBtn);
  div.appendChild(moveBtn);

  li.appendChild(icon);
  li.appendChild(span);
  li.appendChild(div);
  console.log(li);

  if (where === "pending") {
    paintPending(li);
  } else {
    paintFinished(li);
  }
}

function paintPending(li) {
  li.children[2].children[1].innerText = "✔";
  li.children[0].className = UNDO_ICON;
  pendingList.appendChild(li);
  li.id = pending.length + 1;
  const text = li.children[1].textContent;
  const pendingObj = {
    text: text,
    id: li.id
  };
  pending.push(pendingObj);
  savePending();
}

function paintFinished(li) {
  li.children[2].children[1].innerText = "🔄";
  li.children[0].className = DONE_ICON;
  finishedList.appendChild(li);
  li.id = finished.length + 1;
  const text = li.children[1].textContent;
  const finishedObj = {
    text: text,
    id: li.id
  };
  finished.push(finishedObj);
  saveFinished();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintTask(currentValue, "pending");
  taskInput.value = "";
}

function loadPending() {
  const loadedTask = localStorage.getItem(PENDING_LS);
  if (loadedTask !== null) {
    const parsedTasks = JSON.parse(loadedTask);
    parsedTasks.forEach(function(task) {
      paintTask(task.text, "pending");
    });
  }
}

function loadFinished() {
  const loadedTask = localStorage.getItem(FINISHED_LS);
  if (loadedTask !== null) {
    const parsedTasks = JSON.parse(loadedTask);
    parsedTasks.forEach(function(task) {
      paintTask(task.text, "", null);
    });
  }
}

function init() {
  loadPending();
  loadFinished();
  taskForm.addEventListener("submit", handleSubmit);
}

init();
