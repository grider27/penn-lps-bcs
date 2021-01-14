//variables for reference elements
var highScoreEl = document.getElementById("high-scores")
var vwHighScoreEl = document.getElementById("vwHighScores")
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
        c: ["1. append()","2. concat()","3. attach()","4. none of the above"],
        a: 1 //"concat()"
    },
    {
        q: "Which of the following function of Number object forces a number to display in exponential notation?",
        c: ["1. toExponential()","2. toFixed()","3. toPrecision()","4. toLocaleString()"],
        a: 0 //"toExponential()"
    },
    {
        q: "If we declare a variable, const test = 1, then later, reassign, stating test = 2, what will happen?",
        c: ["1. test will equal 2","2. test will equal 1","3. JavaScript will raise a TypeError","4. test will equal undefined"],
        a: 2 // JavaScript will raise a TypeError
    },
    {
        q: "What is the HTML tag under which one can write the JavaScript code?",
        c: ["1. <javascript>","2. <scripted>","3. <script>","4. <js>"],
        a: 2 //<script>
    },
    {
        q: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        c: ["1. alertbox(“GeeksforGeeks”)","2. msg(“GeeksforGeeks”)","3. msgbox(“GeeksforGeeks”)","4. alert(“GeeksforGeeks”)"],
        a: 3 // alert(“GeeksforGeeks”)
    },
    {
        q: "Which of the following is not a reserved word in JavaScript?",
        c: ["1. interface","2. throws","3. program","4. short"],
        a: 2 //program
    },
    {
        q: "Which of the following is not Javascript frameworks or libraries?",
        c: ["1. Polymer","2. Meteor","3. Cassandra","4. jQuery"],
        a: 2 //Cassandra
    },
    {
        q: "What is the original name of JavaScript?",
        c: ["1. LiveScript","2. EScript","3. Mocha","4. JavaScript"],
        a: 2 //Mocha
    },
    {
        q: "What are the types of Pop up boxes available in JavaScript?",
        c: ["1. Alert","2. Prompt","3. Confirm","4. All of the above"],
        a: 3 //All of the above
    },
    {
        q: "The _______ method of an Array object adds and/or removes elements from an array.",
        c: ["1. Reverse","2. Shift","3. Slice","4. Splice"],
        a: 3 //Splice
    }
]



// event listeners
startQuiz.addEventListener("click",initiateQuiz);
scoreEl.addEventListener("submit",function(event){
    event.preventDefault();
    leaderBoard();
});
vwHighScoreEl.addEventListener("click",leaderBoard);

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

// on load execution
init();

function init(){
    welcome();  
}

//timer
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

//welcome screen block
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
    tx.textContent = "Try to answer the following JavaScript code related questions within the time limit of 2 minutes. Keep in mind that incorrect answers will deduct 15 seconds from your time limit. Good luck!";
    startQuiz.textContent = "Start Quiz";
    timerEl.textContent = 120;
    tx.setAttribute("style","font-size:20px; margin-top:40px;");
}

// start quiz
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

// populate questions
function startquestions(){
    questionTitle.textContent = questions[qIndex].q;
    choice1.textContent = questions[qIndex].c[0];
    choice2.textContent = questions[qIndex].c[1];
    choice3.textContent = questions[qIndex].c[2];
    choice4.textContent = questions[qIndex].c[3];
}

// check answer function
function checkAnswer(pick){
    lineBreak.style.display = "block";
    resultCheck.style.display = "block";
    if (pick === questions[qIndex].a){
        resultCheck.textContent = "Correct!";         
        userScore++;
    } else {
    resultCheck.textContent = "Wrong!";
    if (timerCount >= 15){
    timerCount -= 15;    
        }
    }
    qIndex++;
    if (qIndex < questions.length){
        startquestions();
    } else {
        gameCompleted = true;
        displayFinalScore();
    }
    resultCheck.setAttribute("style","font-style: italic; font-size: 30px; opacity: 0.60;");
}

// function for final score & option to save
function displayFinalScore(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "none";
    scoreEl.style.display = "block";
    leaderBoardEl.style.display = "none";
    finalScore.textContent = userScore;

}

// save to storage
function saveScoretoStorage(){
    if (playerInitials.value === ""){
        alert("Please enter your initials in order to make it to the leader board");
    }
    //var addScores = function (playerInitials, userScore) {
        var savedScores = JSON.parse(localStorage.getItem('storedScores')) || [];
        savedScores.push({playerInitals: playerInitials.value, userScore: userScore});
        localStorage.setItem('storedScores', JSON.stringify(savedScores));
    //}
}

// leader board
function leaderBoard(){
    welcomeEl.style.display = "none";
    questionEl.style.display = "none";
    scoreEl.style.display = "none";
    leaderBoardEl.style.display = "block";
    highScoreEl.style.display = "none";
    var savedScores = localStorage.getItem("storedScores");

    if (savedScores != null){
        var savedScoresToList = [];
        highScoreList.innerHTML = "";
        savedScoresToList = JSON.parse(savedScores);
        for (i=0; i< savedScoresToList.length; i++){
            var listResults = document.createElement("li");
            listResults.textContent = savedScoresToList[i].playerInitals+ ":  "+savedScoresToList[i].userScore;
            highScoreList.appendChild(listResults);
            listResults.setAttribute("style","color:white; padding:5px; margin-bottom:5px; background-color:#339999; opacity: 0.75;");
        }
    }
}