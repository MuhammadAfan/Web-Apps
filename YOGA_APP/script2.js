
// Quiz Object: holds questions, choices and answers.
var quiz = [{

	question:"<img src= \"Yoga/Bhuja-Vrischikasana.jpg\" width=\"300\"height=\"200\"> <br> Question 1: What is this pose in English?",
	choices: ["Arm Balance Scorpions", "Back Bend", "Tree Pose", "Boat Pose"], 
	correct: 0
}, {
	question:"<img src= \"Yoga/headstand-side.jpg\" width=\"300\"height=\"200\"> <br> Question 2: What is this pose in English?",
	choices: ["BoatPose", "Ardha Chandrasana", "Turtle", "Side HeadStand"],
	correct: 3
}, {
	question:"<img src= \"Yoga/headstand.jpg\" width=\"300\"height=\"200\"> <br> Question 3: What is this pose in English?",
	choices: ["BoatPose", "HeadStand", "Butterfly", "Tree Pose"],
	correct: 1
}, {
	question:"<img src= \"Yoga/Adho-Mukha-Vrksasana.jpg\" width=\"300\"height=\"200\"> <br> Question 4: What is this pose in English?",
	choices: ["Frog", "Downward Facing Tree", "Butterfly", "Lion"],
	correct: 1
}, {
	question:"<img src= \"Yoga/Akarna-Dhanurasana.jpg\" width=\"300\"height=\"200\"> <br> Question 5: What is this pose in English?",
	choices: ["Triangle Back", "Scorpion", "Formation of a Bow", "Rhino"],
	correct: 2
}];


$(document).ready(function() {
	var numQuestions = quiz.length;
	var numCorrect = 0;
	var counter = 0;

	// display question function
	function nextQuest(){
		$('#questions').html(quiz[counter].question);
		$('#answer0').text(quiz[counter].choices[0]);
		$('#answer1').text(quiz[counter].choices[1]);
		$('#answer2').text(quiz[counter].choices[2]);
		$('#answer3').text(quiz[counter].choices[3]);
	}

	
	// client-sided validation
	function validate() {
		if ($('input').is(':checked')) {
	
			nextQuest(); // display next question
		}
		else {
			alert("Please make a selection.");
			counter--;
		}
	}

	// display first question
	nextQuest();


	// next button function
	$('#nextBtn').on('click', function() {
		var answer = ($('input[name="choice"]:checked').val());

		// increment score if answer is correct
		if (answer == quiz[counter].correct) {
			numCorrect++;
		}

		counter++;


		// display score screen
		if (counter >= numQuestions) {
			$('#main').hide().fadeIn("slow");
			document.getElementById('main').innerHTML="Quiz Complete! You scored " + numCorrect + " out of " + numQuestions;
			return; // returns false *(there has to be a better way! figure it out.)*
		}

		validate();

		// fade in new question
		$('.card').hide().fadeIn("slow");
		
		// clear previous selection
		$('input[name="choice"]').prop('checked', false);
	});


	// back button function
	$('#backBtn').on('click', function() {

		// fade out current question and fade in previous question
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
		
		// display previous question
		nextQuest();	
	});

});







