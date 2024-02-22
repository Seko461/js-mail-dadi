// Gioco dei dadi
// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.




let draw = document.getElementById('draw');

draw.addEventListener('click', function () {
    let min = 1;
    let max = 6;
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(x);
    var number1 = document.getElementById('number_1');
    number1.innerHTML = 'Giocatore 1 : ' + x;
    // let min = 1;
    // let max = 6;
    var y = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(y);
    var number2 = document.getElementById('number_2');
    number2.innerHTML = 'Giocatore 2 : ' + y;

    var numbers = [x, y]
    console.log(numbers)

    var p = document.getElementById('vincitore');
    for (let index = 0; index < 1; index++) {
        if (x > y) {
            p.innerHTML = '1 ha vinto'
        }
        else if (x < y) {
            p.innerHTML = '2 ha vinto'
        }
        else {
            p.innerHTML = 'pareggio'
        }

    }
})





