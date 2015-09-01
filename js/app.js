$(document).ready(function() {
	loadQuestion(quizQuestions);
});

// var quizQuestions = [
// 	{question: "Pull the other one!", answer: "The Holy Grail", choices: ["The Godfather", "Finding Nemo", "Taxi Driver"]},
// 	{question: "You talkin' to me?", answer: "Taxi Driver", choices: ["Lelo & Stitch", "Men in Black", "Back to the Future"]}
// ];

var questions = [];
var answers = ["The Holy Grail", "Taxi Driver"];
var question1 = new quizQuestion("Pull the other one!", answers[0], ["The Godfather", "Frozen", "Finding Nemo", answers[0]]);
// question1.answer = question1.choices[3];
var question2 = new quizQuestion("You talkin' to me?", answers[1], ["Lelo & Stitch", "Men in Black", answers[1], "Back to the Future"]);
// question2.answer = question2.choices[2];

function quizQuestion(question, answer, choices) {
	this.question = question;
	this.answer = answer;
	this.choices = choices; 
}

function addToQuestions(array, question) {
	array.push(question);
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