const API_KEY = "9b93bb93e46d7e12f2285b35595b9a0d";
const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // 객체의 key의 이름을 같게 저장할 때는 latitude : latitude 대신에 latitude를 써도 된다.
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // get Weather
  }
}
function init() {
  loadCoords();
}

init();
