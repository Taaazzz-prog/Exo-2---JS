//Ecrire une fonction inversTableau(tab) qui retourne un tableau inversé sans utiliser la méthode native .reverse()
// //inversTableau([1, 2, 3, 4]) doit retourner [4, 3, 2, 1]
function inversTableau(tab) {
    let newTab = [];
    for (let i = tab.length - 1; i >= 0; i--) {
        newTab.push(tab[i]);
    }
    return newTab;
}

let tabInverser = inversTableau([1, 2, 3, 4]);

console.log(tabInverser); // Affiche : [4, 3, 2, 1]


