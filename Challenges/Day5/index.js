// You're gonna need this
const NINE_HOURS_MILLIdate = 32400000;

const clock = document.querySelector(".js-clock");
const clockText = clock.childNodes[1];

function concatZero(obj) {
  if (obj < 10) {
    return `0${obj}`;
  } else {
    return obj;
  }
}

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  //   console.log(xmasDay);
  const date = new Date();

  //   console.log(xmasDay - date);
  //   console.log(date(xmasDay - date));
  const lastDay = xmasDay.getDate() - date.getDate() - 1;
  const lastHours = 24 - date.getHours();
  const lastMinutes = 60 - date.getMinutes();
  const lastSeconds = 60 - date.getSeconds();

  clockText.innerText = `${concatZero(lastDay)}days ${concatZero(
    lastHours
  )}hours ${concatZero(lastMinutes)}minutes ${concatZero(lastSeconds)}seconds`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
