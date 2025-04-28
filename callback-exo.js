//Construire un tableaux de 3 livres avec le titre, l'auteur, l'année de publication et sa disponibilité
//Cree une fonction afficherLivres(liste) qui affiche tous les livres avec leur titre et auteur

const livres = [
  {
    titre: "1984",
    auteur: "Gorges Orwell",
    annee: 1949,
    disponible: true
    },
    {
    titre: "Le Meilleur des Mondes",
    auteur: "Aldous Huxley",
    annee: 1932,
    disponible: false
    },
    {
    titre: "Fahrenheit 451",
    auteur: "Ray Bradbury",
    annee: 1953,
    disponible: true
    }
];

//Exercice 1


//fonction afficherLivres qui prend en parametre une liste de livres
//et qui affiche tous les livres avec leur titre et auteur
//La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau
 function afficherLivres(liste) {
    liste.forEach(livre => { 
        console.log(`Titre: ${livre.titre}, Auteur: ${livre.auteur}`);
    });
} 
//Appel la fonction afficherLivres avec la liste de livres
//afficherLivres(livres);


//Exercice 2 

//Cree une fonction qui va afficher les livres disponibles qui retourne un tableau de livres disponibles
//La méthode filter() crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie
function livresDisponibles(liste) {
    return liste.filter(livre => livre.disponible);
}
//Appel la fonction livresDisponibles avec la liste de livres
const livresDispo = livresDisponibles(livres);
//Affiche les livres disponibles
//console.log("Livres disponibles:");
//afficherLivres(livresDispo);

//Exercice 3


//Cree une fonction ajouterLivre(titre, auteur, annee, disponible) qui ajoute un livre à la liste
//La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau
function ajouterLivre(titre, auteur, annee, disponible) {
    livres.push({ titre, auteur, annee, disponible });
}
//Appel la fonction ajouterLivre avec un livre
ajouterLivre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true);
//Affiche la liste de livres après l'ajout
//console.log("Liste de livres après ajout:");
//afficherLivres(livres);

//console.log(livres);

//Exercice 4


//Cree une fonction rechercheParAuteur(liste, nomAuteur) qui retourne les livres d'un auteur
//La méthode filter() crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie
function rechercheParAuteur(liste, nomAuteur) {
    return liste.filter(livre => livre.auteur === nomAuteur);
}
//Appel la fonction rechercheParAuteur avec la liste de livres et un auteur
const livresParAuteur = rechercheParAuteur(livres, "Aldous Huxley");
//Affiche les livres de l'auteur
//console.log("Livres de l'auteur Aldous Huxley:");
//afficherLivres(livresParAuteur);


//Exercice 5
//Cree une fonction trierLivresParAnnee(liste) qui trie les livres par année de publication
//La méthode sort() trie les éléments d'un tableau sur place et retourne le tableau
//La méthode locale compare les éléments du tableau
function trierLivresParAnnee(liste) {
    return liste.sort((a, b) => a.annee - b.annee);
}
//Appel la fonction trierLivresParAnnee avec la liste de livres
const livresTries = trierLivresParAnnee(livres);
//Affiche les livres triés par année
//console.log("Livres triés par année:");
//afficherLivres(livresTries);

//Exercice 6
//Cree une fonction supprimerLivre(titre) qui supprime un livre de la liste par son titre
//La méthode filter() crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie
function supprimerLivre(titre) {
    const index = livres.findIndex(livre => livre.titre === titre);
    if (index !== -1) {
        livres.splice(index, 1);
    }
}
//Appel la fonction supprimerLivre avec un titre
//supprimerLivre("1984");
//Affiche la liste de livres après la suppression
//console.log("Liste de livres après suppression:");
//afficherLivres(livres);


//Exercice 7
//Cree une fonction traiterLivres(callback) qui execute une fonction de traitement (callback) sur la liste de livres
//La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau
function traiterLivres(callback) {
    livres.forEach(callback);
}
//Appel la fonction traiterLivres avec une fonction de traitement qui affiche le titre et l'auteur
traiterLivres(livre => {
    console.log(`Titre: ${livre.titre}, Auteur: ${livre.auteur}`);
});
//Appelle traiterLivres() en lui passant afficherLivres comme callback

//traiterLivres(afficherLivres);

