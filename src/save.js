// days came from the avail.js (these are the values inside the avail-button)
// const days = document.querySelectorAll(".avail-button");
const save = document.querySelector(".save");

const url = "http://127.0.0.1:4000/api";

// create an empty array to store the data
const dataToPush = [];

// get the days
const now = dayjs().format("ddd, MMM D, YYYY");
const monday = getDay(now, 1);
const sunday = getDay(now, 7);

// append the new week's data to the preview week data
save.addEventListener("click", () => {
  dataToPush.push(monday, sunday);
  days.forEach((day) => {
    dataToPush.push(day.innerText);
  });

  fetch(url).then((res) => {
    res.json().then((data) => {
      data.push(dataToPush);
      console.log(data);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then(console.log("New week updated", data));
    });
  });
});
// auxiliar functions

function getDay(now, setDay = 0) {
  let day = dayjs(now).day(setDay).format("MMM D, YYYY");
  return day;
}
