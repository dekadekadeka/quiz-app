function populate(){
    if (quiz.isEnded()){
        showScores();
    }else{
        //show question
        let question = document.getElementById("question");
        question.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let choice = document.getElementById("choice" + i);
            choice.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progress = document.getElementById("progress");
    progress.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores(){
    let gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    let results = document.getElementById("quiz");
    results.innerHTML = gameOverHTML;
}

const questions = [
    new Question("How many countries have I been to?", ["25", "26", "10", "20"], "26"),
    new Question("Which one of these is not one of my cats?", ["Pinta", "Bintang", "Patches", "Citlali"], "Patches"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

let quiz = new Quiz(questions);

populate();