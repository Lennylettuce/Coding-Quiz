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
//dont use for loop 

//when each question is answered make the score update, 
//when an answer is wrong user timerCount-- maybe minus 5sec or something(?)

//use local storage for name/score save

//targeting on game page
var question = document.querySelector('question');
var choices = Array.from(document.querySelectorAll('choicetext'));
var progress = document.querySelector('progress');
var scoreText = document.querySelector('score');

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

var questionCounter = 0; 
//current question in own var [0] (right or not need to increment from here)
//after counter++ rendernextQ

// arrays for questions and answers options
//call on each by[i]0,1,2,3
var optionsQA = [
{
    question: "Commonly used data types DO NOT include:"
    choice1: 'string',
    choice2: 'boolean',
    choice3: 'tags',
    choice4: 'numbers',
    answer: "c"
},
{
    question: "String values are enclosed in:"
    choice1: 'parenthesis',
    choice2: 'square brackets',
    choice3: 'curly brackets',
    choiec4: '<>',
    answer: "c"
},
{
    question: "Which HTML elemt does javascript go inside?"
    choice1: '<javascript>',
    choice2: '<script>',
    choice3: '<scriptjs>',
    choice4: '<js>',
    answer: "b"
},
{
    qusstion: "How do you call a function called 'myFunction' in javascript?"
    choice1: 'call myFunction',
    choice2: 'call function myFunction',
    choice3: 'myFunction[]',
    choice4:  'myFunction()',
    answer: "d"
}
];

//renderquestions function call to this container fill lis with choices

//increquestion by one
//chages text content w/each 1
//retrieve val at click event
//write flow charts in future assignments

// make an init function for when the page loads so things start right away
//maybe put this one in the scores.js too

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
//add check for which question user is on 
//get new questions once one has been answered(right or wrong)
renderQuestions = () => {
  if (availableQuestions.length === 0 || questionsCounter > maxQuesitons) {
    localStorage.setItem('most recent score', score)

    return window.location.assign('/scores.html')
  }
  //this becomes current question
  questionsCounter++
  
  //tell questionCounter to check which index its on and when to stop

  var questionsIndex = Math.floor(math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    var number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset['number'];

    if (selectedAnswer === isRight) {
      incrementScore(Points)
    }
    
    

  })
})



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

//write functions for setting scores(sets local storage), getting scores (gets from set local storage)and checking to make sure answers are right or wrong
function setScores(){}

//add event listener to start button to start the game
startButton.addEventListener("click", startGame);

//call init to start when page opens 
init();






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