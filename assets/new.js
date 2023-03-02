//linked in new.html, gonna do this all in one page instead, and keep the old trial to complete at later date
//make var for h1 (*should house 5 game questions)
//make var for ul (*should house all 20 options, 4/question)
//create the li here (should respond to user input, make function getQuestions)
//make forloop for li creation w/text from var list and append the ul w/this new info

var questions = $('questions');
var options = $('options');

//var gameQuestions = [
   // 'Commonly used data types DO NOT include:',
  //  'String values are enclosed in _',
  //  'Which javascript tag is written correctly',
  //  'How do you call a function called "myFunction"',
  //  'How do you leave comments in javascript files?',
//];

var gameQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: 'string',
        options: 'boolean',
        options: 'tags',
        options: 'numbers',
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
        qusstion: "How do you call a function called 'myFunction' in javascript?",
        choice1: 'call myFunction',
        choice2: 'call function myFunction',
        choice3: 'myFunction[]',
        choice4:  'myFunction()',
        answer: "d"
    }
    ];

for (var i = 0; i < gameQuestions.length; i++) {
    var listEl = $('<li>');

    listEl.text(gameQuestions[i]);

    options.append(listEl);
}