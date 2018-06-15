// create game variables

var correctCount = 0;
var incorrectCount = 0; 
var currentQuestion;
var guess = 0;
var areYouRight;
var status =0;

// create question objects

var question1 = {
    title: "Which of the following is NOT one of Gandalf's many aliases?",
    answerArray: ["Gandalf the Grey", "Gandalf the White", "Mithrandir", "The White Messenger"], 
    correctAnswer: "The White Messenger",
    answerGif: ""
};

var question2 = {
    title: "What species was Gollum before he was corrupted by the One Ring?",
    answerArray: ["Dwarf", "Orc", "Hobbit", "Gnome"], 
    correctAnswer: "Hobbit",
    answerGif: ""
};

var question3 = {
    title: "Who becomes unlikely friends over the course of the trilogy?",
    answerArray: ["Gimli & Legolas", "Pippin & Merry", "Frodo & Bilbo", "Elrond & Isildor"], 
    correctAnswer: "Gimli & Legolas",
    answerGif: ""
};

var question4 = {
    title: "Who created the One Ring?",
    answerArray: ["Sauron", "Saruman", "Isildur", "Sméagol"], 
    correctAnswer: "Sauron",
    answerGif: ""
};

var question5 = {
    title: "Which of the following is NOT a gift from Galadriel to The Fellowship of The Ring",
    answerArray: ["Lock of Hair", "Crystal Phial", "Bread", "Mithril Armor"], 
    correctAnswer: "Mithril Armor",
    answerGif: ""
};

//create array of questions

var questionArray = [question1, question2, question3, question4, question5];

// create count down function

function countDown(secs, elem) {
    var element = document.getElementById(elem);
   if(secs >= 10){
       element.innerHTML = "00:" + secs
   } else if(secs <10 && secs > 0) {
    element.innerHTML = "00:0" + secs
   }  else {
        clearTimeout(timer);
        element.innerHTML = "00:00";
    }
    ;
    secs --;
    window.timer = setTimeout('countDown ('+secs+',"'+elem+'")', 1000);
    
};

function timeLeft(){
    var timeleft = 5000;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("game").innerHTML="help";
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },5000);
}


function stopClock(){
    clearTimeout(timer)
    $("#clock").text("00:00");   
};


function checkAnswer(currentQuestion){

    if(guess == currentQuestion.correctAnswer){
       areYouRight = true;
        $("#answer").text("Correct!");
        stopClock();
        correctCount = correctCount++;
        timeLeft();
        status = status++;

    } else {
        areYouRight = false;
        $("#answer").text("Nope!");
        stopClock();
        incorrectCount = incorrectCount++;
        timeLeft();
        status = status++;
    };

}


function askQuestion(currentQuestion) {

countDown(30, "clock");

$("#question").text(currentQuestion.title);

$("#answerArray").append("<button type='button' class='btn' id='answerBtn0'>"+ currentQuestion.answerArray[0]+"</button><br><br>");
$("#answerArray").append("<button type='button' class='btn' id='answerBtn1'>"+ currentQuestion.answerArray[1]+"</button><br><br>");
$("#answerArray").append("<button type='button' class='btn' id='answerBtn2'>"+ currentQuestion.answerArray[2]+"</button><br><br>");
$("#answerArray").append("<button type='button' class='btn' id='answerBtn3'>"+ currentQuestion.answerArray[3]+"</button><br><br>");

$("#answerBtn0").click(function(){guess = currentQuestion.answerArray[0];console.log(guess); checkAnswer(currentQuestion)});
$("#answerBtn1").click(function(){guess = currentQuestion.answerArray[1];console.log(guess); checkAnswer(currentQuestion)});
$("#answerBtn2").click(function(){guess = currentQuestion.answerArray[2];console.log(guess); checkAnswer(currentQuestion)});
$("#answerBtn3").click(function(){guess = currentQuestion.answerArray[3];console.log(guess); checkAnswer(currentQuestion)});



};




$(document).ready(function(){
    $("#startBtn").click(function(){
        $("#startBtn").remove(); 
      
        askQuestion(question1);
 
    });
     });

 
if(status === 1) {

askQuestion(question2) 
}
   
