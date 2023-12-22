/*
    Créez un programme qui affiche son nom de fichier.
*/


function FileName() {
    if (process.argv.length != 2) {
        console.log("Veuillez saisir juste  le nom de fichier")
        return
    }
    let result = "";
    // on prend l'argument qui nous donne le chemin absolue
    const argument = process.argv[1];
    //n le parcoure en l'envers et on arret la bloucle si on a un slash / ou un anti slash \
    for (let j = argument.length - 1; j >= 0; j--) {
       const caractere = argument[j];
       if (caractere == '/' || caractere == '\\') {
        break
       }
       // on concataine en ajoutant la derniere lettre .  
       result = caractere + result;
    }
    console.log(result);
}


FileName();