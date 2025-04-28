//Ecris une fonction eliminerTriplons(tab) qui retourne un tableau en supprimant tous les éléments qui apparaissent 3 fois ou plus
//eliminerTriplons([1,2,2,2,3,3,4,4,4,4]); //Résultats attendu [1,3,3]

//1er methode
//-----------

function eliminerTriplons(tab) {
    let triplons = [];

    // Compter le nombre de triplons de chaque élément
    for (let i = 0; i < tab.length; i++) {
        let veleurTableau = tab[i];
        if (triplons[veleurTableau] === undefined) { //vérifie si la valeur val n’existe pas encore dans l’objet triplons
            triplons[veleurTableau] = 1; //Si c’est la première fois qu’on voit cette valeur, on initialise son compteur à 1
        } else {
            triplons[veleurTableau]++; //Sinon, c’est qu’on a déjà vu cette valeur, donc on incrémente son compteur de 1
        }
    }

    // Créer un nouveau tableau avec les éléments apparaissant moins de 3 fois
    let resultat = [];
    for (let i = 0; i < tab.length; i++) {
        if (triplons[tab[i]] < 3) { //Si la valeur du triplons est plus petit que 3
            resultat.push(tab[i]); //On la rentre dans le tableau
        }
    }

    return resultat;
}

// Exemple d'utilisation
console.log(eliminerTriplons([1,2,2,2,3,3,4,4,4,4])); // Résultat attendu : [1,3,3]



//2eme Methode
//------------

/*

EX2 : 
Écris une fonction eliminerTriplons(tab) qui retourne un tableau 
en supprimant tous les éléments qui apparaissent 3 fois ou plus

// Exemple :
eliminerTriplons([1,2,2,2,3,3,4,4,4,4]); // [1,3,3]
Explication de l'exemple :

Le nombre 1 apparaît 1 fois → on le garde.
Le nombre 2 apparaît 3 fois → on le supprime totalement.
Le nombre 3 apparaît 2 fois → on garde les deux occurrences.
Le nombre 4 apparaît 4 fois → on le supprime totalement.

Etape 1 : Créer un tableau vide qui stockera uniquement les éléments autorisés (ceux apparaissant moins de 3 fois). - OK
Etape 2 : Parcourir chaque élément du tableau initial un par un.
Etape 3 : Pour chaque élément actuellement parcouru :
                Re-parcourir tout le tableau depuis le début.
                Compter précisément combien de fois l’élément apparaît au total.
Etape 4 : Analyser le résultat du compteur précédent :
                Si l’élément apparaît strictement moins de 3 fois, l’ajouter au tableau final.
                Sinon (3 fois ou plus), ne pas l'ajouter.
Etape 5 : Une fois tous les éléments vérifiés, retourner le tableau final.  - OK

*/
console.log("--------------------------------")

function eliminerTriplons(tabs) {
    let results = []
    for (var i = 0; i < tabs.length; i++) {
        let compteur = 0
        for (var j = 0; j < tabs.length; j++) {
            if (tabs[i] == tabs[j])
                    compteur++
        }
        if ( compteur < 3) {
            results.push(tabs[i])
        }
    }
    return results
}

console.log(eliminerTriplons([1,2,2,2,3,3,4,4,4,4])); // [1,3,3]