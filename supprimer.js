// Définition d'un tableau d'objets représentant des personnes avec leur nom

var tabs = [
    { name: "Jean" },
    { name: "Luc" },
    { name: "Edouard" },
    { name: "Edouard" },
    { name: "Louis" }
]

// Fonction pour afficher tous les noms présents dans le tableau
function printName(tables) {
    // Parcours de chaque élément du tableau
    tables.forEach((e) => {
        // Affichage du nom de chaque personne
        console.log(`name: ${e.name}`)
    })
}


let name_to_find = "Edouard"

// Fonction pour trouver l'index d'un élément par son nom
function findIndexByName(tabs, name) {
    // Vérification si le tableau est défini et non vide
    if (!tabs || !tabs.length)
        return -1 // Retourne -1 si le tableau est vide ou non défini
    // Parcours du tableau pour rechercher le nom
    for (var i = 0; i < tabs.length; i++) {
        // console.log(tabs[i], i) // Commentaire pour débogage
        if (tabs[i].name == name) {
            // console.log("Ok trouvés à la position", i) // Commentaire pour débogage
            return i // Retourne l'index si le nom est trouvé
        }
    }
    return -1 // Retourne -1 si le nom n'est pas trouvé
}

// Affiche tous les noms du tableau
printName(tabs)

// Fonction pour supprimer toutes les occurrences d'un nom dans le tableau
function deleteEveryItemByName(tables, name_to_delete) {
    // Boucle jusqu'à ce que le nom ne soit plus trouvé
    while (findIndexByName(tables, name_to_delete) != -1) {
        var index = findIndexByName(tables, name_to_delete)
        if (index > -1) {
            // Supprime l'élément à l'index trouvé
            tables.splice(index, 1)
        }
    }
}

// Suppression de toutes les occurrences de "Edouard"
deleteEveryItemByName(tabs, name_to_find)
// Suppression de "Louis"
deleteEveryItemByName(tabs, "Louis")

// Affichage séparateur pour distinguer les résultats
console.log("-----------------")

// Affiche le tableau après suppression
printName(tabs)

//printName(tabs) // Ligne commentée, peut être utilisée pour réafficher si besoin

// Exercice 1 : manipulation d'un tableau de fruits

// Définition d'un tableau de fruits
let fruits = ["pomme", "banane", "kiwi", "orange", "mangue"];

// Créé une fonction removeElementAtIndex(tab, index) qui supprime un élément à la position donnée.
// Teste ta fonction en supprimant l'élément à l'index 2, donc "kiwi"
function removeElementAtIndex(tabs, index) {
    // Vérification que le tableau existe, qu'il a une longueur, que l'index est un nombre et qu'il est positif
    if (tabs && tabs.length && !isNaN(index) && index > -1) {
        // On vérifie que l'index est valide dans le tableau
        // Si oui, on supprime l'élément à cet index
        tabs.splice(index, 1);
    } else {
        // Si les arguments ne sont pas valides, on affiche un message d'erreur
        console.log("removeElementAtIndex n'a pas les bons arguments");
    }
}

// Appel de la fonction pour supprimer l'élément à l'index 2 (le "kiwi")
removeElementAtIndex(fruits, 2);

//console.log(fruits); // Ligne commentée, peut être décommentée pour voir le résultat après suppression



// Exercices 2

// Définition d'un tableau d'objets représentant des utilisateurs avec leur nom
let users  = [
    { name: "Paul" },
    { name: "Emma" },
    { name: "Edouard" },
    { name: "Marc" }
]

// Création d'une fonction findUserById qui doit retourner l'utilisateur correspondant à un identifiant donné (ou null si l'utilisateur n'existe pas)
// La fonction parcourt le tableau et compare l'index avec l'id fourni
function findUserById(users, id) {
    // Boucle pour parcourir tous les utilisateurs
    for (var i = 0; i < users.length; i++) {
        // Si l'index i correspond à l'id recherché, retourner l'utilisateur à cette position
        if (i == id) {
            return users[i]
        }
    }
    // Si aucun utilisateur ne correspond à l'id, retourner null
    return null
}

