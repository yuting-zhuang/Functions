//Define an object that contains the vocabulary lists for all styles.
const wordBank = {
	surreal:{
		subjects:[
			"The dream machine", "The bionic sheep","The lunar fish"
		],

		verbs:[
			"scans", "dissolves into", "echoes through"
		],

		adjectives:[
			"pixelated", "invisible", "glitching"
		],

		objects:[
			"time loops", "a floating city", "memory fragments"
		]
	}

	nature:{
		subjects:[
			"The mossy stone", "The glowing firefly","The river"
		],

		verbs:[
			"sings to", "flows over", "wraps"
		],

		adjectives:[
			"shimmering", "soft-spoken", "misty"
		],

		objects:[
			"heartbeat of earth", "fading sun", "dewdrop stories"
		]
	}
};


//Define a utility function to randomly select an element from an array.
function random(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}


//Generating sentences.
function generateSentence() {

	//Get the style currently selected by the user (retrieve the selected value from the dropdown menu).
	const style = document.getElementById("style-container").value;

	//Get the vocabulary object (subject, verb, adjective, object) from the corresponding style.
	const bank = wordBank[style];

	//Combine the sentence according to the structure.
	const sentence = `${random(bank.subjects)} ${random(bank.verbs)} the ${random(bank.adjectives)} ${random(bank.objects)}.`;

	//Display the generated sentence on the page (insert it into the element with the ID "output").
	document.getElementById("output").textContent = sentence
}

//Bind a click event to the button: run the generateSentence function when the button is clicked.
document.getElementById("generate-button").addEventListener("click", generateSentence);