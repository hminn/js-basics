const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const ORIGIN_ICON = "far fa-square";
const NEW_ICON = "far fa-check-square";

let toDos = [];

function createTextLine(icon) {
  const span = icon.nextElementSibling;
  span.style.textDecoration = "line-through";
}

function deleteTextLine(icon) {
  const span = icon.nextElementSibling;
  span.style.textDecoration = "";
}

function changeIcon(event) {
  const icon = event.target;
  if (icon.className === ORIGIN_ICON) {
    icon.className = NEW_ICON;
    createTextLine(icon);
  } else {
    icon.className = ORIGIN_ICON;
    deleteTextLine(icon);
  }
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const icon = document.createElement("i");
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  icon.classList = "far fa-square";
  icon.addEventListener("click", changeIcon);
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  li.appendChild(icon);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
