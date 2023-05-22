// days came from the avail.js (these are the values inside the avail-button)
// const days = document.querySelectorAll(".avail-button");
const save = document.querySelector(".save");
save.disabled = false;
const url = "http://127.0.0.1:4000/api";

// create an empty array to store the data

// get the days
const now = dayjs().format("ddd, MMM D, YYYY");
const monday = getDay(now, 1);
const sunday = getDay(now, 7);

let vdata = [];

days.forEach((day) => {
  console.log(day.innerText);
});

// append the new week's data to the preview week data
save.addEventListener("click", () => {
  const dataToPush = [];
  dataToPush.push(monday, sunday);
  days.forEach((day) => {
    dataToPush.push(day.innerText);
    day.disabled = true;
  });
  fetch(url).then((res) => {
    res.json().then((data) => {
      if (data[data.length - 1][0] === monday) {
        data.pop();
        data.push(dataToPush);
        vdata = data;
      } else {
        data.push(dataToPush);
        vdata = data;
      }
    });
  });
  save.disabled = true;
});

window.onbeforeunload = function () {
  if (vdata.length > 0) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(vdata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  }
};

// auxiliar functions

function getDay(now, setDay = 0) {
  let day = dayjs(now).day(setDay).format("MMM D, YYYY");
  return day;
}
