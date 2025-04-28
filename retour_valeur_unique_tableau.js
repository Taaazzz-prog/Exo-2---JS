//On va écrire une fonction valeursUniques(tab1, tab2) qui renvois les valeurs présente uniquement dans un tableau mais pas dans les deux


/*
Methode
-------

- Étapes 1 : Créé un tableau vide
- Étapes 2 : Parcourir chaque éléments du premier tableau
    Étapes 2.1 : Parcourir chaque éléments du premier tableau 
    Étapes 2.1.1 : Comparer si les éléments du tableau 1 ne sont pas dans le tableau 2
    Étapes 2.1.2 : Si il est présent vérifier si pas déjà dans le tableau unique et push
- Étapes 3 : Parcourir chaque éléments du deuxième tableau
    Étapes 3.1 : Parcourir chaque éléments du deuxième tableau 
    Étapes 3.1.1 : Comparer si les éléments du tableau 2 ne sont pas dans le tableau 1
    Étapes 3.1.2 : Si il est présent vérifier si pas déjà dans le tableau unique et push
- Étapes 4 : Retourner le tableau unique
- Étapes 5 : Tester la fonction avec deux tableaux contenant des doublons
- Étapes 6 : Afficher le tableau contenant les éléments uniques
*/


//1ere methode
//------------


function valeursUniques(tab1, tab2) {
    const tableUnique = [];
  
    // Parcourir le premier tableau
    for (let i = 0; i < tab1.length; i++) {
      const element = tab1[i];
      // Vérifier si l'élément n'est pas dans le second tableau
      if (!tab2.includes(element)) {
        // Vérifier si l'élément n'est pas déjà dans le résultat
        if (!tableUnique.includes(element)) {
          tableUnique.push(element);
        }
      }
    }
  
    // Parcourir le second tableau
    for (let j = 0; j < tab2.length; j++) {
      const element = tab2[j];
      // Vérifier si l'élément n'est pas dans le premier tableau
      if (!tab1.includes(element)) {
        // Vérifier si l'élément n'est pas déjà dans le résultat
        if (!tableUnique.includes(element)) {
          tableUnique.push(element);
        }
      }
    }
  
    return tableUnique;
  }
  console.log(valeursUniques([1, 2, 3, 4], [3, 4, 5, 6])); // Résultat attendu : [1, 2, 5, 6]

  





//2eme methode
//------------






function valeursUniques(tab1, tab2) {
    //Etapes 1 : Créé un tableau vide
    let uniqueValues = [];
    //Etapes 2 : Parcourir chaque éléments du premier tableau   
    for (let i = 0; i < tab1.length; i++) {
        let existe = false;
        //Etapes 2.1 : Parcourir chaque éléments du premier tableau
        for (let j = 0; j < tab2.length; j++) {
            //Etapes 2.1.1 : Comparer si les éléments du tableau 1 ne sont pas dans le tableau 2
            if (tab1[i] === tab2[j]) {
                existe = true;
            }
        }
        //Etapes 2.1.2 : Si il est présent vérifier si pas déjà dans le tableau unique et push
        if (!existe) {
            let dejaPresent = false;
            for (let k = 0; k < uniqueValues.length; k++) {
                if (tab1[i] === uniqueValues[k]) {
                    dejaPresent = true;
                }
            }
            if (!dejaPresent) {
                uniqueValues.push(tab1[i]);
            }
        }
    }
    //Etapes 3 : Parcourir chaque éléments du deuxième tableau
    for (let i = 0; i < tab2.length; i++) {
        let existe = false;
        //Etapes 3.1 : Parcourir chaque éléments du deuxième tableau
        for (let j = 0; j < tab1.length; j++) {
            //Etapes 3.1.1 : Comparer si les éléments du tableau 2 ne sont pas dans le tableau 1
            if (tab2[i] === tab1[j]) {
                existe = true;
            }
        }
        //Etapes 3.1.2 : Si il est présent vérifier si pas déjà dans le tableau unique et push
        if (!existe) {
            let dejaPresent = false;
            for (let k = 0; k < uniqueValues.length; k++) {
                if (tab2[i] === uniqueValues[k]) {
                    dejaPresent = true;
                }
            }
            if (!dejaPresent) {
                uniqueValues.push(tab2[i]);
            }
        }
    }
    //Etapes 4 : Retourner le tableau unique
    return uniqueValues;
}
//Etapes 5 : Tester la fonction avec deux tableaux contenant des doublons
const tableau1 = [1, 2, 3, 4, 4];
const tableau2 = [3, 4, 5, 6];
//Etapes 6 : Afficher le tableau contenant les éléments uniques
console.log(valeursUniques(tableau1, tableau2)); // Résultat attendu : [1, 2, 5, 6]