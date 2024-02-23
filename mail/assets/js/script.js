// Mail Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
//
//Bonus
//Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.



//seleziono il tasto submit
let button = document.getElementById('submit_button');


button.addEventListener('click', (e) => {
    e.preventDefault()


    var ok = ["seko@gmail.com", "alba@outlook.it"];


    // /^\w+([\.-] ?\w +) *@\w + ([\.-] ?\w +)* (\.\w{ 2, 3 }) +$ /.test(email), 

    for (i = 0; i < ok.length; i++) {

        // recupero il valore dell'input
        let email = document.getElementById('input').value;

        // se non ho inserito nulla nel campo
        if (email == '') {
            alert("Devi indicare un indirizzo email"); return false;
        }
        console.log(typeof email, email);
        // verifico se è un indirizzo valido


        var valid = document.getElementById('valid');
        if (email == ok[i]) {
            var textNode = document.createTextNode("L'indirizzo email che hai inserito e' valido");
        }
        else {
            var textNode = document.createTextNode("L'indirizzo email che hai inserito non e' valido");
        }
        valid.appendChild(textNode);
        return true;




    }






});


const deleteAll = document.getElementById('annulla');

deleteAll.addEventListener('click', () => {

    location.reload();
});

