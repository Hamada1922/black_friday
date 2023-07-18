let days_box = document.querySelector(".days");
let hours_box = document.querySelector(".hours");
let minutes_box = document.querySelector(".minutes");
let seconds_box = document.querySelector(".seconds");

let deadline = new Date("2/19/2024");
let inter = setInterval(() => {
  let now = new Date();
  let diff = deadline - now;
  let days = Math.floor(diff / (24 * 60 * 60 * 1000));
  days_box.textContent = days < 10 ? `0${days}` : days;
  let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  hours_box.textContent = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  minutes_box.textContent = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((diff % (60 * 1000)) / 1000);
  seconds_box.textContent = seconds < 10 ? `0${seconds}` : seconds;
  if (days <= 0) {
    clearInterval(inter);
  }
}, 1000);
