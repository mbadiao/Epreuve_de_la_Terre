/*
Créez un programme qui affiche le résultat d’une puissance.


L’exposant ne pourra pas être négatif.


Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


Fonctions interdites: 
-La fonction pow


*/

function pow() {
    const arg = process.argv.slice(2);
    //on lui affiche une message d'erreur si il ya plus de un d'argument
    let num = arg.length;
    if (num != 2){
        console.log("Saisir deux argument.");
        return
    }
    num = Number(arg[0]);
    let power = Number(arg[1]);
    if (Number.isInteger(num) && Number.isInteger(power)) {
        let result = 1;
        //on regarde si le diviseur est superieur a 0 et que le quotient est superieur au diviseur
        if (isGood(power,0)){
           for (let i = 0; i < power;i++){
            result *= num
           }
           console.log(result);
            return
        }
        console.log("erreur.");
        return
    }
    console.log("Saisir des valeurs numeriques");
}

function isGood(FirstValue,SecondValue) {
    if (FirstValue >= SecondValue){
        return true
    }
    return false
}



pow();