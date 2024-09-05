//funzione quando checcki la check-box fa illuminare il tasto
const checkBox = document.getElementById("checkboxId");
const btn = document.getElementById("proceedBtn");
const checked = document.querySelector(".container input");
const btnHover = document.querySelector(".illuminated");
const diffBtn = document.getElementById("difficultyBtn");
const beginnerBtn = document.getElementById("beginner");
const intermediateBtn = document.getElementById("intermediate");
const advancedBtn = document.getElementById("advanced");
const exitBtn = document.querySelector(".fa-times");
const confirmBtn = document.getElementById("confirm");

//funzionamento bottoni delle varie difficoltà

let difficulty = "easy";

localStorage.setItem("difficulty", difficulty);

diffBtn.addEventListener("click", function () {
  const popup = document.querySelector(".pupup-container");
  popup.style.display = "block";
});

exitBtn.addEventListener("click", function (difficulty) {
  const popup = document.querySelector(".pupup-container");
  popup.style.display = "none";
  beginnerBtn.classList.remove("illuminated-violet");
  intermediateBtn.classList.remove("illuminated-violet");
  advancedBtn.classList.remove("illuminated-violet");
  difficulty = "easy";
  localStorage.removeItem("difficulty");
  localStorage.setItem("difficulty", difficulty);
});

confirmBtn.addEventListener("click", function () {
  const popup = document.querySelector(".pupup-container");
  popup.style.display = "none";
});

beginnerBtn.addEventListener("click", function (difficulty) {
  beginnerBtn.classList.add("illuminated-violet");
  if (beginnerBtn.classList.contains("illuminated-violet")) {
    intermediateBtn.classList.remove("illuminated-violet");
    advancedBtn.classList.remove("illuminated-violet");
  }
  difficulty = "easy";
  localStorage.removeItem("difficulty");
  localStorage.setItem("difficulty", difficulty);
});

intermediateBtn.addEventListener("click", function (difficulty) {
  intermediateBtn.classList.add("illuminated-violet");
  if (intermediateBtn.classList.contains("illuminated-violet")) {
    beginnerBtn.classList.remove("illuminated-violet");
    advancedBtn.classList.remove("illuminated-violet");
  }
  difficulty = "medium";
  localStorage.removeItem("difficulty");
  localStorage.setItem("difficulty", difficulty);
});

advancedBtn.addEventListener("click", function (difficulty) {
  advancedBtn.classList.add("illuminated-violet");
  if (advancedBtn.classList.contains("illuminated-violet")) {
    beginnerBtn.classList.remove("illuminated-violet");
    intermediateBtn.classList.remove("illuminated-violet");
  }
  difficulty = "hard";
  localStorage.removeItem("difficulty");
  localStorage.setItem("difficulty", difficulty);
});

//funzione quando checcki la check-box fa illuminare il tasto

function updateButtonState() {
  if (checkBox.checked) {
    btn.classList.add("illuminated");
  } else {
    btn.classList.remove("illuminated");
  }
}

checkBox.addEventListener("change", updateButtonState);

//funzione che collega il bottone(onclick) per cambiare pagina
console.log(localStorage);
function nextPage() {
  btn.addEventListener("click", function () {
    window.location.href = "paginadiprova.html";
    if (btn.classList.contains("illuminated")) {
      window.location.href = "paginadiprova.html";
    }
  });
}
nextPage();
window.onload = () => {
  updateButtonState();
};