// Appel de la fonction pour rechercher l'utilisateur avec l'id 5
let user = findUserById(users, 5);
// La ligne ci-dessous est commentée, mais elle permettrait d'afficher le résultat dans la console
// console.log(user);





// Exercices 3

/*                                             #############################################
                                               # Plusieurs façons de créer la fonction splice #
                                               #############################################
*/

// Première méthode : création d'une fonction personnalisée similaire à Array.slice()

// Fonction cda_slice() qui retourne une sous-liste du tableau entre start (inclus) et end (non inclus)
function cda_slice(tab, start, end) {yourDatabaseName
    let newTab = []; // Création d'un nouveau tableau pour stocker la sous-liste

    // Vérification des arguments pour s'assurer qu'ils sont valides
    if (Array.isArray(tab) && !isNaN(start) && !isNaN(end) && start >= 0 && end >= start && start < tab.length) {
        // Parcours du tableau depuis l'index start jusqu'à end (sans dépasser la longueur du tableau)
        for (let i = start; i < end && i < tab.length; i++) {
            newTab.push(tab[i]); // Ajout de chaque élément dans le nouveau tableau
        }
    } else {
        // Si les arguments ne sont pas valides, cette ligne pourrait afficher un message d'erreur (actuellement commentée)
        // console.log("cda_slice n'a pas les bons arguments");
    }
    // Retourne la sous-liste créée
    return newTab;
}

// Exemple d'utilisation : récupérer les éléments entre l'index 1 et 3 du tableau fruits (par exemple, pomme et mangue)
let newFruits = cda_slice(fruits, 1, 3);

// La ligne ci-dessous, si décommentée, afficherait le résultat dans la console
// console.log(newFruits); // Affiche : ['pomme', 'mangue']




// 2ème méthode
// ------------

// Création d'une fonction slice() qui supprime un élément à l'index donné et le nombre d'éléments à supprimer
// La fonction cda_slice(tab, start, count) supprime l'élément à l'index start et les (count - 1) éléments suivants
// Exemple : tester la fonction en supprimant l'élément à l'index 1 et 2 éléments à partir de là
// La fonction cda_slice(tab, start, count) retourne un nouveau tableau sans l'élément à l'index start et les éléments suivants

function cda_slice(tab, start, count) {
    var new_tab = []; // Créer un nouveau tableau pour stocker le résultat
    var find = false; // Indicateur pour savoir si on est en train de supprimer des éléments
    var my_count = 0; // Compteur pour suivre combien d'éléments ont été supprimés

    // Parcourir tous les éléments du tableau original
    for (var i = 0; i < tab.length; i++) {
        // Si l'index actuel n'est pas celui à supprimer et qu'on n'est pas en train de supprimer
        if (i != start && !find) {
            new_tab.push(tab[i]); // Ajouter l'élément au nouveau tableau
        } else {
            // Sinon, on commence ou on continue la suppression
            find = true; // Indiquer qu'on est en train de supprimer
            my_count++; // Incrémenter le compteur de suppression
            // Si on a supprimé le nombre d'éléments souhaité, arrêter la suppression
            if (my_count == count) {
                find = false; // Fin de la suppression, continuer à ajouter les autres éléments
            }
        }
    }
    return new_tab; // Retourner le nouveau tableau sans les éléments supprimés
}

// Exemple d'utilisation : supprimer 2 éléments à partir de l'index 1 dans le tableau 'fruits'
console.log(cda_slice(fruits, 1, 2));


// 3ème méthode
// ------------

// La fonction cda_slice permet de créer un nouveau tableau en supprimant une portion d'un tableau existant (tab)
// à partir d'une position précise (start) et pour une certaine longueur (count)

function cda_slice(tab, start, count) {
    let new_tab = []; // Créer un nouveau tableau pour stocker le résultat
    let end = start + count; // Définir la position de fin de la suppression

    // Parcourir tous les éléments du tableau original
    for (let i = 0; i < tab.length; i++) {
        // Ajouter l'élément au nouveau tableau si son index est avant le début ou après la fin de la portion à supprimer
        if (i < start || i >= end) {
            new_tab.push(tab[i]);
        }
    }
    return new_tab; // Retourner le nouveau tableau sans la portion supprimée
}