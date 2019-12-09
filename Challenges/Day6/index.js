// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const COUNTRY_KEY = "country";
const select = document.querySelector(".selectBox");

function handleCountry() {
  const selected = select.value;
  localStorage.setItem(COUNTRY_KEY, selected);
}

function loadCountry() {
  const selected = localStorage.getItem(COUNTRY_KEY);
  if (selected) {
    const option = document.querySelector(`option[value=${selected}]`);
    option.selected = true;
  }
}

loadCountry();
select.addEventListener("change", handleCountry);

// function getCountry() {
//   const selectBox = document.querySelector(".selectBox");
//   const text = selectBox.options[selectBox.selectedIndex].text;
//   if (
//     localStorage.getItem(COUNTRY_KEY) !== text &&
//     text !== "--- Choose Your Country ---"
//   ) {
//     localStorage.setItem(COUNTRY_KEY, text);
//   }
// }
// function init() {
//   getCountry();
// }

// init();
