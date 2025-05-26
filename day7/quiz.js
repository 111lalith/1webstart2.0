// script.js

const quizData = [
  {
    question: "What is the capital of india?",
    a: "delhi",
    b: "mumbai",
    c: "bengalaru",
    d: "Rome",
    correct: "a"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Python",
    b: "Java",
    c: "C++",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Computer Style Sheets",
    b: "Cascading Style Sheets",
    c: "Creative Style System",
    d: "Colorful Style Syntax",
    correct: "b"
  }
];

let currentQuestion = 0;
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll("input[name='answer']");
const submitBtn = document.getElementById("submit");
const feedbackEl = document.getElementById("feedback");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

function loadQuestion() {
  resetSelection();
  feedbackEl.textContent = "";
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  a_text.textContent = currentQuiz.a;
  b_text.textContent = currentQuiz.b;
  c_text.textContent = currentQuiz.c;
  d_text.textContent = currentQuiz.d;
}

function getSelected() {
  let selected = null;
  answerEls.forEach((el) => {
    if (el.checked) selected = el.value;
  });
  return selected;
}

function resetSelection() {
  answerEls.forEach(el => el.checked = false);
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (!answer) {
    feedbackEl.textContent = "Please select an answer.";
    feedbackEl.style.color = "red";
    return;
  }

  const isCorrect = answer === quizData[currentQuestion].correct;
  feedbackEl.textContent = isCorrect ? "Correct!" : "Wrong!";
  feedbackEl.style.color = isCorrect ? "green" : "red";

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Completed!";
      document.getElementById("quiz-form").innerHTML = `<p>Your quiz has ended. Thanks for participating!</p>`;
    }
  }, 1000); // wait 1 second before loading next question
});

loadQuestion();
