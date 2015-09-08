$(document).ready(function() {
	runQuiz.displayQuestion();
	$('#next').click(function() {
		runQuiz.counter += 1;
		runQuiz.nextQuestion();
	});
	$('#new-game').click(function() {
		runQuiz.startNewGame();
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

var question1 = quizQuestion.addQuestion("Pull the other one!", "The Holy Grail", ["The Godfather", "Frozen", "Finding Nemo", "The Holy Grail"], "This line is used in the movie, 'Monty Python and The Holy Grail' during the fight between King Arthur and the Black Knight.");

var question2 = quizQuestion.addQuestion("You talkin' to me?", "Taxi Driver", ["Lelo & Stitch", "Men in Black", "Taxi Driver", "Back to the Future"], "This line is from the movie 'Taxi Driver'. It is said by Robert Di'Niro's character when he's speaking to the mirror in his home.");

var question3 = quizQuestion.addQuestion("Can you understand the words that are coming out of my mouth?", "Rush Hour", ["Shrek", "The Shawshank Redemption", "Goodfellas", "Rush Hour"], "This is a line from the move 'Rush Hour'. It is said early one when Chris Tucker's Character is trying to communicate with Jackie Chan's character.");

var question4 = quizQuestion.addQuestion("This is SPARTA!!!", "300", ["Big Top Pee-Wee", "300", "Battlefield Los Angeles", "Last Holiday"], "This is popular quote from the move '300'. When a messanger brings word of the Persian army to King Leonidas, he responds by shouting the famous quote and kicking the messanger into a deep pit.");

var question5 = quizQuestion.addQuestion("Clever Girl", "Jurassic Park", ["Clockwork Orange", "Toy Story 4", "Jurassic Park", "Aliens"], "This quote is from 'Jurrassic Park'. The quote comes later in the move when game warden, Rober Muldoon, told Ellie to get to a shed for protection and stayed behind. In his final moments, he is attacked by a raptor hiding next to him and that is when we here this famous quote.");

var runQuiz = {
	currentQuestion: '',
	counter: 0,
	playerScore: 0,
	questions: quizQuestion.q,
	welcomeScreen: function() {

	},
	displayQuestion: function() {
		this.currentQuestion = quizQuestion.getQuestion(this.counter);
		var quote = this.currentQuestion.question;
		var qChoices = this.currentQuestion.choices; // possible answers for current quote
		var arrayLength = qChoices.length; // Length of the array of possible answers

		$('#quiz').find('#quote').prepend('<h1>' + quote + '</h1>');
		
		for (var i = 0; i < arrayLength; i++) {
			$('#quiz').find('#choices').prepend("<li><button class='answer'>" + qChoices[i] + "</button></li>");
		}

		$('.answer').click(function() {
			var userChoice = $(this).text();
			console.log(userChoice);
			runQuiz.checkAnswer(userChoice);
			$('#quiz').hide();
			$('#answer').show();
		});
	},
	checkAnswer: function(user) {
		var answer = this.currentQuestion.answer;
		var correct = "You got it! It's " + answer;
		var wrong = "Incorrect, the answer is " + answer;
		var description = this.currentQuestion.desc;
		console.log(answer);

		if (user == answer) {
			$('#answer').show().find('.answer-header').prepend("<h2>" + correct + "</h2>");
			this.playerScore += 1;
		} else {
			$('#answer').show().find('.answer-header').prepend("<h2>" + wrong + "</h2>");
		}
		// $('#answer').show().find('.answer-header').prepend("<h2>" + (user == answer ? correct : wrong) + "</h2>");
		$('#answer').show().find('.answer-desc').prepend("<h3>" + description + "</h3>");
		
	},
	nextQuestion: function() {
		$('#quote').empty();
		$('#choices').empty();
		$('.answer-header').empty();
		$('.answer-desc').empty();
		$('#answer').hide();
		$('#quiz').show();
		if (this.counter < this.questions.length) {
			this.displayQuestion();
		} else {
			this.displayResults();
		}
	},
	displayResults: function() {
		var playerScore = this.playerScore;
		var possibleScore = this.questions.length;
		var finalScore = (playerScore / possibleScore);
		var results = $('.results h2');

		$('#answer').hide();
		$('#quote').hide();
		$('.results-container').show();
		$('.results-header').prepend("<h1>You scored " + playerScore + " out of " + possibleScore);
		if ((playerScore == possibleScore) || (finalScore == 1)) {
			results.text("Perfect Score!!! Way to go!!!");
		} else if (finalScore > 0.7) {
			results.text("Good job! You sure know your quotes");
		} else if (finalScore > 0.5) {
			results.text("Not bad, but I've seen better...");
		} else {
			results.text("Were you even trying?");
		}
		// 	$('.results').prepend("<h2>Perfect Score!!! Nicely done!!!</h2>");
		// } else if ((finalScore / possibleScore) < 0.6) {
		// 	$('.results').prepend("<h2>Better luck next time...</h2>");
		// } else if ((finalScore / possibleScore) < 0.7) {
		// 	$('.results').prepend("<h2>Not bad, could be better though</h2>");
		// } else {
		// 	$('.results').prepend("<h2>Good job, you sure know your movie lines!</h2>");
		// }
	},
	startNewGame: function() {
		$('#answer').hide();
		$('#quote').show();
		$('.results-container').hide();
		$('.results-header').empty();
		$('.results h2').empty();
		this.currentQuestion = '';
		this.counter = 0;
		this.playerScore = 0;
		this.displayQuestion();
	}
}