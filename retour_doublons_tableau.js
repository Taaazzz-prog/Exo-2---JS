/*
Etapes 1 : Parcourir chaque éléments du tableau
Etapes 2 : Pour chaque éléments, comparer avec tous les suivants
Etapes 3 : Dés que deux elements égaux sont trouvés, retourner cet éléments immédiatement
Etapes 4 : Si aucun doublon n'est trouvé, retourner null
console.log(premierDoublon([1, 3, 4, 3, 2, 1])); // Résultat attendu : 1
console.log(premierDoublon([1, 2, 3, 4])); // Résultat attendu : null
*/  
function premierDoublon(tab) {
    // Etape 1 : Parcourir chaque élément du tableau
    for (let i = 0; i < tab.length; i++) {
        // Etape 2 : Pour chaque élément, comparer avec tous les suivants
        for (let j = i + 1; j < tab.length; j++) {
            // Etape 3 : Si deux éléments égaux sont trouvés, retourner cet élément immédiatement
            if (tab[i] === tab[j]) {
                return tab[i];
            }
        }
    }
    // Etape 4 : Si aucun doublon n'est trouvé, retourner null
    return null;
}
// }
 console.log(premierDoublon([1, 3, 4, 3, 2, 1])); // Résultat attendu : 1
 console.log(premierDoublon([1, 2, 3, 4])); // Résultat attendu : null
