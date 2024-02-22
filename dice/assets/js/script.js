// Gioco dei dadi
// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero un numero random tra 1 e 6
let x = Math.floor(Math.random() * 6);
let y = Math.floor(Math.random() * 6);
// console.log(x);
let xValue = x;
let yValue = y;

console.log(xValue);
console.log(yValue);


let player_1 = document.getElementById('player_1')
let number_1 = document.getElementById('number_1')

player_1.addEventListener('click', () => {
    var textNode = document.createTextNode(xValue);
    number_1.append(textNode);
})


let player_2 = document.getElementById('player_2')
let number_2 = document.getElementById('number_2')

player_2.addEventListener('click', () => {
    var textNode = document.createTextNode(yValue);
    number_2.append(textNode);
})