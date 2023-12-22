/*
Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.


Exemples d’utilisation :
$> python exo.py “Hello world!”
12


$> python exo.py
erreur.


$> python exo.py “Bonjour” “Aurevoir”
erreur.

$> python exo.py 10
erreur.


Fonctions interdites: 
-La fonction length
-La fonction size

*/


function length(){
    const arg = process.argv.slice(2);
    //on lui affiche une message d'erreur si il ya plus de un d'argument
    let num = arg.length;
    if (num != 1){
        console.log("Saisir (1) un argument.");
        return
    }
    let result = 0;
    // on prend l'argument qui nous donne le chemin absolue
    const argument = process.argv[2];
    //n le parcoure en l'envers et on arret la bloucle si on a un slash / ou un anti slash \
    for (let j = 0; j <= argument.length - 1; j++) {
       result ++;
    }
    console.log(result);
}


length();