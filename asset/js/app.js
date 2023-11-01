let selector = (element) => document.querySelector(element);
let allSelector = (element) => document.querySelectorAll(element);
const questions = [
	{
		question: "Which is the largest animal in the world?",
		answers: [
			{ text: "Shark", correct: false },
			{ text: "Blue whale", correct: true },
			{ text: "Elephant", correct: false },
			{ text: "Giraffe", correct: false },
		],
	},
	{
		question: "Which is the largest desert in the world?",
		answers: [
			{ text: "Kalahari", correct: false },
			{ text: "Gobi", correct: false },
			{ text: "Sahara", correct: false },
			{ text: "Antarctica", correct: true },
		],
	},
	{
		question: "Which is the smallest country in the world?",
		answers: [
			{ text: "Vatican City", correct: true },
			{ text: "Bhutan", correct: false },
			{ text: "Nepal", correct: false },
			{ text: "Sri Lanka", correct: false },
		],
	},
	{
		question: "Which is the smallest continent in the world?",
		answers: [
			{ text: "Asia", correct: false },
			{ text: "Australia", correct: true },
			{ text: "Arctic", correct: false },
			{ text: "Africa", correct: false },
		],
	},
];

const questionElement = selector("#question");
const answerButton = selector("#answer-buttons");
const nextButton = selector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	// answerButton.innerHTML = ""
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNO = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNO + ". " + currentQuestion.question;
	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
			button.addEventListener("click", selectAnswer);
		
	});
}
function resetState() {
	nextButton.style.display = "none";
	while (answerButton.firstChild) {
		answerButton.removeChild(answerButton.firstChild);
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true"
	if (isCorrect) {
		selectedBtn.classList.add("correct")
		
	} else {
		selectedBtn.classList.add("incorrect")
	}
}
startQuiz();
