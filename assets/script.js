//js code for Web API Quiz
//Acceptance Criteria:
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score


//make var for where to display your 

//make var for timer and for lack of better naming on my part timerCount too
var timer;
var timerCount;

//make vars for right and wrong answers from user input
var isRight = 0;
var isWrong = 0;

//make vars for the timer element (in nav), scores (in nav) and start button(in container footer)
var timerElement = document.querySelector(".timer");
var scoreSelect = document.querySelector(".data");
var startButton = document.querySelector(".start");

//make variable to store the user's scores
var userScore = [];

//store their responses from optionsQA input
var responses = [];

// arrays for questions and answers options

var optionsQA = [
{
    question: "Commonly used data types DO NOT include: \n(a) string \n(b) boolean \n(c) alerts \n(d) numbers",
    answer: "c"
},
{
    question: "String values are enclosed in: \n(a) parenthesis \n(b) square brackets \n(c) curly brackets \n(d) <>",
    answer: "c"
},
{
    question: "Which HTML elemt does javascript go inside? \n(a) <javascript> \n(b) <script> \n(c) <scriptjs> \n(d) <js>",
    answer: "b"
},
{
    qusstion: "How do you call a function called 'myFunction' in javascript? \n(a) call myFunction() \n(b) call function myFunction() \n(c) myFunction[] \n(d) myFunction()",
    answer: "d"
}
];

//ive defined optionsQA, now i tell it to show up in index (?)
 optionsQA = document.createElement("li");


// make an init function for when the page loads so things start right away

function init(){
  getScore();
  getTime();
}

//giving 30sec to complete game
function startGame(){
  isRight = false;
  timerCount = 30;
  //disable the game button while game in progress
  startButton.disabled = true;
  startTimer()
  renderQuestions()
}

//you can win game if you finish in (one minute) with (questions right)
function winGame(){

}


//lose game if you (run out of time) or (all wrong answers) should be easy if with loop for questions

function loseGame(){

}

//start the timer element

function startTimer(){
  timer = setInterval(function(){
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      //test win conditions and will prompt the wingame function if conditions met
      if (isRight && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    //test if time out- this will prompt the function to losegame
    if (timerCount === 0){
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}








//get prompts to show up inside the test-box area, style this in css and get loop to work

//var scores = 0;

//var test = document.querySelectorAll(".test-box");

//for(var i=0; i < options.length; i++){
  //  var userAnswer = test
    //if(userAnswer == options[i].answer){
      //  scores++;
        //alert("Correct");
    //} else{
      //  alert("Wrong");
      //return;
    //}
//};