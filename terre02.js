/*
    Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.
*/

function PrintArgv() {
    // on prend les arguments sans le chemain et le nom du fichier 
    const arg = process.argv.slice(2);
    //virification du nombre d'argument 
    if (arg.length === 0) {
     console.log("Veuillez saisir au moins un argument");
     return
    }
    //parcourir et afficher les argument ligne par ligne
    for (let i = 0; i < arg.length; i++) {
     console.log(arg[i]);
    } 
 }
 
 PrintArgv();