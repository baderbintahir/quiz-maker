var done = document.querySelector("#done");
var submit = document.querySelector("#submit");

var questionsList = []; 
var correctAnswersList = [];
var submittedAnswersList = [];
var count = 0;
var perc = 0;

done.addEventListener("click", function () {
    var questions = document.querySelectorAll(".q");
    var answers = document.querySelectorAll(".a");
    var showQ = document.querySelectorAll(".s-q");

    for (var i = 0; i < 10; i++) {
        questionsList[i] = questions[i].value;
        correctAnswersList[i] = answers[i].value;
        showQ[i].textContent = `${questionsList[i]} = `;
        questions[i].value = "";
        answers[i].value = "";
    }

    document.querySelector('.questions-input').style.display = "none"
    document.querySelector('.answers-input').style.display = "block"
});

submit.addEventListener("click", function () {
    var answerssubmit = document.querySelectorAll(".s-a");
    var show = document.querySelectorAll(".show");
    var percentage = document.querySelector("span");

    for (var i = 0; i < 10; i++) {
        submittedAnswersList[i] = answerssubmit[i].value;

        if (submittedAnswersList[i] === correctAnswersList[i]) {
            show[i].textContent = "Right";
            count++;
        } else {
            show[i].textContent = "Wrong";
        }
    }

    perc = (count / 10) * 100;
    percentage.textContent = perc;

    document.querySelector('.answers-input').style.display = "none"
    document.querySelector('.grading-section').style.display = "block"
});