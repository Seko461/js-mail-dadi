// Mail Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
//
//Bonus
//Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.



//seleziono il tasto submit
let button = document.getElementById('submit_button');
const ok = ['seko@mail.com', 'alba@outlook.it', 'dome@pinco.it', 'gigi@pollo.com'];
console.log(ok);
console.log(ok.length);



button.addEventListener('click', (e) => {
    e.preventDefault();
    // recupero il valore dell'input
    let email = document.getElementById('input').value;
    // se non ho inserito nulla nel campo
    if (email == '') {
        alert("Devi indicare un indirizzo email"); return false;
    };

    let canAccess = false;

    console.log(typeof email, email);

    for (i = 0; i < ok.length; i++) {
        let person = ok[i];
        // verifico se è un indirizzo valido
        var valid = document.getElementById('valid');
        if (person === email) {

            console.log(i);
            // document.write('ok')
            canAccess = true;
        }


    }
    if (canAccess) {
        console.log('ok')
        var textNode = document.createTextNode('ok')
    } else {
        console.log('no')
        var textNode = document.createTextNode('no')
    }



    valid.append(textNode);



});


const deleteAll = document.getElementById('annulla');

deleteAll.addEventListener('click', () => {

    location.reload();
});

