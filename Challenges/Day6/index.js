// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const COUNTRY_KEY = "country";

function getCountry() {
  const selectBox = document.querySelector(".selectBox");
  const text = selectBox.options[selectBox.selectedIndex].text;
  if (
    localStorage.getItem(COUNTRY_KEY) !== text &&
    text !== "--- Choose Your Country ---"
  ) {
    localStorage.setItem(COUNTRY_KEY, text);
  }
}
function init() {
  getCountry();
}

init();
