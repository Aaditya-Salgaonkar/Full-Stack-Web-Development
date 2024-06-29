var quizdata = [
    {
        question: 'Which framework is related to JS',
        a: '.net',
        b: 'flask',
        c: 'django',
        d: 'react',
        correct: 'd'
    },
    {
        question: 'css stands for',
        a: '.cascading style sheet',
        b: 'cascading style state',
        c: 'cascading sheet of style',
        d: 'none',
        correct: 'a'
    },
    {
        question: 'Which is not a programming language?',
        a: 'JS',
        b: 'JAVA',
        c: 'HTML',
        d: 'C',
        correct: 'c'
    },
    {
        question: 'Which is not a framework?',
        a: 'JS',
        b: 'django',
        c: 'react',
        d: 'angular',
        correct: 'a'
    }
];

var quizScore = 0;
var currentQuestion = 0;
var quizdiv = document.getElementById('quizdiv');
var submitButton = document.getElementById('submit');

function loadQuestion() {
    var q = quizdata[currentQuestion];
    document.getElementById('question').textContent = q.question;
    document.getElementById('a_value').textContent = q.a;
    document.getElementById('b_value').textContent = q.b;
    document.getElementById('c_value').textContent = q.c;
    document.getElementById('d_value').textContent = q.d;
}

function checkAnswer() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('Please select an answer.');
        return;
    }

    if (selectedOption.id === quizdata[currentQuestion].correct) {
        quizScore++;
    }

    currentQuestion++;

    if (currentQuestion < quizdata.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizdiv.innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`;
}

submitButton.addEventListener('click', checkAnswer);

// Initial question load
loadQuestion();
