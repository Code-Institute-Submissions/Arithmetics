"use strict";

let map;
function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById('map'),
    placeTypePreferences: ['restaurant', 'tourist_attraction'],
    maxPlaceCount: 12,
  });
  map = localContextMapView.map;
  map.setOptions({
    center: {lat: 51.507307, lng: -0.081140},
    zoom: 14
  });
}

let total = 0;
let totalTwo = 0;
const ADDITION_OPERATION = "addition";
const MULTIPLICATION_OPERATION = "multiplication";


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
    let firstNumber = parseInt(Math.random()*10);
    let secondNumber = parseInt(Math.random()*10);

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

 let operation  = getOperationToValidate(event.currentTarget.id)
   let answer = getAnswer(operation)

    if (isAnswerValid(operation, answer)){
        msg.innerText = `Well done, that is correct!`;
        resetNumbers();
    } else {
        msg.innerText = `Sorry. Incorrect. The correct answer was ${totalTwo} .`;
        resetNumbers();

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
        return  Number(guessaddition);
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

(function() {
   
    resetNumbers();
    let button = document.getElementById('btn')
    button.addEventListener('click', validateAnswer);

    let buttontwo = document.getElementById('btnmultiplication')
    buttontwo.addEventListener('click', validateAnswer);


})();