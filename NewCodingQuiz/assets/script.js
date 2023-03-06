//html elements linked
var timer = $('.timer');
var pageContainer = $('.container');
var startBtn = $('.start-btn');
var questionContainer = $('.quesiton-container');
var displayQuestion = $('.question-display');
var optionsBtns = $('.option');
var scoreContainer = $('.scorepage');
var displayScores = $('.show-scores');
var userInitials = $('.initials');
var submitBtn = $('.submit');

//vars to store question counter, score counter, and arry of questions
var time = 60;
var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options:  ["1. boolean",
                     "2. alerts", ],
        answer: "2. alerts",    
    },

    {   
        question: "String values are enclosed in:",
            options: ["1. <>", 
                "2. square brackets", 
            ],
            answer: "2. square brackets",
    },

    {   
        question: "How does the javascript tag appear?",
           options: ["1. <javascript>", "2. <script>"],
           answer: "2. <script>",
    },

    {   
        question: "How do you call a function named 'myFunciton'?",
            options: ["1. myFunction()", "2.myfunction[]"],
            answer: "1. myFunction()",
    },

];



//full page visible at start, then go to game page only at start

function hideContainers(){
    scoreContainer.setAttribute(hidden, true);
}

function hideGame(){
    startBtn.setAttribute(hidden, true);
    questionContainer.setAttribute(hidden, true);
}

function startGame () {
   hideContainers();
    displayQuestion();
    displayTime();
    timerCount();


}

function displayTime(){
    timer.textContent = time;
}

function timerCount(){
    
    var timeInterval = setInterval(function(){
        time--;
        if (time === 0) {
            endGame();
        } else {
        timer.textContent = '';
        
        clearInterval(timeInterval);
    }
    }, 1000);
}

function showQuestion(){
    
    var question = questions[currentQuestion];
    var options = questions.options;

    displayQuestion.textContent = question.question;

    for (var i = 0; i <options.length; i++) {
       var options = options[i];
       optionsBtns.textContent = options;
    }
    
    document.querySelector('.option').addEventListener('click', checkAnswer);

}

function correctOption(optionsBtns){
    return optionsBtns.textContent === questions[currentQuestion].answers;
}

function checkAnswer(eventObject) {
    optionsBtns = eventObject.target;
    resultDiv.style.display = "block";
    if (correctOption(optionsBtns)){
        score++;
    } else {
        //take off time for incorrect answer
        score--;
        time = time - 5;

        displayTime();
        endGame();
    }
}

currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
    }else {
        endGame();
    }



function endGame() {
    clearInterval(timeInterval);
    hideGame();
}

function storeInitials(event){
 scorePage.removeAttribute(hidden);
    event.preventDefault();
    if(!userInitials.value){
        alert('please save your initials here');
        return;
    }

    let scoreSave = {
        initials: userInitials.value,
        score: score,
    }


    addToScores(scoreSave);

    showStoredScores();
}

function addToScores(scoreSave){
    let scoresArr = getStoredScores();
    scoresArr.push(scoreSave);
    localStorage.setItem("Scores", JSON.stringify(scoresArr));
}

function getStoredScores(){
    let savedScores = localStorage.getItem("Scores");
    if (savedScores != null) {
        let scoreArr = JSON.parse(savedScores);
        return scoreArr;
    } else {
        scoresArr = [];
    }
    return scoreSave;
}


function showStoredScores(){
    let savedArr = sortScore();
    displayScores.innerHTML = "";
    for (let i = 0; i <savedArr.lendth; i++) {
        let userInput = savedArr[i];
        let newList = document.createElement("<li>");
        newList.textContent = userInput.initials + "-" + userInput.score;
        displayScores.append(newList);
    }
}

function sortScore(){
    let scoreArr = getStoredScores();
    if(!scoreArr){
        return;
    }
    scoreArr.sort(function (a, b){
    return b.score - a.score;
});
        return scoreArr;
}

function showScoresPage(){
    displayTime();
    showStoredScores();
    scoreContainer.removeAttribute(hidden);
}



startBtn.on('click', startGame);
submitBtn.on('click', storeInitials);



