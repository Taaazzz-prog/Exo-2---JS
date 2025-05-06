//On va cree une fonction recursive pour inverser les lettres d'un mot

function inverserMot(mot) {
    // Si le mot est vide ou a une seule lettre, on le retourne tel quel
    if (mot.length <= 1) {
        return mot;
    }
    // On prend la dernière lettre et on l'ajoute à l'inverse du reste du mot
    return mot[mot.length - 1] + inverserMot(mot.slice(0, -1));
}

// On appelle la fonction pour inverser le mot "JavaScript"
//console.log(inverserMot("JavaScript")); // Affiche "tpircSavaJ"


//on va cree la meme fonction mais avec des boucles et des conditions

function inverserMotBoucle(mot) {
    let motInverse = ""; // Variable pour stocker le mot inversé
    for (let i = mot.length - 1; i >= 0; i--) { // Boucle de la fin du mot au début
        motInverse += mot[i]; // Ajoute chaque lettre à la variable motInverse
    }
    return motInverse; // Retourne le mot inversé
}
// On appelle la fonction pour inverser le mot "JavaScript"
//console.log(inverserMotBoucle("JavaScript")); // Affiche "tpircSavaJ"




//on va cree unefonction recursive avec boucle et condition pour inverser les lettres d'un mot

function inverserMotRecursifBoucle(mot) {
    // Si le mot est vide ou a une seule lettre, on le retourne tel quel
    if (mot.length <= 1) {
        return mot;
    }
    // On initialise une variable pour stocker le mot inversé
    let motInverse = ""; 
    // On boucle à travers chaque lettre du mot
    for (let i = mot.length - 1; i >= 0; i--) {
        motInverse += mot[i]; // Ajoute chaque lettre à la variable motInverse
    }
    return motInverse; // Retourne le mot inversé
}
// On appelle la fonction pour inverser le mot "JavaScript"
console.log(inverserMotRecursifBoucle("JavaScript")); // Affiche "tpircSavaJ"
