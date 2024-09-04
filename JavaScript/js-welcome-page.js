//funzione quando checcki la check-box fa illuminare il tasto

const checkBox = document.getElementById("checkboxId");
const btn = document.getElementById("proceedBtn");
const checked = document.querySelector(".container input");
const btnHover = document.querySelector(".illuminated");

function updateButtonState() {
  if (checkBox.checked) {
    btn.classList.add("illuminated");
  } else {
    btn.classList.remove("illuminated");
  }
}

checkBox.addEventListener("change", updateButtonState);

//funzione che collega il bottone(onclick) per cambiare pagina

function nextPage() {
  btn.addEventListener("click", function () {
    window.location.href = "paginadiprova.html";
  });
}
nextPage();
window.onload = () => {
  updateButtonState();
};
