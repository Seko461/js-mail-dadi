// Mail Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
//
//Bonus
//Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.



//seleziono il tasto submit
let button = document.getElementById('submit_button');


button.addEventListener('click', () => {

    // recupero il valore dell'input
    let email = document.getElementById('input').value;

    // se non ho inserito nulla nel campo
    if (email == '') {
        alert("Devi indicare un indirizzo email"); return false;
    }

    // verifico se è un indirizzo valido
    let ok = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)]

    for (i = 0; i < ok.length; i++) {


        if (email = ok[i]) {

            alert("L'indirizzo email che hai inserito e' valido")

        }
        else {
            alert("L'indirizzo email che hai inserito non e' valido")
        }
        return false;



    }

})


