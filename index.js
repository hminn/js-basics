const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if (hasClass) {
  //     title.classList.remove(CLICKED_CLASS);
  //   } else {
  //     title.classList.add(CLICKED_CLASS);
  //   }
  //   위의 코드를 toggle을 이용해 간단하게 표현할 수 있다.
  //   해당 클래스 안에 CLICKED_CLASS가 없다면 add / 있다면 remove 하는 함수
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
