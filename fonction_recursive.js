// Définition de la fonction factorielle qui calcule la factorielle d'un nombre n
function factorielle(n){
    // Si n est égal à 0, la factorielle est 1 (cas de base)
    if(n === 0){
        return 1;
    }
    // Sinon, la fonction retourne n multiplié par la factorielle de n-1 (récursion)
    return n * factorielle(n-1);
}

// Affiche le résultat de la factorielle de 5 dans la console
//console.log(factorielle(5));


// Définition de la fonction estPalindrome qui vérifie si une chaîne de caractères est un palindrome
function estPalindrome(chaine){
    // Si la longueur de la chaîne est inférieure ou égale à 1, c'est un palindrome (cas de base)
    if(chaine.length <= 1){
        return true;
    }
    // Si le premier caractère n'est pas égal au dernier, ce n'est pas un palindrome
    if(chaine[0] !== chaine[chaine.length - 1]){
        return false;
    }
    // Sinon, on vérifie récursivement la sous-chaîne sans le premier et le dernier caractère
    return estPalindrome(chaine.slice(1, -1));
}

// Affiche dans la console si la chaîne "eluparcettecrapule" est un palindrome
//console.log(estPalindrome("eluparcettecrapule"));




//Afficher tous les elements d'un tableau en fonction recursif
const fruits = ["pomme", "banane", "cerise"];
function afficherTableauRecursif(tableau, index = 0) {
    // Vérifie si l'index est inférieur à la longueur du tableau
    if (tableau.length === index) {
        return; // Ajout d'un retour pour arrêter la récursion
    }
        console.log(tableau[index]);
        afficherTableauRecursif(tableau, index + 1);
    }

// Appelle la fonction pour afficher les éléments du tableau
//afficherTableauRecursif(fruits);



//function recursive sur un objet avec un autre objet dedans
const personne = {
    name: "Luc",
    age: 30,
    adresse: {
        rue: "123 Rue JavaScript",
        ville: "Nodeville",
        country: {
            name: "France",
            initial: 'FR',
            continent: {
                name: 'Europe',
                space: {
                    lat: 232.312,
                    long: 123.1,
                    velo: {
                        bateau: 'Reste'
                    }
                }
            }
        }
    }
};

function afficherObjetRecursivement(object, path = '') {
    for (let key in object) {
        if (typeof object[key] == 'object') {
            afficherObjetRecursivement(object[key], path? path+'.'+key : key)
        }
        else {
            object[key] = String(object[key])+' salut'
            console.log("Affiche",(path ? path+'.'+ key: key), ':', object[key])
        }
    }
}
//afficherObjetRecursivement(personne);
       



//Afficher l'arbre généalogique de manière récursive
// Exemple d'arbre généalogique
    const arbre = {
        nom : "parent",
        enfants : [
            {
                nom : "enfant1", enfants: []
            },
            {
                nom : "enfant2", enfants: [
                    {
                        nom : "petit-enfant1", enfants: []
                    }
                ]
            },
            {
                nom : "enfant3", enfants: []
            }
        ]
    }

// Fonction pour afficher les noms de l'arbre généalogique
function afficherArbre(arbre, level = 0) {
    let prefix =[];
    for (let i = 0; i < level; i++){     
        prefix.push('\t'); 
       // Appel récursif pour chaque enfant
    }  
    console.log(prefix.join(''), 'Nom : ', arbre.nom);
    arbre.enfants.forEach(enfant => {
        afficherArbre(enfant, level + 1);
    });
}
    afficherArbre(arbre);


