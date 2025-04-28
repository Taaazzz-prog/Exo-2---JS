//On va écrire une fonction elementsCommuns(tab1, tab2) qui retourne un tableau contenant les éléments communs entre les deux tableaux sans doublons
//elementsCommuns([1, 2, 2, 3, 4], [2, 3, 5, 2]) doit retourner [2, 3]
//On n'utilisera pas le methode include() pour vérifier si l'élément est déjà présent


/*
Methode
1) On va cree un nouveau tableau
2) On va parcourir le premier tableau [1, 2, 2, 3, 4]
3) On va parcourir le deuxième tableau [2, 3, 5, 2]
4) On va comparer les éléments des deux tableaux
5) On va créer une variable pour vérifier si l'élément est déjà présent
6) On va vérifier si l'élément n'est pas déjà dans le nouveau tableau
7) On va vérifier si l'élément n'est pas déjà présent
8) On va ajouter l'élément au nouveau tableau
9) On va retourner le tableau contenant les éléments communs
10) On va tester la fonction avec deux tableaux contenant des doublons
11) On va afficher le tableau contenant les éléments communs

*/



function elementsCommuns(tab1, tab2) {
    //On crée un nouveau tableau vide
    let newTab = [];
    //On parcourt le premier tableau avec ces valeurs en parametres [1, 2, 2, 3, 4]
    for (let i = 0; i < tab1.length; i++) {
        //On parcourt le deuxième tableau avec ces valeurs en parametres [2, 3, 5, 2]
        for (let j = 0; j < tab2.length; j++) {
            //On compare les éléments des deux tableaux
            if (tab1[i] === tab2[j]) {
                //On crée une variable pour vérifier si l'élément est déjà présent
                let has_duplicate = false;
                //On vérifie si l'élément n'est pas déjà dans le nouveau tableau
                for (let k = 0; k < newTab.length; k++) {
                    //On compare l'élément actuel avec les éléments du nouveau tableau
                    if (tab1[i] === newTab[k]) {
                        has_duplicate = true;
                    }
                }
                //On verifie si l'élément n'est pas déjà présent
                if (!has_duplicate) {
                    //Si l'élément n'est pas présent, on l'ajoute au nouveau tableau
                    newTab.push(tab1[i]);
                }
            }
        }
    }
    return newTab;
}
//On teste la fonction avec deux tableaux contenant des doublons
let tabCommun = elementsCommuns([1, 2, 2, 3, 4], [2, 3, 5, 2]);
//On affiche le tableau contenant les éléments communs
console.log(tabCommun); // Affiche : [2, 3]