/*
                                                ########################################################
                                                # Tous les exercices commentés avec //console.log      #
                                                # sont à décommenter pour les afficher dans la console #
                                                ########################################################
*/



//Exercices 6
//-----------

const numbers = [1, 2, 3, 4, 5, 6]
//Créé une fonction qui vérifie si une valeur est pair et retourne true or false
function estPair(valeur) {
    return valeur % 2 == 0
}
// On va utiliser la fonction estPair dans mon tableau numbers et me sortir si c'est vrai ou faux
const pairs3 = numbers.filter(estPair)
//console.log("Voici le tableau des nombres pairs " , pairs3)
//On peut aussi le faire avec une fonction fléchée
const pairs4 = numbers.filter(valeur => valeur % 2 == 0)
//console.log("Voici le tableau des nombres pairs " , pairs4)


//Exercices 7
//-----------

//Créé une fonction saluer qui dira bonjour sophie
function saluer(nom) {
    return "Bonjour " + nom
}
//console.log(saluer("Sophie"))

//Cree fonction saluer sans utiliser le return  
function saluer2(nom) {
    //console.log("Bonjour " + nom)
}
saluer2("Sophie")



//Créé une fonction carré d'une valeur donnée
let valeurAmettreCarre = 4

function carre(valeur) {
    let resultat = valeur * valeur
    return resultat

}
//console.log(carre(valeurAmettreCarre)) 



//Je vais multiplier une valeur par un multiplicateur
//Je vais créer une fonction qui va prendre une valeur et un multiplicateur
let valeurAmettre = 10
let valeurMultiplicateur = 10
function multiplier(valeur, multiplicateur) {
    let resultat = valeur * multiplicateur
    return resultat

}
//console.log(multiplier(valeurAmettre, valeurMultiplicateur))


//ecxercices 8
//-----------


// Créé une fonction pour calculer la moyenne d'un tableau de nombres
// 1. Créer deux tableaux de nombres
const numbers0 = [13, 18, 15, 19];
const numbers1 = [10, 8, 5, 19];

// 2. Créer une fonction getAvg qui va prendre un tableau de nombres en paramètre
// 3. Vérifier que le tableau existe et qu'il est bien un tableau
// 4. Vérifier que le tableau n'est pas vide
// 5. Vérifier que la valeur est bien un nombre et qu'elle n'est pas NaN
// 6. Calculer la somme des valeurs du tableau
// 7. Calculer la moyenne en divisant la somme par le nombre d'éléments du tableau
// 8. Retourner la moyenne
// 9. Si le tableau n'est pas valide ou vide, retourner un message d'erreur
// 10. Appeler la fonction getAvg avec les deux tableaux de nombres et afficher le résultat
// 11. Afficher la moyenne de chaque tableau

function getAvg(table) { //2
    let sum_avg = 0;
    // Vérifie que le tableau existe et qu'il est bien un tableau
    if (table && Array.isArray(table) && table.length > 0) { // 3 et 4
        for (let i = 0; i < table.length; i++) {
            if (!isNaN(table[i])) { // 5
                sum_avg += table[i]; // 6
            }
        }
        // Calcule la moyenne
        return sum_avg / table.length; // 7 et 8
    }
    return "Ce n'est pas un tableau valide ou le tableau est vide"; // 9
}


let moyenne0 = getAvg(numbers0); //10
//console.log("La moyenne est de " + moyenne0); //11
let moyenne1 = getAvg(numbers1); //10
//console.log("La moyenne est de " + moyenne1); //11



//Exercices 9
//-----------



//On créé une variable user qui est un objet 
//On lui met un prénom et un nom
//On lui met une fonction getFullName qui va prendre un paramètre isHere
//Cette fonction va vérifier si isHere est vrai ou faux
//Si c'est vrai, on affiche "Bonjour" sinon "Au revoir"
//On appelle la fonction getFullName de l'objet user et on lui met la valeur true, repond bjr, si false repond au revoir
let user = {
    firstname: "Sophie",
    lastname: "Dupont",

    getFullName: function (isHere) {
        // Vérifie si isHere est vrai ou faux
        // Si c'est vrai, on affiche "Bonjour" sinon "Au revoir"
        if (isHere) {
            console.log("Bonjour " + this.firstname + " " + this.lastname)
        }
        else {
            console.log("Au revoir " + this.firstname + " " + this.lastname)
        }
    }
}
// On appelle la fonction getFullName de l'objet user et on lui met la valeur true, repond bjr, si false repond au revoir
user.getFullName(true)



//Exercices 10
//-----------


//Crée une fonction lancerFour qui va prendre un temps en secondes et une fonction de callback
//Cette fonction va simuler le démarrage d'un four
//Après le temps donné, elle va appeler la fonction de callback avec un message "les gosses à table !!!"
//La fonction de callback va afficher le message du four
//On va utiliser setTimeout pour simuler le temps de cuisson

/* function lancerFour(time, callback) {
    console.log("Je démarre le four");
    setTimeout(() => {
        console.log("j'ai terminé la cuisson");
        callback("les gosses à table !!!");
    }, time*1000);
}

function jaiFini(message) {
    console.log("message du four : " , message);
}
lancerFour(5, jaiFini);
console.log("ok")
 */



//Exercices 11
//-----------


//On va utiliser une boucle for pour calculer la somme des éléments d'un tableau contenant des nombres ( par exemples 1, 2, 3, 4, 5)

let tableau = [1, 2, 3, 4, 5];
let somme = 0;
for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
}
console.log("La somme est de " + somme);

//z