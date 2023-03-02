
//make var for questions and options section of container, and vars for each section
var questions = $('.questions');
var options = $('.options');
var homePage = $('.homepage');
var gameContainer = $('.container');
var initialPage = $('.add-ini-page');
var scorePage = $('.scorepage');
//buttons
var startButton = $('.start');
var submitBtn = $('.submit-ini');
//score show up in p of add ini page section
var scoreShow = $('.score');

//make var for timer and for lack of better naming on my part timerCount too
var timer;
var timerCount;

//make vars for right and wrong answers from user input
var isRight = 0;
var isWrong = 0;


//make variable to store the user's scores
var userScore = [];

//store their responses from optionsQA input
var responses = [];


var gameQuestions = [
   {
        question: "Commonly used data types DO NOT include:",
        choice1: 'string',
        chocie2: 'boolean',
        choice3: 'tags',
        choice4: 'numbers',
        answer: "c"
    },
    {
        question: "String values are enclosed in:",
        choice1: 'parenthesis',
        choice2: 'square brackets',
        choice3: 'curly brackets',
        choiec4: '<>',
        answer: "c"
    },
    {
        question: "Which HTML elemt does javascript go inside?",
        choice1: '<javascript>',
        choice2: '<script>',
        choice3: '<scriptjs>',
        choice4: '<js>',
        answer: "b"
    },
    {
        question: "How do you call a function called 'myFunction' in javascript?",
        choice1: 'call myFunction',
        choice2: 'call function myFunction',
        choice3: 'myFunction[]',
        choice4:  'myFunction()',
        answer: "d"
    }
    ];
//start game load js
function startGame(){
    isRight = false;
    timerCount = 60;
    //disable the game button while game in progress
    startButton.disabled = true;
    startTimer()
    renderQuestions()
}

// START button function(do inside the click event below functions?)


//SET EACH (container AND question[i] not in use)attr to display none in if statment for the question counter function


//starts timer and sets up endGame function to be called
function startTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;

        if(timerCount === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
    
}

function endGame(){
    //set this to auto switch to other div display thereby ending the game(could alert message to user?)
}

//linked in new.html, gonna do this all in one page instead, and keep the old trial to complete at later date
//make var for h1 (*should house 5 game questions) DONE
//make var for ul (*should house all 20 options, 4/question) DONE
//create the li here (should respond to user input, make function getQuestions)
//make statement for li creation w/text from var list and append the ul w/this new info
//set display attr to none so its removes from DOM dont take up space
//start quiz make first div appear and other dissapear
//use jquery for click event 
//function calls and event listeners at bottom