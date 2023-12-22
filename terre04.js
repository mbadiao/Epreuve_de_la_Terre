/*
    Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair...
*/

function EvenOrOdd(){
    const arg = process.argv.slice(2);
    //on lui affiche une message d'erreur si il ya plus de un d'argument
    num = arg.length;
    if (num != 1){
        console.log("Tu ne me la mettras pas à l’envers.");
        return
    }
    //transform une chaine de caractere  en entier
    value = Number(arg);
    if (Number.isInteger(value)) {
        //verifie si toute la sequence est valide (1..9)
            valueResult = isEvenOrOdvalueResultd(value);
            console.log(valueResult);
            return
    }
    console.log("Tu ne me la mettras pas à l’envers.");
}

//return pair ou impaire par rapport a la reste de la division par 2 
function isEvenOrOdd(value){
    if (value % 2 === 0){
        return "pair"
    }
    return "impaire"
}


EvenOrOdd();