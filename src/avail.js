const days = document.querySelectorAll(".avail-btn");
const prev_data = document.querySelectorAll(".prev-week-data");

prev_data.forEach((el) => {
  data = el.getAttribute("data");
  // console.log(data);
  const div_circle = el.childNodes[1];
  if (data === "busy") {
    div_circle.classList.add("red");
  } else {
    div_circle.classList.add("green");
  }
});

days.forEach((dayEl) => {
  dayEl.addEventListener("click", () => {
    firstChild = dayEl.firstElementChild;
    secondChild = dayEl.childNodes[3];
    if (firstChild.innerText === "busy") {
      dayEl.classList.remove("red");
      dayEl.classList.add("green");
      firstChild.innerText = "available";
      secondChild.classList.remove("red");
      secondChild.classList.add("green");
    } else {
      dayEl.classList.remove("green");
      dayEl.classList.add("red");

      firstChild.innerText = "busy";
      secondChild.classList.add("red");
      secondChild.classList.remove("green");
    }
  });
});
