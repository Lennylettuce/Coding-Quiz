var questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. alerts"],
    answer: "2. alerts",
  },
  {
    questionText: "String values are enclosed in:",
    options: [
      "1. square brackets",
      "2. curly brackets",
    ],
    answer: "2. curly brackets",
  },
  {
    questionText:
      "How do you call a funciton called 'myFunction'",
    options: ["1. myFunction()", "2. myfunction[]"],
    answer: "1. myFunction()",
  },
  {
    questionText:
      "How does the javascript tag appear?",
    options: [
      "1. <javascript>",
      "2. <script>",
      
    ],
    answer: "2. <script>",
  },
  
];


var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card");
var scoreCard = document.querySelector("#score-card");
var leaderboardCard = document.querySelector("#leaderboard-card");

//to hide all cards
function hideCards() {
  startCard.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  scoreCard.setAttribute("hidden", true);
  leaderboardCard.setAttribute("hidden", true);
}

var results = document.querySelector("#results");
var resultText = document.querySelector("#result-text");

//to hide result div
function hideResultText() {
  results.style.display = "none";
}


var timerInterval;
var time;
var currentQuestion;
var score = document.querySelector("#score");
var points;
document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
  //start game by hiding all cards but the questionCard
  hideCards();
  questionCard.removeAttribute("hidden");

  
  currentQuestion = 0;
  points = 0;
  displayQuestion();

  
  time = 60;
  //set function for countdown in seperate function,called here
  timerInterval = setInterval(countdown, 1000);

  
  displayTime();
}

function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

//display time on page
var timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//display the question and answer options for the current question
function displayQuestion() {
  let question = questions[currentQuestion];
  let options = question.options;

  let h2QuestionElement = document.querySelector("#question-text");
  h2QuestionElement.textContent = question.questionText;

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
}


document.querySelector("#game-options").addEventListener("click", checkAnswer);

//Compare text content of button pressed with that of the current question 
function optionRight(optionButton) {
  return optionButton.textContent === questions[currentQuestion].answer;
}

//if answer wrong subtract 10seconds, show wrong or right in results div
function checkAnswer(eventObject) {
  let optionButton = eventObject.target;
  results.style.display = "block";
  if (optionRight(optionButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
    points++;
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      time = 0;
      displayTime();
      endQuiz();
    }
  }

  
  currentQuestion++;
  

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}



//change score to score not time
function endQuiz() {
  clearInterval(timerInterval);
  hideCards();
  scoreCard.removeAttribute("hidden");
  score.textContent = score;
}

var submitButton = document.querySelector("#submit-button");
var inputElement = document.querySelector("#initials");

submitButton.addEventListener("click", storeScore);

function storeScore(event) {
 
  event.preventDefault();

  
  if (!inputElement.value) {
    alert("Please enter your initials.");
    return;
  }

  
  let leaderboardItem = {
    initials: inputElement.value,
    score: points,
  };

  updateStoredLeaderboard(leaderboardItem);

  
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  renderLeaderboard();
}


function updateStoredLeaderboard(leaderboardItem) {
  let leaderboardArray = getLeaderboard();
  
  leaderboardArray.push(leaderboardItem);
  localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}


function getLeaderboard() {
  let storedLeaderboard = localStorage.getItem("leaderboardArray");
  if (storedLeaderboard !== null) {
    let leaderboardArray = JSON.parse(storedLeaderboard);
    return leaderboardArray;
  } else {
    leaderboardArray = [];
  }
  return leaderboardArray;
}


function renderLeaderboard() {
  let LeaderboardArray = localStorage.getItem("leaderboardArray");
  const highscoreList = document.querySelector("#highscore-list");
  highscoreList.innerHTML = "";
  for (let i = 0; i < LeaderboardArray.length; i++) {
    let leaderboardEntry = LeaderboardArray[i];
    let newListItem = document.createElement("li");
    newListItem.textContent =
      leaderboardEntry.initials + " - " + leaderboardEntry.score;
    highscoreList.append(newListItem);
  }
}




function showLeaderboard() {
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  
  clearInterval(timerInterval);

  
  time = undefined;
  displayTime();

  
  renderLeaderboard();
}