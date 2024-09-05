let wrongAnswers = parseInt(localStorage.getItem("wrongAnswers"));
let correctAnswers = parseInt(localStorage.getItem("correctAnswers"));
let sumAnswers = wrongAnswers + correctAnswers;
let numWrongQuestions = document.querySelector(".wrong > .questions");
let numCorrectQuestions = document.querySelector(".correct > .questions");
let percCorrect = document.querySelector(".correct > .perc");
let percWrong = document.querySelector(".wrong > .perc");
numWrongQuestions.innerText = wrongAnswers + "/" + sumAnswers + " " + numWrongQuestions.innerText;
numCorrectQuestions.innerText = correctAnswers + "/" + sumAnswers + " " + numCorrectQuestions.innerText;
let perCorr = (100 * correctAnswers) / sumAnswers;
let perWr = (100 * wrongAnswers) / sumAnswers;
percCorrect.innerText = perCorr.toFixed(1) + "%";
percWrong.innerText = perWr.toFixed(1) + "%";
let donut = document.getElementById("dash");
console.log(donut);
donut.setAttribute("stroke-dasharray", `${perWr.toFixed(1)}, ${perCorr.toFixed(1)}`);
if (perCorr.toFixed() < 60) {
  let title = document.getElementById("congratsSorry");
  title.innerText = "Sorry!";
  let cyanTitle = document.getElementById("pass");
  cyanTitle.innerText = "You didn't pass the exam";
  let p = document.querySelector(".text > p");
  p.innerText = "Try again when you are more prepared";
}

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  window.location.href = "feedback.html";
});
