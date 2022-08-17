const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function getDate() {
  const date = new Date();
  const hourDegree = date.getHours() /12 * 360;
  const minuteDegree = date.getMinutes() / 60 * 360;
  const secondDegree = date.getSeconds() / 60 * 360;

  hour.style.transform = `rotate(${hourDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  second.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(getDate, 1000);