class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}



// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions as object here
let questions = [
    new Question(
        "What is the new map updated in valorant?", ["Bind","Split","Accent","Fracture"], "Fracture"),
    new Question(
        "Which team qualify for the VCC LCQ?", ["GE","VLT","ENIGMA","FTrue Rippers"], "GE"),
    new Question(
        "Which team won the PMCO Fall Split 2019?", ["Team SOUL","Team GODL","Team FINATIC","Team TSM Entity"], "Team TSM Entity"),
    new Question(
        "Which company made BGMi?", ["Ubisoft","SGameloft","Krafton","Epic games"], "Krafton" ),
    new Question(
        "Which team won PMIS 2019?", ["Team GE","Team BLIND","Team IND","Team SOUL"], "Team SOUL"),
     new Question(
        "What is first online mobile game?", ["CoC","Milimilitia","Pokemon Go","Clash Royal"], "FClash royal"),
     new Question(
        "What is the best selling videogame of all time?", ["Candy Crash","BGMI","Minecraft","FTrue CoC"], "Minecraft"),
    new Question(
        "Who released the first flight simulator game?", ["Bing","Microsoft","Android","Play Station"], "Microsoft"),
    new Question(
        "Which game do players compete in the future version of soccer with cars?", ["Asphalt8","Hill Racing","Need for Speed","Rocket League"], "Rocket League" ),
    new Question(
        "Who is the Jett main among these", ["VlT MW1","Enigma Rawfiul","GE SK-Rossi","8bit Rebel"], "GE SK-Rossi"),
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
    new Question(
        "Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question(
        "Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"),
    new Question(
        "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"),
    new Question(
        "Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"),
    new Question(
        "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of ?", ["Asia","Africa","Europe","Australia"], "Africa"),
    new Question(
        "For which of the following disciplines is Nobel Prize awarded?", ["Physics and Chemistry","Physiology or Medicine","Literature, Peace and Economics","All of the above"], "All of the above"),
    new Question(
        "Garampani sanctuary is located at?", ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'], "Diphu, Assam"),
    new Question(
        "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in?", ['1967','1968','1958','1922'], "1967"),
    new Question(
        "Hitler party which came into power in 1933 is known as", ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'], 'Nazi Party'),
    new Question(
        "Which of the following personalities gave ‘The Laws of Heredity’?", ["Robert Hook", "G.J. Mendel","Charles Darwin","William Harvey"], "G.J. Mendel"),
    new Question(
        "Which of the following national parks is not listed in a UNESCO World Heritage site?", ["Kaziranga","Keoladeo","Sundarbans","Kanha"], "Kanha"),
    new Question(
        "Which statement transfer execution to different parts of your code based on the value of an expression?", ["If","Switch","Nested-if","if-else-if"], "Switch"),
    new Question(
        "What feature of OOP has a super-class sub-class concept?", ["Hierarchical inheritance", "Single inheritance","Multiple inheritances", "Multilevel inheritance"], "Hierarchical inheritance"),
    new Question(
        "Which of the following are not the methods of the Thread class?", ["yield()","sleep(long msec)","go()","stop()"], "go()"),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

let arr = []; while(arr.length < 5){ var r = Math.floor(Math.random() * 81) + 1; if(arr.indexOf(r) === -1) arr.push(r); }

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 8;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();