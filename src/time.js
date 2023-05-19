const time = document.querySelector("#time");
const day_now = document.querySelector("#day_now");
const date_now = document.querySelector("#date_now");

time.innerText = dayjs().format("h:mm A");
day_now.innerText = dayjs().format("dddd");
date_now.innerText = dayjs().format("MMM D, YYYY");

// set delay
setInterval(() => {
  time.innerText = dayjs().format("h:mm A");
  day_now.innerText = dayjs().format("dddd");

  time.innerText = dayjs().format("h:mm A");
  day_now.innerText = dayjs().format("dddd");
}, 1000);
