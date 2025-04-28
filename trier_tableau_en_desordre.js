//Ecrire une fonction qui trie un tableau d'entiers en ordre croissant sans utiliser la méthode native .sort()

function trierTableau(tab) {
    let results = [...tab]; // Copier le tableau original

    for (let i = 0; i < results.length - 1; i++) {
        for (let j = 0; j < results.length - 1 - i; j++) {
            if (results[j] > results[j + 1]) {
                // Échanger les deux éléments
                let temp = results[j];
                results[j] = results[j + 1];
                results[j + 1] = temp;
            }
        }
    }

    return results;
}

// Exemple d'utilisation :
console.log(trierTableau([5, 2, 9, 1, 5, 6]));