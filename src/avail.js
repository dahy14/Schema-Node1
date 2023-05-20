const days = document.querySelectorAll(".avail-btn");

days.forEach((day) => {
  day.addEventListener("click", () => {
    if (day.innerText === "busy") {
      day.innerText = "available";
    } else {
      day.innerText = "busy";
    }
  });
});
