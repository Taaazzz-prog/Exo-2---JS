//Ecris une fonction rechercheElement(tab, element) qui retourne tru si l'elements est dans le tableau, sinon false

//rechercheElement([a, b, c], b) doit retourner true
//rechercheElement([a, b, c], z) doit retourner false


function rechercheElement(tab, element) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === element) {
            return true;
        }
    }
    return false;
}
//Declare notre tableau
const tab = ['a', 'b', 'c'];
//On declare l'element a rechercher
let element = 'b';
let element2 = 'z';
//On declare notre fonction avec l'elements a rechercher dans notre tableau
let result = rechercheElement(tab, element);
let result2 = rechercheElement(tab, element2);
//On affiche le resultat
console.log(result); // Affiche : true
console.log(result2); // Affiche : false
