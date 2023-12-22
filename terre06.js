/*
Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH


$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


Fonctions interdites: 
-La fonction reverse

*/

function Reverse(){
    const arg = process.argv.slice(2);
    //on lui affiche une message d'erreur si il ya plus de un d'argument
    let num = arg.length;
    if (num != 1){
        console.log("Saisir (1) un argument.");
        return
    }
    let result = "";
    // on prend l'argument qui nous donne le chemin absolue
    const argument = process.argv[2];
    //n le parcoure en l'envers et on arret la bloucle si on a un slash / ou un anti slash \
    for (let j = argument.length - 1; j >= 0; j--) {
       const caractere = argument[j];
       // on concataine en ajoutant la derniere lettre .  
       result += caractere ;
    }
    console.log(result);
}

Reverse();