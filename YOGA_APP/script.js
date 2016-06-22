
// Quiz Object: holds questions, choices and answers.
var quiz = [{

	question:"<img src= \"Yoga/Adho-Muka-Kapotasana.jpg\" width=\"300\"height=\"200\"> <br> Question 1: What is this pose in Sanskrit?",
	choices: ["Adho Muka Kapotasana", "Back Bend", "Vrksasana", "Yoganidrasana"], 
	correct: 0
}, {
	question:"<img src= \"Yoga/Half-Moon-Pose.jpg\" width=\"300\"height=\"200\"> <br> Question 2: What is this pose in Sanskrit?",
	choices: ["Yoganidrasana", "Vrksasana", "Frog", "Ardha Chandrasana"],
	correct: 3
}, {
	question:"<img src= \"Yoga/headstand.jpg\" width=\"300\"height=\"200\"> <br> Question 3: What is this pose in Sanskrit?",
	choices: ["Yoganidrasana", "Sirasasana", "Adho Muka Kapotasana", "Chandrasana"],
	correct: 1
}, {
	question:"<img src= \"Yoga/Vrksasana.jpg\" width=\"300\"height=\"200\"> <br> Question 4: What is this pose in Sanskrit?",
	choices: ["Frog", "Vrksasana", "Yoganidrasana", "Sirasasana"],
	correct: 1
}, {
	question:"<img src= \"Yoga/Yoganidrasana.jpg\" width=\"300\"height=\"200\"> <br> Question 5: What is this pose in Sanskrit?",
	choices: ["Vrksasana", "Adho Muka Kapotasana", "Yoganidrasana", "kolo"],
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







