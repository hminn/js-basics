const title = document.querySelector("#title");
const btn = document.querySelector(".btn");
console.log(btn);
const CLICKED_BTN_CLASS = "btn-clicked";
const CLICKED_CLASS = "clicked";

function btnClick() {
  const hasClass = btn.classList.contains(CLICKED_BTN_CLASS);
  if (hasClass) {
    btn.classList.remove(CLICKED_BTN_CLASS);
  } else {
    btn.classList.add(CLICKED_BTN_CLASS);
  }
}

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  //   위의 코드를 toggle을 이용해 간단하게 표현할 수 있다.
  //   해당 클래스 안에 CLICKED_CLASS가 없다면 add / 있다면 remove 하는 함수
  // title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
  btn.addEventListener("click", btnClick);
}

init();
