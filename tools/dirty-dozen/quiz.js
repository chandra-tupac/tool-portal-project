// Dirty Dozen tool: builds the study cards and runs the quiz.
// Content comes from data.js (the DIRTY_DOZEN list).
(function () {
  var CHOICES_PER_QUESTION = 4;

  var studySection = document.getElementById("study");
  var quizSection = document.getElementById("quiz");
  var factorGrid = document.getElementById("factor-grid");
  var questionView = document.getElementById("question-view");
  var resultsView = document.getElementById("results-view");
  var progress = document.getElementById("progress");
  var scenario = document.getElementById("scenario");
  var choiceList = document.getElementById("choices");
  var feedback = document.getElementById("feedback");
  var nextButton = document.getElementById("next-button");
  var scoreText = document.getElementById("score");
  var missedBlock = document.getElementById("missed");
  var missedList = document.getElementById("missed-list");

  var questions = [];
  var current = 0;
  var score = 0;
  var missed = [];

  // Random order (Fisher–Yates shuffle) without changing the original.
  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // ---------- Study cards ----------
  function buildStudyCards() {
    DIRTY_DOZEN.forEach(function (factor, index) {
      var item = el("li", "factor-card");
      item.id = "factor-" + factor.id;
      item.tabIndex = -1; // lets the results links move focus here

      item.appendChild(el("h3", "factor-name", (index + 1) + ". " + factor.name));
      item.appendChild(el("p", "factor-meaning", factor.meaning));
      item.appendChild(el("p", "factor-nets-label", "Safety nets:"));

      var nets = el("ul", "factor-nets");
      factor.safetyNets.forEach(function (net) {
        nets.appendChild(el("li", "", net));
      });
      item.appendChild(nets);

      factorGrid.appendChild(item);
    });
  }

  // ---------- Switching between study and quiz ----------
  function showStudy(factorId) {
    quizSection.hidden = true;
    studySection.hidden = false;
    var target = factorId
      ? document.getElementById("factor-" + factorId)
      : document.getElementById("study-heading");
    target.scrollIntoView();
    target.focus();
  }

  function showQuiz() {
    studySection.hidden = true;
    quizSection.hidden = false;
    startQuiz();
  }

  // ---------- Quiz ----------
  function startQuiz() {
    questions = shuffle(DIRTY_DOZEN);
    current = 0;
    score = 0;
    missed = [];
    resultsView.hidden = true;
    questionView.hidden = false;
    showQuestion();
  }

  function pickChoices(answer) {
    var others = shuffle(DIRTY_DOZEN.filter(function (f) {
      return f.id !== answer.id;
    })).slice(0, CHOICES_PER_QUESTION - 1);
    return shuffle(others.concat([answer]));
  }

  function showQuestion() {
    var answer = questions[current];

    progress.textContent = "Question " + (current + 1) + " of " + questions.length;
    scenario.textContent = answer.scenario;
    feedback.hidden = true;
    feedback.className = "feedback";
    feedback.textContent = "";
    nextButton.hidden = true;
    choiceList.textContent = "";

    pickChoices(answer).forEach(function (factor) {
      var item = el("li");
      var button = el("button", "choice", factor.name);
      button.type = "button";
      button.setAttribute("data-id", factor.id);
      button.addEventListener("click", function () {
        checkAnswer(factor.id);
      });
      item.appendChild(button);
      choiceList.appendChild(item);
    });

    var heading = document.getElementById("quiz-heading");
    heading.scrollIntoView();
    heading.focus();
  }

  function checkAnswer(chosenId) {
    var answer = questions[current];
    var isRight = chosenId === answer.id;

    if (isRight) {
      score++;
    } else {
      missed.push(answer);
    }

    // Lock the choices and label the right (and wrong) one in words,
    // not only by color.
    var buttons = choiceList.querySelectorAll(".choice");
    Array.prototype.forEach.call(buttons, function (button) {
      var id = button.getAttribute("data-id");
      button.disabled = true;
      if (id === answer.id) {
        button.classList.add("is-correct");
        button.textContent = "✓ " + button.textContent + " — correct answer";
      } else if (id === chosenId) {
        button.classList.add("is-wrong");
        button.textContent = "✗ " + button.textContent + " — your answer";
      }
    });

    feedback.textContent = "";
    feedback.appendChild(el("strong", "", isRight
      ? "Correct!"
      : "Not quite. The answer is " + answer.name + "."));
    feedback.appendChild(el("p", "", answer.explanation));
    feedback.classList.add(isRight ? "is-correct" : "is-wrong");
    feedback.hidden = false;

    var isLast = current === questions.length - 1;
    nextButton.textContent = isLast ? "See results" : "Next question";
    nextButton.hidden = false;
    nextButton.focus();
  }

  function nextQuestion() {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    questionView.hidden = true;
    resultsView.hidden = false;

    scoreText.textContent = "You got " + score + " out of " + questions.length + " right.";

    missedList.textContent = "";
    missedBlock.hidden = missed.length === 0;
    missed.forEach(function (factor) {
      var item = el("li");
      var link = el("a", "", factor.name);
      link.href = "#factor-" + factor.id;
      link.addEventListener("click", function (event) {
        event.preventDefault();
        showStudy(factor.id);
      });
      item.appendChild(link);
      missedList.appendChild(item);
    });

    var heading = document.getElementById("results-heading");
    heading.scrollIntoView();
    heading.focus();
  }

  // ---------- Wire up ----------
  buildStudyCards();
  document.getElementById("start-quiz").addEventListener("click", showQuiz);
  document.getElementById("back-to-study").addEventListener("click", function () {
    showStudy();
  });
  document.getElementById("try-again").addEventListener("click", startQuiz);
  document.getElementById("results-study").addEventListener("click", function () {
    showStudy();
  });
  nextButton.addEventListener("click", nextQuestion);
})();
