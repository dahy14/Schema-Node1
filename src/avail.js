const days = document.querySelectorAll(".avail-btn");

days.forEach((day) => {
  day.addEventListener("click", () => {
    if (day.innerText === "not available") {
      day.innerText = "available";
    } else {
      day.innerText = "not available";
    }
  });
});
