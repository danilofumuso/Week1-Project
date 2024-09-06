const myArray = localStorage.getItem("array");

const array = myArray ? JSON.parse(myArray) : [];

const usersAnswer = localStorage.getItem("answersChecked");
const answersChecked = usersAnswer ? JSON.parse(usersAnswer) : [];
console.log(answersChecked);
//cosi si riconverte la stringa nell'array

console.log(array);

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

const answersFb = document.getElementById("answers-feedback");

const getResult = function () {
  //dentro un for creiamo le p con le domande e le ul
  for (let j = 0; j < array.length; j++) {
    const totalAnswers = [array[j].correct_answer, ...array[j].incorrect_answers];
    const titleQuestion = document.createElement("p");
    const answersContainer = document.createElement("ul");
    titleQuestion.innerText = array[j].question;
    answersFb.appendChild(titleQuestion);
    answersFb.appendChild(answersContainer);
    for (let i = 0; i < totalAnswers.length; i++) {
      const answers = document.createElement("li");

      // .className = "";
      answers.innerText = totalAnswers[i];
      answersContainer.appendChild(answers);
    }

    // for (let i = 0; i < answersChecked.length; i++) {
    //   if (answersChecked[j] === totalAnswers[i]) {
    //     const usersAnswersIlluminated = document.querySelectorAll("li");
    //     usersAnswersIlluminated.style.color = "blue";
    //   }
    // }

    if (answersChecked[j] === totalAnswers[0]) {
      const giusta = answersContainer.firstElementChild;
      giusta.style.color = "green";
      console.log(answersChecked[j]);
    } else if (answersChecked[j] === totalAnswers[(1, 2, 3)]) {
      const coloraDiRosso = totalAnswers[(1, 2, 3)].innerText;
      coloraDiRosso.style.color = "red";
      // const sbagliate = Array.from(answersContainer.querySelectorAll("li"));
      // sbagliate.shift();
      // // sbagliate.forEach((sbagliata) => {})
      //   sbagliata.style.color = "red";

      console.log(answersChecked[j]);
    }
  }
};

window.onload = () => {
  getResult();
};

//creiamo la lista per le risposte
