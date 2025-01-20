document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Agregar la clase si el elemento entra al viewport
    if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
      section.classList.add("visible");
    } else {
      // Quitar la clase si el elemento sale del viewport
      section.classList.remove("visible");
    }
  });
});

// BOTON CV
const cv = document.getElementById("cv");

cv.addEventListener("click", () => {
  const file = document.createElement("a");
  file.href = "./file/Cv_enrike_dev.pdf";
  file.download = "CV_enrike_dev.pdf";
  file.click();
});
