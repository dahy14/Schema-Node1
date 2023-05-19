const options = {
  margin: 0.5,
  filename: "Availability.pdf", //name the output file
  image: {
    type: "jpeg", //image type
    quality: 100,
  },
  html2canvas: {
    scale: 4,
  },
  jsPDF: {
    unit: "in",
    format: "a7",
    orientation: "portrait", // pdf orientation
  },
};

const export_btn = document.querySelector(".export");

// export_btn.click(function (e) {
//   console.log("click from export");
//   const element = document.getElementById("availability"); //id for content area
//   html2pdf().from(element).set(options).save();
// });

export_btn.addEventListener("click", async (e) => {
  console.log("click from export");
  e.preventDefault();
  const element = await document.getElementById("availability"); //id for content area

  console.log(element);
  html2pdf().from(element).set(options).save();
});
