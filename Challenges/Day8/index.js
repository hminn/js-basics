// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
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
  const li = btn.parentNode;
  if (li.parentNode.className === "js-pList") {
    // pendingList.removeChild(li);
    // const cleanTask = pending.filter(function(toDo) {
    //   return toDo.id !== parseInt(li.id);
    // });
    // pending = cleanTask;
    // savePending();
    deleteTask(event);

    finishedList.appendChild(li);
    const span = li.children[1];
    const finishedObj = {
      text: span.textContent,
      id: finished.length + 1
    };
    finished.push(finishedObj);
    savefinished();
  } else {
  }
  console.log(li);
  console.dir(li);
}

function deleteTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanTask = pending.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pending = cleanTask;
  savePending();
}

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}
function savefinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function paintTask(text, where) {
  const icon = document.createElement("i");
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const moveBtn = document.createElement("button");
  const span = document.createElement("span");

  icon.classList = UNDO_ICON;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTask);
  moveBtn.innerText = "✅";
  moveBtn.addEventListener("click", moveTask);
  span.innerText = text;

  li.appendChild(icon);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(moveBtn);

  if (where === "pending") {
    li.id = pending.length + 1;
    pendingList.appendChild(li);

    const pendingObj = {
      text: text,
      id: li.id
    };
    pending.push(pendingObj);
    savePending();
  } else {
    finishedList.appendChild(li);
    li.id = finished.length + 1;
    const finishedObj = {
      text: text,
      id: finished.length + 1
    };
    finished.push(finishedObj);
    savefinished();
  }
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
      paintTask(task.text, "");
    });
  }
}

function init() {
  loadPending();
  loadFinished();
  taskForm.addEventListener("submit", handleSubmit);
}

init();
