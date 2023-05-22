const options = {
  margin: 0.5,
  filename: now, // Name the output file
  image: {
    type: "jpeg", // Image type
    quality: 1,
  },
  html2canvas: {
    scale: 4,
  },
  jsPDF: {
    unit: "px",
    format: [window.innerWidth, window.innerHeight],
    orientation: "landscape", // PDF orientation
  },
};

const export_btn = document.querySelector(".export");

export_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const element = await document.querySelector(".app"); //id for content area
  html2pdf().from(element).set(options).save();
});
