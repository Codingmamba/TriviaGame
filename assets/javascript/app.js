var stopwatch = {
	number: 31,
	run: function () {
		counter = setInterval(stopwatch.increment, 1000);
	},
	increment: function() {
		stopwatch.number--;
      	$('#show-number').html('<h2>' + stopwatch.number + '</h2>');
      	if (stopwatch.number === 0){
        	stopwatch.stop();
		}
	},
	stop: function() {
		clearInterval(counter);
	}
};
// Where all of the questions are placed in arrays
var quiz = [ {
		question: "Question 1 - What is the name of this basketball team?",
		picture: "assets/images/heat.png",
		choices: ['Los Angeles Lakers','Miami Heat','Indiana Pacers','New Orleans Pelicans'],
		correct: 1,
	},
	{	question: "Question 2 - How tall is an NBA rim?",
		picture: 'assets/images/rim.png',
		choices: ['12 foot','11.5 foot','9 foot','10 foot'],
		correct: 3,
	},
	{	question: "Question 3 - Who was the #1 draft pick in 2003?",
		picture: 'assets/images/draft.png',
		choices: ['Mike Bibby','Kobe Byrant','LeBron James','Carmelo Anthony'],
		correct: 2,
	},
	{	question: "Question 4 - What player has the most assists in one game? - 30",
		picture: 'assets/images/assist.png',
		choices: ['Scott Skiles','John Stockton','Chris Paul','Rajon Rondo'],
		correct: 0,
	},
	{	question: "Question 5 - What team holds the record for the most consecutive NBA titles?",
		picture: 'assets/images/trophy.png',
		choices: ['San Antonio Spurs','Seattle Supersonics','Atlanta Hawks','Boston Celtics'],
		correct: 3,
	},
	{	question: "Question 6 - What player scored the most points in one game?",
		picture: 'assets/images/hundred.png',
		choices: ['Michael Jordan','Magic Johnson','Wilt Chamberlain','Larry Bird'],
		correct: 2,
	},
	{	question: "Question 7 - How many fouls are needed to become 'fouled out'?",
		picture: 'assets/images/foul.png',
		choices: ['3','5','6','8'],
		correct: 2,
	},
	{	question: "Question 8 - Number of total seconds on the shot clock??",
		picture: 'assets/images/shot.png',
		choices: ['24','32','18','28'],
		correct: 0,
	},
	{	question: "Question 9 - Which team has the best regular season record?",
		picture: 'assets/images/wins.gif',
		choices: ['Celtics','Heat','Cavaliesrs','Warriors'],
		correct: 3,
	},
	{	question: "Question 10 - Who was the #1 draft pick in 2011?",
		picture: 'assets/images/draft11.png',
		choices: ['Kyrie Irving','Dion Waiters','Clay Thompson','Paul George'],
		correct: 0,
	},	
	{	question: "Question 11 - The 15/16 season NBA championship series went to how many games?",
		picture: 'assets/images/finals.jpg',
		choices: ['4','7','5','6'],
		correct: 1,	
	},
	{	question: "Question 12 - How many championships did Allen Inverson win?",
		picture: 'assets/images/allen.png',
		choices: ["3", "1", "0", "2"],
		correct: 2,
}];

var numQuestions = quiz.length;
var numCorrect = 0;
var counter = 0;

var bballPic = $('<img>');



$('input[name="choice"]').hide;
6
// display question - function
function nextQuest(){

	$('#questions').text(quiz[counter].question);
	bballPic.attr('src', quiz[counter].picture)
	$('#pokes').append(bballPic)
	$('#answer0').text(quiz[counter].choices[0]);
	$('#answer1').text(quiz[counter].choices[1]);
	$('#answer2').text(quiz[counter].choices[2]);
	$('#answer3').text(quiz[counter].choices[3]);
}


// if there is no selection from the user
function validate() {
	if ($('input').is(':checked')) {

		nextQuest(); // display next question
	}
	else {
		//send an alert if a radio button was not selected for an answer
		alert("Please make a selection.");
		counter--;
	}
}

// display first question
nextQuest();


// next button function
$('#nextBtn').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());

	// increment score if indeed correct
	if (answer == quiz[counter].correct) {
		numCorrect++;
	}

	counter++;


	// displays the score on the screen once game is complete
	if (counter >= numQuestions) {
		$('#main').hide().fadeIn("slow");
		document.getElementById('main').innerHTML="Trivia Complete! You scored " + numCorrect + " out of " + numQuestions + "!";
		return; //false
	}

	validate();

	// fade in new question
	$('.card').hide().fadeIn("slow");
	
	// clear previous selection
	$('input[name="choice"]').prop('checked', false);
});


// back button function
$('#backBtn').on('click', function() {
	if (quiz[counter] == 0) {
		$('.card').hide().fadeIn("slow");

	} else {
		// fade out current question and fade in previous question
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
	}

	
	
	// display previous question
	nextQuest();	
});
