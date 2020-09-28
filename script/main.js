"use strict";
/**  Originally used code below from JS math addition game, which I amended and restructured. Credits are in README.md
 * The original code can be found on that website, additionally I have made a const.js file, where you can find the remaining code
 **/

let total = 0;
let totalTwo = 0;


function resetNumbers() {
	generateNumbers("num1", "num2", ADDITION_OPERATION);
	generateNumbers("num3", "num4", MULTIPLICATION_OPERATION);
	clearAnswers();
}

function clearAnswers() {
	document.getElementById("guessaddition").value = "";
	document.getElementById("guessmultiplication").value = "";
}

/**
 * Generates randon numbers for the game
 * @param {String} elemOne  Html element Id to set the first random number.
 * @param {String} elemTwo  Html element Id to set the second random number.
 * @param {String} operationType  name of arithematic operation. e.g. addition.
 **/
function generateNumbers(elemOne, elemTwo, operationType) {
	let firstNumber = parseInt(Math.random() * 15);
	let secondNumber = parseInt(Math.random() * 15);

	if (operationType === MULTIPLICATION_OPERATION) {
		totalTwo = firstNumber * secondNumber;
	} else if (operationType === ADDITION_OPERATION) {
		total = firstNumber + secondNumber;
	}
	let primary = document.getElementById(elemOne);
	primary.innerHTML = `${firstNumber}`;

	let secondary = document.getElementById(elemTwo);
	secondary.innerHTML = `${secondNumber}`;

}

function validateAnswer(event) {

	let operation = getOperationToValidate(event.currentTarget.id)
	let answer = getAnswer(operation)

	if (isAnswerValid(operation, answer)) {
		msg.innerText = USER_SUCCESS;
		resetNumbers();
	} else {
		msg.innerText = USER_FAIL + getOriginalAnswer(operation);
		resetNumbers();

	}
}

function getOriginalAnswer(operation) {
	if (operation === ADDITION_OPERATION) {
		return total;
	} else if (operation == MULTIPLICATION_OPERATION) {
		return totalTwo;
	}
}

/**
 * Fetches the user input by the arthimatic operation.
 * @param {String} operation  name of arithematic operation. e.g. addition.
 * @returns {Number} Number added by user.
 **/
function getAnswer(operation) {
	if (operation === ADDITION_OPERATION) {
		let guessaddition = document.getElementById('guessaddition').value;
		return Number(guessaddition);
	} else if (operation == MULTIPLICATION_OPERATION) {
		let guessmultiplication = document.getElementById('guessmultiplication').value;
		return Number(guessmultiplication);
	}
	return -1;
}

function getOperationToValidate(btnId) {
	if (btnId === "btn") {
		return ADDITION_OPERATION;
	} else if (btnId == "btnmultiplication") {
		return MULTIPLICATION_OPERATION;
	}
	return null;
}

function isAnswerValid(elemId, answer) {
	if (elemId === ADDITION_OPERATION) {
		return answer === total;
	} else if (elemId === MULTIPLICATION_OPERATION) {
		return answer === totalTwo;
	} else {
		return false;
	}
}

(function () {

	resetNumbers();
	let button = document.getElementById('btn')
	button.addEventListener('click', validateAnswer);

	let buttontwo = document.getElementById('btnmultiplication')
	buttontwo.addEventListener('click', validateAnswer);


})();

// Declarations to keep the compiler happy. This code was taken from Google maps API website.
/**
 * @param {!google.maps.Map} map
 * @param {!Array<!google.maps.Marker>} markers
 * @param {!Object} options
 * @constructor
 */
function MarkerClusterer(map, markers, options) {}

function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: {
			lat: 54.5260,
			lng: 15.2551
		},
	});
	// Create an array of alphabetical characters used to label the markers.
	const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// Add some markers to the map.
	const markers = LOCATIONS.map((location, i) => {
		return new google.maps.Marker({
			position: location,
			label: labels[i % labels.length],
		});
	});
	// Add a marker clusterer to manage the markers.
	const markerCluster = new MarkerClusterer(map, markers, {
		imagePath: MARKER_URL
	});
}
 
 