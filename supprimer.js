/*
var tabs = [
    { name: "Jean" },
    { name: "Luc" },
    { name: "Edouard" },
    { name: "Edouard" },
    { name: "Louis" }
]

function printName(tables) {
    tables.forEach((e) => {
        console.log(`name: ${e.name}`)
    })
}

//t
let name_to_find = "Edouard"


function findIndexByName(tabs, name) {
    if (!tabs || !tabs.length)
        return -1
    for (var i = 0; i < tabs.length; i++) {
        // console.log(tabs[i], i)
        if (tabs[i].name == name) {
            //  console.log("Ok trouvés à la position", i)
            return i
        }
    }
    return -1
}

printName(tabs)

function deleteEveryItemByName(tables, name_to_delete) {
    while (findIndexByName(tables, name_to_delete) != -1) {
        var index = findIndexByName(tables, name_to_delete)
        if (index > -1) {
            tables.splice(index, 1)
        }
    }
}
deleteEveryItemByName(tabs, name_to_find)
deleteEveryItemByName(tabs, "Louis")

console.log("-----------------")

printName(tabs)

//printName(tabs) 

*/



//Exercices 1

let fruits =["pomme", "banane", "kiwi", "orange", "mangue"];

//Créé une fonction removeElementAtIndex(tab, index) qui supprime un éléments à la position donnée.
//Teste ta fonction en supprimant l'élements à l'index 2 donc kiwi
function removeElementAtIndex(tabs, index) {
    if (tabs && tabs.length && !isNaN(index) && index > -1) {
        //On vérifie que l'index est valide
        tabs.splice(index, 1);
    }else
        console.log("removeElementAtIndex n'a pas les bons arguments");
}
//On appel la fonction en lui passant le tableau et l'index de l'élement à supprimer
removeElementAtIndex(fruits, 2);

//console.log(fruits);



//Exercices 2

let users  = [
    { name: "Paul" },
    { name: "Emma" },
    { name: "Edouard" },
    { name: "Marc" }
]
//Créé une fonction findUserById(users, id) qui retourne l'utilisateur correspondant à l'id donné (ou null si l'utilisateurs n'existe pas).
//Teste ta fonction pour trouver l'utilisateurs avec l'id 3
function findUserById(users, id) {

    for (var i = 0; i < users.length; i++) {
        if (i == id) {
            return users[i]
        }
    }
    return null
}
//On appel la fonction en lui passant le tableau et l'id de l'utilisateur à trouver
let user = findUserById(users, 5);
//console.log(user);





//Exercices 3

/*                                             #############################################
                                               # Plusieurs façon de créé la fonction slice #
                                               #############################################
*/

//1ere methode
//------------



// Fonction personnalisée slice() qui retourne une sous-liste de tab entre start (inclus) et end (non inclus)
function cda_slice(tab, start, end) {
    let newTab = [];
    // Vérification des arguments
    if (Array.isArray(tab) && !isNaN(start) && !isNaN(end) && start >= 0 && end >= start && start < tab.length) {
        for (let i = start; i < end && i < tab.length; i++) {
            newTab.push(tab[i]);
        }
    } else {
        //console.log("cda_slice n'a pas les bons arguments");
    }
    return newTab;
}

// On veut les éléments entre l'index 1 et 3 (pomme , mangue)
let newFruits = cda_slice(fruits, 1, 3);

//console.log(newFruits); // Affiche : ['pomme']





//2eme methode
//------------


////Creation d'une fonction slice() qui supprime un élément à l'index donné et le nombre d'éléments à supprimer
//Créé une fonction cda_slice(tab, start, count) qui supprime l'élément à l'index start et le nombre d'éléments count
//Teste ta fonction en supprimant l'élément à l'index 1 et le nombre d'éléments 2
//La fonction cda_slice(tab, start, count) retourne un tableau sans l'élément à l'index start et le nombre d'éléments count
function cda_slice(tab, start, count) {
    var new_tab = [];
    var find=false;
    var my_count=0;
    for (var i = 0; i < tab.length; i++) {
        if (i != start && !find) {
            new_tab.push(tab[i]);
        }else {
            find=true;
            my_count++;
            if (my_count == count) {
                find=false;
            }
        }
    }
    return new_tab;
}
console.log(cda_slice(fruits, 1, 2)); 



//3eme methode
//------------


//la fonction cda_clice permet de creer un nouveau tableau en supprimant
//une portion d'un tableau existant (tabs) a partir d'une position precise
function cda_slice(tab, start, count) {
    let new_tab = [];
    let end = start + count;
    for (let i = 0; i < tab.length; i++) {
        if (i < start || i >= end) {
            new_tab.push(tab[i]);
        }
    }
    return new_tab;
}