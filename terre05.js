/*
Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


Exemples d’utilisation :
$> python exo.py 5 2
résultat: 2
reste: 1


$> python exo.py 10 0
erreur.


$> python exo.py 3 5
erreur.
*/

function Divide(){
    const arg = process.argv.slice(2);
    //on lui affiche une message d'erreur si il ya plus de un d'argument
    let num = arg.length;
    if (num != 2){
        console.log("Saisir deux argument.");
        return
    }
    //transform une chaine de caractere  en entier
    num = Number(arg[0]),
    divisor = Number(arg[1]);
    if (Number.isInteger(num) && Number.isInteger(divisor)) {
        //on regarde si le diviseur est superieur a 0 et que le quotient est superieur au diviseur
        if (isGood(divisor,0) && isGood(num,divisor)){
            console.log(`résultat: ${Math.floor(num/divisor)}`)
            console.log(`reste: ${num%divisor}`)
            return
        }
        console.log("erreur.")
        return
    }
    console.log("Saisir des valeurs numeriques")
}

function isGood(FirstValue,SecondValue) {
    if (FirstValue > SecondValue){
        return true
    }
    return false
}


Divide();