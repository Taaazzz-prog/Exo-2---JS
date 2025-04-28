//Ecris une fonction eliminerTriplons(tab) qui retourne un tableau en supprimant tous les éléments qui apparaissent 3 fois ou plus
//eliminerTriplons([1,2,2,2,3,3,4,4,4,4]); //Résultats attendu [1,3,3]


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