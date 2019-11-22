const date = new Date();
const dateTag = document.querySelector(".js-date");

function getDate() {
  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   const dateText = date.getDate();
  //   dateTag.innerText = `${year}. ${month}. ${dateText}`;

  const dateString = date.toLocaleDateString();
  dateTag.innerText = `${dateString}`;
  dateTag.style.fontSize = "24px";
  dateTag.style.fontWeight = "700";
}

function init() {
  getDate();
}

init();
