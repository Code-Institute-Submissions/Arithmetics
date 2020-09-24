let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);


let total = firstNumber + secondNumber;


let primary = document.getElementById('num1');
    primary.innerHTML = `${firstNumber}`;
    
let secondary = document.getElementById('num2');
    secondary.innerHTML = `${secondNumber}`;



let button = document.getElementById('btn')

button.addEventListener('click', function(){

let guessaddition = document.getElementById('guessaddition').value;
    guessaddition = Number(guessaddition);

if (guessaddition === total){
    alert('That is Correct!');
    window.location.reload()
} else {
    alert('Sorry. Incorrect. The correct answer was ' + total + '.')
    window.location.reload()

}
    });







// Multiplication game

let firstNumbers = parseInt(Math.random()*10);
let secondNumbers = parseInt(Math.random()*10);


let totaltwo = firstNumbers * secondNumbers;

    let primarytwo = document.getElementById('num3');
    primarytwo.innerHTML = `${firstNumbers}`;
    
let secondarytwo = document.getElementById('num4');
    secondarytwo.innerHTML = `${secondNumbers}`;



let buttontwo = document.getElementById('btnmultiplication')

buttontwo.addEventListener('click', function(){

let guessmultiplication = document.getElementById('guessmultiplication').value;
    guessmultiplication = Number(guessmultiplication);

if (guessmultiplication === totaltwo){
    alert('That is Correct!');
    window.location.reload()
} else {
    alert('Sorry. Incorrect. The correct answer was ' + totaltwo + '.')
    window.location.reload()

}
    });