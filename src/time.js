const time = document.querySelector("#time");
const day_now = document.querySelector("#day_now");

time.innerText = dayjs().format("h:mm A");
day_now.innerText = dayjs().format("dddd");

// set delay
setInterval(() => {
  time.innerText = dayjs().format("h:mm A");
  day_now.innerText = dayjs().format("dddd");

  time.innerText = dayjs().format("h:mm A");
  day_now.innerText = dayjs().format("dddd");
}, 1000);
