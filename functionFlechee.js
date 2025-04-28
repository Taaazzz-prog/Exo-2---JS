//Faire une fonction flechee d'une variable pair qui va dire si la valeur est pair ou impair

let numbers = 5

const estPair = numbers => numbers % 2 == 0
//Si la fonction estPair est un nombre pair, on va dire que c'est un nombre pair
//Si la fonction estPair est un nombre impair, on va dire que c'est un nombre impair

    if(estPair(numbers) == true){
       // console.log("La valeur est pair")
    }
    else{
       // console.log("La valeur est impair")
    }

//On va créé un compteur avec la fonction closure
let compteur = 0
function incrementer() {
    compteur++
    return compteur
}

//console.log(incrementer())
//console.log(incrementer())    


//Cree une fonction executerAvecCallback qui prend un message et une fonction callback
//elle doit executer le callback avec le message
let message = "blob"
function executerAvecCallback(message, callback) {
    callback(message)
}
//Cree une fonction qui va afficher le message
function afficherMessage(message) {
    //console.log(message)
}
//Appel la fonction executerAvecCallback avec le message et la fonction afficherMessage
executerAvecCallback("Bonjour", afficherMessage)




let mot = "quoi"

function afficherMot(rep) {
    
    console.log(rep, "!")
}

function traiterMot(callback) {
    const rep = "feur"
    if (mot == "quoi") {
            console.log(mot, "?")
        }

    else {
            console.log("hein ?")
            return 0
        }
    
    callback(rep)
}

//traiterMot(afficherMot)







function connexion30min (parametre1) {
    console.log("Connexion 30 min");
    return parametre1;
}
    //console.log("Log 2");

function ecrireLog10sec () {
    //console.log("Log 1");
}



//Cree une fonction recursive qui va afficher les nombres de 1 à 10
function afficherNombresRecursif(n) {
    if (n > 10) {
        return;
    }
    console.log(n);
    afficherNombresRecursif(n + 1);
}
//Appel la fonction afficherNombresRecursif avec 1
//afficherNombresRecursif(1)

//cree fonction recursive qui va appeler pour manger et si pas reponse faire un decompte avant de crier a table
function crierATable(decompte) {
    if (decompte > 0) {
        console.log(decompte);
        setTimeout(() => crierATable(decompte - 1), 1000);
    } else {
        console.log("A table !");
    }
}
//Appel la fonction crierATable avec 5
crierATable(5)