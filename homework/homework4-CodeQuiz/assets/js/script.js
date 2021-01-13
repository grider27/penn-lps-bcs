//variables for reference elements
var welcomeEl = document.getElementById("welcome");
var startQuiz = document.getElementById("start-quiz");

var questionEl = document.getElementById("questions")
var questionTitle = document.getElementById("questionTitle");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");


// script variables



// event listeners
startQuiz.addEventListener("click",initiateQuiz);



// functions

init();

function init(){
    welcome();
}

function welcome(){
    questionEl.style.display = "none";
    var t = document.getElementById("welcome-title");
    var tx = document.getElementById("welcome-text");
    t.textContent = "Javascript Coding Challenge 2";
    tx.textContent = "get ready";
    startQuiz.textContent = "Start Quiz";
}

function initiateQuiz(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "block";
    questionTitle.textContent = "question 1";
    choice1.textContent = "option1";
    choice2.textContent = "option2";
    choice3.textContent = "option3";
    choice4.textContent = "option4";
}