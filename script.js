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