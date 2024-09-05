let value = localStorage.getItem("difficulty");
console.log(value);

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
    incorrect_answers: ["True"],
  },
];

const medium = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    incorrect_answers: ["Hard Drive", "Processor", "Power Supply"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How fast is USB 3.1 Gen 2 theoretically?",
    correct_answer: "10 Gb/s",
    incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the number of keys on a standard Windows Keyboard?",
    correct_answer: "104",
    incorrect_answers: ["64", "94", "76"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "AMD created the first consumer 64-bit processor.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The name of technology company HP stands for what?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    correct_answer: "Clipper Chip",
    incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "Active Directory",
    incorrect_answers: ["Alternative Drive", "Automated Database", "Active Department"],
  },
];

const hard = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: ["Super Dense Coding", "Quantum Entanglement", "Quantum Programming"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
];

const totalSeconds = 60; // funzionamento del timer
let remainingSeconds = totalSeconds;

const secondsElement = document.getElementById("seconds");
const progressCircle = document.querySelector(".progress-circle");

const radius = 59;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;

let questionIndex = 0;
let counterRight = 0;
let counterWrong = 0;

function updateTimer() {
  if (remainingSeconds === -1) {
    console.log("tempo scaduto ");
    counterWrong++;
    remainingSeconds = totalSeconds;

    if (questionIndex !== array.length - 1) {
      questionIndex++;
      quiz(questionIndex);
    } else {
      localStorage.setItem("wrongAnswers", counterWrong);
      localStorage.setItem("correctAnswers", counterRight);
      window.location.href = "resultPage.html";
    }
  } else {
    secondsElement.innerText = remainingSeconds;

    const offset = circumference - (remainingSeconds / totalSeconds) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    remainingSeconds--;
  }
}
console.log(questionIndex);
let timerInterval = setInterval(updateTimer, 1000);

if (value === "easy") {
  array = easy;
} else if (value === "medium") {
  array = medium;
} else {
  array = hard;
}

const quiz = function (index) {
  const questions = document.getElementById("question");
  const buttonsDiv = document.querySelector("section>div");
  buttonsDiv.innerHTML = "";
  questions.innerText = array[index].question;

  const questionNumber = document.getElementById("footer"); //serve a cambiare
  questionNumber.innerText = "QUESTION " + [index + 1];
  const span = document.createElement("span");
  span.className = "light-violet";
  span.innerText = " / " + array.length;
  questionNumber.appendChild(span);

  const totalAnswers = [array[index].correct_answer, ...array[index].incorrect_answers];

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
      const buttons = document.querySelectorAll("button"); //questo disabilita i bottoni dopo il primo click
      buttons.forEach((button) => (button.disabled = true));

      let timerInterval = setInterval(updateTimer, 1000); //restarta il timer ad ogni domanda
      clearInterval(timerInterval);
      remainingSeconds = totalSeconds;
      updateTimer();

      if (button.innerText === array[index].correct_answer) {
        //fanno andare avanti i counter delle risposte
        counterRight++;
        button.classList.add("green");
        button.classList.remove("buttonHover");
        console.log("risposta corretta");
      } else {
        counterWrong++;
        button.classList.add("red");
        button.classList.remove("buttonHover");

        console.log("risposta errata");
      }

      localStorage.setItem("wrongAnswers", counterWrong);
      localStorage.setItem("correctAnswers", counterRight);

      setTimeout(() => {
        //questo timeout crea un delay per permettere la visualizzazione del cambio colore del bottone
        if (questionIndex !== array.length - 1) {
          questionIndex++;
          quiz(questionIndex);
        } else {
          window.location.href = "resultPage.html";
          return;
        }
      }, 500);
    });
  }
};

window.onload = () => {
  quiz(questionIndex);
  updateTimer();
};
