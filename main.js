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
  file.download = "Cv_enrike_dev.pdf";
  file.click();
});

/*CONSUMIR FORMULARIO*/
const btn = document.querySelector(".btn-enviar");

document
  .querySelector(".formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = "enrike".toUpperCase();
    emailjs.init("qgxNZ2ApPchAyh1UK");
    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_cuf9ntu";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Email Enviado";
        alert("Enviado!");
        document.getElementById("name-complete").value = "";
        document.getElementById("email-request").value = "";
        document.getElementById("asunto").value = "";
        //form.reset();
      },
      (err) => {
        btn.value = "Email Enviado";
        alert(JSON.stringify(err));
      }
    );
  });
