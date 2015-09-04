$(document).ready(function() {
	runQuiz.displayQuestion();
	$('.answer').click(function() {
		var userChoice = $(this).text();
		runQuiz.checkAnswer(userChoice);
		$('#quiz').hide();
		$('#answer').show();
	});
	$('#next').click(function() {
		var userChoice = '';
		runQuiz.counter += 1;
		runQuiz.nextQuestion();
	});
});

var quizQuestion = {
	q:  [],
	addQuestion: function(question, answer, choices, desc) {
		this.q.push({
			question: question,
			answer: answer,
			choices: choices,
			desc: desc
		});
	},
	getQuestion: function(count) {
		return this.q[count];
	}
}

var question1 = quizQuestion.addQuestion("Pull the other one!", "The Holy Grail", ["The Godfather", "Frozen", "Finding Nemo", "The Holy Grail"], "This line is used in the movie, 'Monty Python and The Holy Grail' during the fight between King Arthur and the Black Knight");
var question2 = quizQuestion.addQuestion("You talkin' to me?", "Taxi Driver", ["Lelo & Stitch", "Men in Black", "Taxi Driver", "Back to the Future"], "This line is from the movie 'Taxi Driver'. It is said by Robert De'Niro's character when he's speaking to the mirror in his home");

var runQuiz = {
	currentQuestion: '',
	counter: 0,
	playerScore: 0,
	questions: quizQuestion.q,
	displayQuestion: function() {
		this.currentQuestion = quizQuestion.getQuestion(this.counter);
		var quote = this.currentQuestion.question;
		var qChoices = this.currentQuestion.choices; // possible answers for current quote
		var arrayLength = qChoices.length; // Length of the array of possible answers

		$('#quiz').find('#quote').prepend('<h1>' + quote + '</h1>');
		
		for (var i = 0; i < arrayLength; i++) {
			$('#quiz').find('#choices').prepend("<li><button class='answer'>" + qChoices[i] + "</button></li>");
		}
	},
	checkAnswer: function(user) {
		var answer = this.currentQuestion.answer;
		var correct = "You got it! It's " + answer;
		var wrong = "Incorrect, the answer is " + answer;
		console.log(answer);
		$('#answer').show().find('.answer-header').prepend("<h2>" + (user == answer ? correct : wrong) + "</h2>");
		
	},
	nextQuestion: function() {
		$('#quote').empty();
		$('#choices').empty();
		$('.answer-header').empty();
		$('.answer-desc').empty();
		$('#answer').hide();
		$('#quiz').show();
		this.displayQuestion();
	}
}