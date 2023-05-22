const time = document.querySelector("#time");
const day_now = document.querySelector("#day_now");
const date_now = document.querySelector("#date_now");
const am_pm = document.querySelector("#am-pm");

time.innerText = dayjs().format("h:mm");
am_pm.innerText = dayjs().format("A");

day_now.innerText = dayjs().format("dddd");
date_now.innerText = dayjs().format("MMM DD");

// set delay
setInterval(() => {
  time.innerText = dayjs().format("h:mm");
  am_pm.innerText = dayjs().format("A");
  day_now.innerText = dayjs().format("dddd");
  day_now.innerText = dayjs().format("dddd");
}, 1000);
