const easy = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the &quot;MP&quot; stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "HTML is what type of language?",
    correct_answer: "Markup Language",
    incorrect_answers: ["Macro Language", "Programming Language", "Scripting Language"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True", "nessuna della 2", "entrambe"],
  },
];

let questionIndex = 0;
// let counterGiuste;
// let counterSabgliate;

const quiz = function (index) {
  const questions = document.getElementById("question");
  const buttonsDiv = document.querySelector("section>div");
  buttonsDiv.innerHTML = "";
  questions.innerText = easy[index].question;

  const questionNumber = document.getElementById("footer"); //serve a cambiare
  questionNumber.innerText = "QUESTION " + [index + 1];
  const span = document.createElement("span");
  span.className = "light-violet";
  span.innerText = " / 10";
  questionNumber.appendChild(span);

  const totalAnswers = [easy[index].correct_answer, ...easy[index].incorrect_answers];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }; //Fisher-Yates Sorting Algorithm

  const totalAnswersShuffled = shuffle(totalAnswers);

  for (let i = 0; i < totalAnswersShuffled.length; i++) {
    const button = document.createElement("button");
    button.className = "buttonHover";
    button.innerText = totalAnswersShuffled[i];
    buttonsDiv.appendChild(button);

    button.addEventListener("click", function () {
      if (questionIndex !== easy.length - 1) {
        questionIndex++;
        quiz(questionIndex);
      } else {
        console.log("passeremo ad un altra pagina");
        return;
      }
    });
  }
};
window.onload = () => {
  quiz(questionIndex);
};

// let counterIndiceDomande = 0;
// let counterGiuste = 0;
// let counterSabgliate = 0;

//
//   console.log(titoloDomanda);

//     btn.innerText = risposteTotali[i];

//     divDeiBottoni.appendChild(btn);
//     btn.addEventListener("click", function () {
//       if (counterIndiceDomande !== easy.length - 1) {
//         counterIndiceDomande++;
//         generaDomanda(counterIndiceDomande);
//       } else {
//         console.log("passeremo ad un altra pagina");
//         return; //?? andrà avanti con la pagina e non conterà più?
//       }
//       if (i === 0) {
//         counterGiuste++;
//         console.log("risposta corretta");
//       } else {
//         counterSabgliate++;
//         console.log("risposta errata");

//         {
//           //???????
//         }
//       }

//       console.log(counterGiuste);
//       console.log(counterSabgliate);
//     });
//     //domanda giusta o domanda sbagliata
//   }
// };

// window.onload = () => {
//   generaDomanda(counterIndiceDomande);
// };

// Invia un messaggio in Team-2
