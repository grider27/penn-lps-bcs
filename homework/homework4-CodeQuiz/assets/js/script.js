//variables for reference elements
var highScoreEl = document.getElementById("high-scores")
var welcomeEl = document.getElementById("welcome");
var startQuiz = document.getElementById("start-quiz");

var questionEl = document.getElementById("questions")
var questionTitle = document.getElementById("question-title");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var lineBreak = document.getElementById("lineBreak");
var resultCheck = document.getElementById("resultCheck");

var scoreEl = document.getElementById("scores");
var finalScore = document.getElementById("final-score");
var saveScoreBtn = document.getElementById("submit-score");

var leaderBoardEl = document.getElementById("board");


// script variables



//quiz question
/*
cont questions = [
    {
        q: ""

    }
]
*/


// event listeners
startQuiz.addEventListener("click",initiateQuiz);
choice1.addEventListener("click",displayFinalScore); //needs to be pointed to right function
scoreEl.addEventListener("submit",function(event){
    event.preventDefault();
    leaderBoard();
});
highScoreEl.addEventListener("click",leaderBoard);


// functions

init();

function init(){
    welcome();
}

function welcome(){
    welcomeEl.style.display = "block";
    questionEl.style.display = "none";
    scoreEl.style.display = "none";
    leaderBoardEl.style.display = "none";

    var t = document.getElementById("welcome-title");
    var tx = document.getElementById("welcome-text");
    t.textContent = "Javascript Coding Challenge 2";
    tx.textContent = "get ready";
    startQuiz.textContent = "Start Quiz";
}

function initiateQuiz(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "block";
    scoreEl.style.display = "none";
    leaderBoardEl.style.display = "none";

    lineBreak.style.display = "none";
    resultCheck.style.display = "none";

    questionTitle.textContent = "question 1";
    choice1.textContent = "option1";
    choice2.textContent = "option2";
    choice3.textContent = "option3";
    choice4.textContent = "option4";
}

function displayFinalScore(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "none";
    scoreEl.style.display = "block";
    leaderBoardEl.style.display = "none";
}

function leaderBoard(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "none";
    scoreEl.style.display = "none";
    leaderBoardEl.style.display = "block";
}