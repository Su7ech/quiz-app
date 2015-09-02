$(document).ready(function() {
	runQuiz.displayQuestion();
});

// var quizQuestions = [
// 	{question: "Pull the other one!", answer: "The Holy Grail", choices: ["The Godfather", "Finding Nemo", "Taxi Driver"]},
// 	{question: "You talkin' to me?", answer: "Taxi Driver", choices: ["Lelo & Stitch", "Men in Black", "Back to the Future"]}
// ];

// var questions = [];
// var answers = ["The Holy Grail", "Taxi Driver"];



// var quizQuestion = function(question, answer, choices) {
// 	this.question = question;
// 	this.answer = answer;
// 	this.choices = choices; 
// }

var quizQuestion = {
	q:  [],
	addQuestion: function(question, answer, choices) {
		this.q.push({
			question: question,
			answer: answer,
			choices: choices
		});
	},
	getQuestion: function(count) {
		return this.q[count];
	}
}
// quizQuestion.prototype.addToArray = function(questions) {
// 	questions.push(quizQuestion);
// }

var question1 = quizQuestion.addQuestion("Pull the other one!", "The Holy Grail", ["The Godfather", "Frozen", "Finding Nemo", "The Holy Grail"]);
var question2 = quizQuestion.addQuestion("You talkin' to me?", "Taxi Driver", ["Lelo & Stitch", "Men in Black", "Taxi Driver", "Back to the Future"]);

// function loadQuestion(count) {
// 	var quizQuestions = []
// 	quizQuestions.push(question1, question2);
// 	count = quizQuestions.length;
// 	return quizQuestions.slice(0, count);
// }

var runQuiz = {
	counter: 0,
	playerScore: 0,
	question: quizQuestion.q,
	displayQuestion: function() {
		var currentQuestion = this.question[this.counter];
		var questionDiv = document.getElementById('quote'); // container for quote
		var node = document.createElement('h1'); // header tag for quote
		var quote = document.createTextNode(currentQuestion.question); // current quote
		var choicesDiv = document.getElementById('choices'); // Unordered list for choices
		var qChoices = currentQuestion.choices; // possible answers for current quote
		var arrayLength = qChoices.length; // Length of the array of possible answers

		console.log(currentQuestion);
		console.log(arrayLength);


		node.appendChild(quote);
		questionDiv.appendChild(node);

		for (var i = 0; i < arrayLength; i++) {
			var item = document.createElement('li');
			var button = document.createElement('button')

			button.innerHTML = qChoices[i];
			button.className += 'answer';
			item.appendChild(button);
			choicesDiv.appendChild(item);

		}
	}
}


// function loadQuestion(quizQuestions) {
// 	var questions = quizQuestions.length;
// 	var counter = 0;
// 	var currentQuestion = quizQuestions[counter];
// 	var currentDiv = document.getElementById('quote');
// 	var node = document.createElement('h2');
// 	var quote = document.createTextNode(currentQuestion.question);

// 	node.appendChild(quote);
// 	currentDiv.appendChild(node);

// 	console.log(currentQuestion);
// }