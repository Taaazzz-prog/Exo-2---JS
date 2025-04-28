//1ER methode
//------------


//Ecrire une fonction eliminerDoublons(tab) qui retourne un tableau sans les doublons
// //eliminerDoublons([1, 2, 2, 3, 4, 4]) doit retourner [1, 2, 3, 4]
function eliminerDoublons(tab) {
    //On crée un nouveau tableau vide
    let newTab = [];
    //On parcourt le tableau d'origine
    for (let i = 0; i < tab.length; i++) {
        //On vérifie si l'élément n'est pas déjà dans le nouveau tableau
        //On utilise la méthode includes() pour vérifier si l'élément est déjà présent
        if (!newTab.includes(tab[i])) {
            //Si l'élément n'est pas présent, on l'ajoute au nouveau tableau
             //On utilise la méthode push() pour ajouter l'élément au nouveau tableau
            newTab.push(tab[i]);
        }
    }
    return newTab;
}
//On teste la fonction avec un tableau contenant des doublons
let tabSansDoublon = eliminerDoublons([1, 2, 2, 3, 4, 4]);
//On affiche le tableau sans doublons
//console.log(tabSansDoublon); 


//2eme methode
//------------

function eliminerDoublons(tab) {
    //On crée un nouveau tableau vide
    let newTab = [];
    //On parcourt le tableau d'origine
    for (let i = 0; i < tab.length; i++) {
        //On crée une variable pour vérifier si l'élément est déjà présent
        //On initialise la variable à false
        let has_duplicate = false;
        //On vérifie si l'élément n'est pas déjà dans le nouveau tableau
        for (let j = 0; j < newTab.length; j++) {
            //On compare l'élément actuel avec les éléments du nouveau tableau
            //Si l'élément est déjà présent, on met la variable à true
            if (tab[i] === newTab[j]) {
                has_duplicate = true;
            }
        }
        //On verifie si l'élément n'est pas déjà présent
        if (!has_duplicate) {
            //Si l'élément n'est pas présent, on l'ajoute au nouveau tableau
            newTab.push(tab[i]);
        }   
    }
    return newTab;
}
console.log(eliminerDoublons([1, 2, 2, 3, 4, 4])); // Affiche : [1, 2, 3, 4]