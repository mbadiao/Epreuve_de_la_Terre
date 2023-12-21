/*
    Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument 
    en lettres minuscules suivi d’un retour à la ligne.
*/

function PrintLastAlphabet() {
    const arg = process.argv.slice(2);
    //on lui affiche une message d'erreur si il ya plus de un d'argument
    num = arg.length;
    if (num != 1){
        console.log("Veuillez saisir un argument ");
        return
    }
    //on lui affiche une message d'erreur pour verifier l'argument qu'il saisie
    if (arg[0].length != 1) {
        console.log("Veuillez saisir un caracter de l'alphabet valide (a..z)");
        return
    }
    ascci = arg[0].charCodeAt(0);
    //on transform l'argument en ascci puis avec la fonction PrintAlphabet on parcour a partir du code ascci
    if (ascci < 97  || ascci > 122 ) {
        console.log("Veuillez saisir un caracter de l'alphabet valide (a..z)");
        return
    }
    PrintAlphabet(ascci);
}

//j'ai utiliser la fonction dans terre00.js avec un parametre cette fois
function  PrintAlphabet(value) {
    let Alphabet = '' ;
    for (let i = value; i <= 122; i++) {
        Alphabet += String.fromCharCode(i);
    }
    console.log(Alphabet);
}


PrintLastAlphabet();