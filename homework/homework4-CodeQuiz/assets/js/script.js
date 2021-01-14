//variables for reference elements
var highScoreEl = document.getElementById("high-scores")
var welcomeEl = document.getElementById("welcome");
var startQuiz = document.getElementById("start-quiz");

var timerEl = document.getElementById("timer-count");

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
var playerInitials = document.getElementById("player-initials");
var saveScoreBtn = document.getElementById("submit-score");

var leaderBoardEl = document.getElementById("board");
var highScoreList = document.getElementById("highScoresList");
var clearHighScores = document.getElementById("clear-high-scores-btn");
var goBack = document.getElementById("go-back-btn");


// script variables
var qIndex;
var userScore;
var timerCount;
var gameCompleted = false;



//quiz questions

// using constant to define the questions to keep it persistent throughout the script
const questions = [
    {
        q: "Which built-in method combines the text of two strings and returns a new string?",
        c: ["append()","concat()","attach()","none of the above"],
        a: 1 //"concat()"
    },
    {
        q: "Which of the following function of Number object forces a number to display in exponential notation?",
        c: ["toExponential()","toFixed()","toPrecision()","toLocaleString()"],
        a: 0 //"toExponential()"
    },
    {
        q: "If we declare a variable, const test = 1, then later, reassign, stating test = 2, what will happen?",
        c: ["test will equal 2","test will equal 1","JavaScript will raise a TypeError","test will equal undefined"],
        a: 2 // JavaScript will raise a TypeError
    },
    {
        q: "What is the HTML tag under which one can write the JavaScript code?",
        c: ["<javascript>","<scripted>","<script>","<js>"],
        a: 2 //<script>
    },
    {
        q: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        c: ["alertbox(“GeeksforGeeks”)","msg(“GeeksforGeeks”)","msgbox(“GeeksforGeeks”)","alert(“GeeksforGeeks”)"],
        a: 3 // alert(“GeeksforGeeks”)
    },
    {
        q: "Which of the following is not a reserved word in JavaScript?",
        c: ["interface","throws","program","short"],
        a: 2 //program
    },
    {
        q: "Which of the following is not Javascript frameworks or libraries?",
        c: ["Polymer","Meteor","Cassandra","jQuery"],
        a: 2 //Cassandra
    },
    {
        q: "What is the original name of JavaScript?",
        c: ["LiveScript","EScript","Mocha","JavaScript"],
        a: 2 //Mocha
    },
    {
        q: "What are the types of Pop up boxes available in JavaScript?",
        c: ["Alert","Prompt","Confirm","All of the above"],
        a: 3 //All of the above
    },
    {
        q: "The _______ method of an Array object adds and/or removes elements from an array.",
        c: ["Reverse","Shift","Slice","Splice"],
        a: 3 //Splice
    }
]



// event listeners
startQuiz.addEventListener("click",initiateQuiz);
scoreEl.addEventListener("submit",function(event){
    event.preventDefault();
    leaderBoard();
});
highScoreEl.addEventListener("click",leaderBoard);

choice1.addEventListener("click", function(){
    checkAnswer(0);
});
choice2.addEventListener("click", function(){
    checkAnswer(1);
});
choice3.addEventListener("click", function(){
    checkAnswer(2);
});
choice4.addEventListener("click", function(){
    checkAnswer(3);
});
saveScoreBtn.addEventListener("click",saveScoretoStorage);

goBack.addEventListener("click",welcome);
clearHighScores.addEventListener("click", function(){
    window.localStorage.removeItem("storedScores");
    highScoreList.innerHTML = "";
})



// main functions

init();

function init(){
    welcome();  
}

function startTimer() {
    var timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount === 0 || gameCompleted){
            clearInterval(timer);
            displayFinalScore();
        }
    },1000);
}

function welcome(){
    welcomeEl.style.display = "block";
    questionEl.style.display = "none";
    scoreEl.style.display = "none";
    leaderBoardEl.style.display = "none";
    if (highScoreEl.style.display === "none"){
        highScoreEl.style.display = "block";
    };

    var t = document.getElementById("welcome-title");
    var tx = document.getElementById("welcome-text");
    t.textContent = "Javascript Coding Challenge";
    tx.textContent = "get ready";
    startQuiz.textContent = "Start Quiz";
    timerEl.textContent = 120;
}

function initiateQuiz(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "block";
    scoreEl.style.display = "none";
    leaderBoardEl.style.display = "none";

    lineBreak.style.display = "none";
    resultCheck.style.display = "none";
    qIndex = 0;
    timerCount = 120;
    userScore = 0;
    gameCompleted = false;
    startquestions();
    startTimer();
}

function startquestions(){
    questionTitle.textContent = questions[qIndex].q;
    choice1.textContent = questions[qIndex].c[0];
    choice2.textContent = questions[qIndex].c[1];
    choice3.textContent = questions[qIndex].c[2];
    choice4.textContent = questions[qIndex].c[3];
}

// check answer function here
function checkAnswer(pick){
    lineBreak.style.display = "block";
    resultCheck.style.display = "block";
    if (pick === questions[qIndex].a){
        resultCheck.textContent = "Correct!";         
        userScore++;
    } else {
    resultCheck.textContent = "Wrong!";    
    }
    qIndex++;
    //console.log(qIndex);
    if (qIndex < questions.length){
        startquestions();
    } else {
        gameCompleted = true;
        displayFinalScore();
    }
}

// function for final score & option to save
function displayFinalScore(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "none";
    scoreEl.style.display = "block";
    leaderBoardEl.style.display = "none";
    finalScore.textContent = userScore;

}

function saveScoretoStorage(){
    if (playerInitials.value === ""){
        alert("Please enter your initials in order to make it to the leader board");
    }
    console.log(playerInitials.value);
    console.log(userScore);
    //var addScores = function (playerInitials, userScore) {
        var savedScores = JSON.parse(localStorage.getItem('storedScores')) || [];
        savedScores.push({playerInitals: playerInitials.value, userScore: userScore});
        localStorage.setItem('storedScores', JSON.stringify(savedScores));
    //}
}

function leaderBoard(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "none";
    scoreEl.style.display = "none";
    leaderBoardEl.style.display = "block";
    highScoreEl.style.display = "none";

    var savedScores = localStorage.getItem("storedScores");

    if (savedScores != null){
        console.log(savedScores);
        savedScoresToList = JSON.parse(savedScores);
        for (i=0; i< savedScoresToList.length; i++){
            var listResults = document.createElement("li");
            listResults.textContent = savedScoresToList[i].playerInitals+ ":  "+savedScoresToList[i].userScore;
            highScoreList.appendChild(listResults);
        }
    }
}