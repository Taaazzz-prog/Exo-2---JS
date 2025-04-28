//Ecrire une fonction sommeTableau(tab) qui retourne la somme des nombres contenus dans un tableau
//sommeTableau([1, 2, 3, 4]) doit retourner 10
function sommeTableau(tabs) {
    let somme = 0;
    for (let i = 0; i < tabs.length; i++) {
        somme += tabs[i];
    }
    return somme;
}
let sommeAaFficher = sommeTableau([1, 2, 3, 4])

console.log(sommeAaFficher); 


//ecrire une fonction filtrePairs(tab) qui retourne un tableau contenant uniquement les nombres pairs du tableau d'origine
//filtrerPairs([1, 2, 3, 4, 5, 6]) doit retourner [2, 4, 6]
function filtrePairs(tab) {
    let pairs = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            pairs.push(tab[i]);
        }
    }
    return pairs;
}

let NewTabFiltrer = filtrePairs([1, 2, 3, 4, 5, 6])

console.log(NewTabFiltrer); // Affiche : [2, 4, 6]

//E