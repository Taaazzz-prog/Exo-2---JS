/*
Ce code définit un tableau avec les nombre 4 - 5- 2- 8- 10- 12.
    chiffres

On déclare une nouvelle variable puis on l'initialise avec une valeur 0
    somme

Ensuite, avec
    forEach

 On parcourt chaque nombre du tableau et l'ajoute à
    somme

 Enfin, il affiche le résultat avec le console.(log)

*/

const chiffres1 = [4, 5, 2, 8, 10, 12];
let somme = 0;

chiffres1.forEach((nombre) => {
  somme += nombre;
});

console.log("La somme des chiffres est :", somme);









/*

Ici on va sécuriser la même fonction que précédemment mais en améliorant la sécurité et la lisibilité.


Explications des améliorations :

Vérification que
chiffres
est bien un tableau avec
Array.isArray()
.
Vérification que tous les éléments du tableau sont des nombres avec
every()
.
Ajout d'une vérification dans la boucle pour s'assurer que chaque élément est un nombre avant de l'ajouter, ce qui évite des erreurs si le tableau est modifié ou mal rempli.
Utilisation de
console.warn()
pour signaler tout élément inattendu.
Utilisation de
console.error()
pour signaler si le tableau n'est pas conforme.
*/



// Définition du tableau contenant les chiffres
const chiffres = [4, 5, 2, 8, 10, 12];

// Vérification que 'chiffres' est bien un tableau et qu'il ne contient que des nombres
if (Array.isArray(chiffres) && chiffres.every(n => typeof n === 'number')) {
    // Initialisation de la variable 'somme' à 0
    let somme = 0;

    // Parcours sécurisé du tableau avec forEach
    chiffres.forEach((nombre) => {
        // Vérification que chaque élément est bien un nombre avant de l'ajouter
        if (typeof nombre === 'number') {
            somme += nombre;
        } else {
            console.warn('Un élément du tableau n\'est pas un nombre :', nombre);
        }
    });

    // Affichage du résultat dans la console
    console.log("La somme des chiffres est :", somme);
} else {
    // Si le tableau n'est pas valide, afficher une erreur
    console.error('Le tableau "chiffres" n\'est pas valide ou ne contient pas uniquement des nombres.');
}