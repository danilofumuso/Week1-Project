let value = localStorage.getItem("difficulty");

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
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
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
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    incorrect_answers: ["2400", "1000", "1240"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "When did the online streaming service &quot;Mixer&quot; launch?",
    correct_answer: "2016",
    incorrect_answers: ["2013", "2009", "2011"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "A Boolean value of &quot;0&quot; represents which of these words?",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does RAID stand for?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: ["Rapid Access for Indexed Devices", "Range of Applications with Identical Designs", "Randomized Abstract Identification Description"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The open source program Redis is a relational database server.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What was the first commerically available computer processor?",
    correct_answer: "Intel 4004",
    incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The first computer bug was formed by faulty wires.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
    correct_answer: "print(&quot;Hello World&quot;)",
    incorrect_answers: ["console.log(&quot;Hello World&quot;)", "echo &quot;Hello World&quot;", "printf(&quot;Hello World&quot;)"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which programming language was developed by Sun Microsystems in 1995?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Solaris OS", "C++"],
  },
];

const hard = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: ["Individuals and interactions", "Customer collaboration", "Responding to change"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
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
    question: "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
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
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: ["FM Synthesizer", "Programmable Sound Generator (PSG)", "PCM Sampler"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: ["Broken Authentication", "Cross-Site Scripting", "Insecure Direct Object References"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
];

let answersClicked = [];

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
    counterWrong++;
    answersClicked.push(null);
    remainingSeconds = totalSeconds;

    if (questionIndex !== array.length - 1) {
      questionIndex++;
      quiz(questionIndex);
    } else {
      localStorage.setItem("wrongAnswers", counterWrong);
      localStorage.setItem("correctAnswers", counterRight);
      localStorage.setItem("answersChecked", JSON.stringify(answersClicked));
      window.location.href = "resultPage.html";
    }
  } else {
    secondsElement.innerText = remainingSeconds;

    const offset = circumference - (remainingSeconds / totalSeconds) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    remainingSeconds--;
  }
}

let timerInterval = setInterval(updateTimer, 1000);

if (value === "easy") {
  array = easy;
  localStorage.setItem("array", JSON.stringify(easy));
} else if (value === "medium") {
  array = medium;
  localStorage.setItem("array", JSON.stringify(medium));
} else {
  array = hard;
  localStorage.setItem("array", JSON.stringify(hard));
}

//per convertire un array in una stringa nella pagina bench

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
      answersClicked.push(button.innerText);
      localStorage.setItem("answersChecked", JSON.stringify(answersClicked));

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
      } else {
        counterWrong++;
        button.classList.add("red");
        button.classList.remove("buttonHover");
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
