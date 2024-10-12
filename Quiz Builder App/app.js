const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.textContent = ans.text;
        button.classList.add("btn");
        answerContainer.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAns);
    });
}

function selectAns(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerContainer.children).forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextButton.style.display = "block";
}

function resetState() {
    nextButton.style.display = "none";
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild);
    }
}


nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} is out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    // nextButton.addEventListener("click", startQuiz); 
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();

    } else {
        showScore();
    }
}

startQuiz();