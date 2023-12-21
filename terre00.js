/*
    Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne.
*/

function  PrintAlphabet() {
    let Alphabet = '' ;
    for (let i = 97; i <= 122; i++) {
        Alphabet += String.fromCharCode(i);
    }
    console.log(Alphabet);
}

PrintAlphabet();