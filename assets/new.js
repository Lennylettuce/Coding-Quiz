//all elements of html are accounted for here, make some for the created list for question/options
//make var for questions and options section of container, and vars for each section
var questions = $('.questions');
var options = $('.options');
var gameContainer = $('#container');
//top 3 grouped for where to append li questions from gameQ array
var homePage = $('#homepage');
var initialPage = $('#add-ini-page');
var scorePage = $('#scorepage');
var showScore = $('.show-score');
var initialsSub = $('.initials');
//buttons
var startButton = $('.start');
var submitBtn = $('.submit-ini');
//score show up in p of add ini page section
var scoreShow = $('.score');

//make var for timer and for lack of better naming on my part timerCount too
var timer = $('.timer');
var timerCount;

//make vars for right and wrong answers from user input
var isRight = 0;
var isWrong = 0;

//LOCAL STORAGE get/set items

//make variable to store the user's scores 
var userScore = 0;

//store their responses from gameOptions input
var responses = [];

var gameQuestions = [
  {  
    question: "Commonly used data types DO NOT include:",
    question: "String values are enclosed in:",
    question: "How do you call a function called 'myFunction' in javascript?",
    question: "Which HTML elemt does javascript go inside?",
  }
];

//make array of choices and questions seperate DONE
//come accross question call upon the html element append new li with button inside for each string in choices array
var gameOptions = [
   {
        options: 'string',
        options: 'boolean',
        options: 'tags',
        options: 'numbers',
        answer: 'tags'
        //tell button which one to look at
        //each has a data attr = string 
        //event.target choice=boolean 
    },
    {

        options: 'parenthesis',
        options: 'square brackets',
        options: 'curly brackets',
        options: '<>',
        answer: 'square brackets'
    },
    {
        options: '<javascript>',
        options: '<script>',
        options: '<scriptjs>',
        options: '<js>',
        answer: '<script>',
    },
    {
        options: 'call myFunction',
        options: 'call function myFunction',
        options: 'myFunction[]',
        options:  'myFunction()',
        answer: 'myFunction()',
    }
    ];
 



//SET EACH (container AND question[i] not in use)attr to display none in if statment for the question counter function
//add a class in css that hides things
//hidden by default then as user click thru they show up
//function that handles the question, track the question(in variable of choice)
//

//starts timer and sets up endGame function to be called
function startTimer(){
    timer = setInterval(function(){
      timerCount--;
      timer.textContent = timerCount;
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

renderQuestions(){
    gameContainer.classList.remove("hide");
}

function endGame(){
    if(isWrong === gameQuestions.length){
        alert('End of Game all questions wrong!')
        return; 
    }
    
    if(gameQuestions[3]) {
        //get add-ini-page to show up take off display none 
    }
}
//set this to auto switch to other div display thereby ending the game(could alert message to user?)


//start game with this function inside this click event, functions and vars listed above so this knows what to do before its called
startButton.on('click', function() {
   homePage.classList.add("hide");
   gameContainer.classList.remove("hide");
   //should add/remove hidden option for those containers
    timerCount = 60;
    startTimer()

    renderQuestions()
})

//this will tell user if initials left blank, or set their input to last stored name, do same for scores
submitBtn.on('click', function(event) {
    event.preventDefault();

    var userIni = $('.initials').value;

    if (userIni === "") {
        displayMessage("cannot leave blank");
    } else {
        localStorage.setItem("Initials", userIni);
    }

    scorePage.classList.remove("hide");
    initialPage.classList.add("hide");
    //get display none off scorepage
})
//linked in new.html, gonna do this all in one page instead, and keep the old trial to complete at later date
//make var for h1 (*should house 5 game questions) DONE
//make var for ul (*should house all 20 options, 4/question) DONE
//create the li here (should respond to user input, make function getQuestions)
//make statement for li creation w/text from var list and append the ul w/this new info
//set display attr to none so its removes from DOM dont take up space
//start quiz make first div appear and other dissapear
//use jquery for click event 
//function calls and event listeners at bottom