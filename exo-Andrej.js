/*
                                                ########################################################
                                                # Tous les exercices commentés avec //console.log      #
                                                # sont à décommenter pour les afficher dans la console #
                                                ########################################################
*/
//Apprentissage des bases en node.js

//Exo 1
//-----

//MEME EXERCICES DEUX METHODES D'ECRITURE
//On va créé un objet personne, avec dans les propriétes, le nom de la personne, on va créé dedans une fonction qui devra dire bonjour je suis nom

const personne = {
    nom: "Bruno",
    saluer: function () {
        return "Bonjour je suis " + this.nom
    }
}
//console.log(personne.saluer())

//ON créé la même chose mais sans return juste avec le console.log
const personne2 = {
    nom: "Andrej",
    saluer: function () {
        //console.log("Bonjour je suis " + this.nom)
    }
}
//On va l'appeler
personne2.saluer()



//Exo 2
//-----

//Créé une fonction du nom de "double" qui va prendre une valeur et la multiplier par deux

let nombre = 4

function double() {
    return nombre * 2
}
//console.log(double())

//On peut aussi le faire avec une fonction fléchée
const double2 = () => {
    return nombre * 2
}
//console.log(double2())



//Exo 3
//-----


//Créé une fonction qui va prendre une valeur et la multiplier par deux, mais cette fois ci on va passé la valeur en paramètre

let valeurAdoubler = 5

function double3(valeur){
    let doubler = valeur * 2
    //console.log("voici la valuer doubler " , doubler)
}
double3(5)




let valeurAmettreCarre = 4

function carre(valeur) {
    let resultat = valeur * valeur
    return resultat

}
//console.log("Voici la valeur mise aux carré " , carre(valeurAmettreCarre))



//Cree une fonction de multiplication ou je décalre la valeur à multiplier et le valeur du multiplicateur
let valeurAmettre = 10
let valeurMultiplicateur = 10

function multiplier(valeur, multiplicateur) {
    let resultat = valeur * multiplicateur
    return resultat

}
//console.log(multiplier(valeurAmettre, valeurMultiplicateur))



//Créé un tableau note et avec la fonction map pour augmenter les valeurs de 2 la fonction map() sert a parcourir un tableau et de le copier
//la fonction que je créé note() servira pour ici additioner la valeur de 2 à chaque valeur du tableau
const notes2 = [12, 15, 9, 18, 20]
const notesAugmentees = notes2.map(function (note) { return note + 2 })
//console.log("Voici le tableau avec les notes de bases " , notes2)
//console.log("Voici le tableau des notes augmentées de 2 " , notesAugmentees)


//Créé un tableau de prenoms et utilise forEach pour aficher chaque prénoms avec un message personnalsié
const prenoms = ["Andrej", "Bruno", "Sophie"]
const messagePErsonnalisé = ["Comment vas-tu?", "Enfin sorti de prison?", "Tu as de beaux yeux tu sais !!"]
//On va utiliser la méthode forEach pour parcourir le tableau et afficher chaque prénom avec un message personnalisé
prenoms.forEach(function (prenom, index) {
    //console.log("Bonjour " + prenom + " " + messagePErsonnalisé[index])
})



//Exo 4
//-----


//On va créé un tableau personnes avec quatres noms et leurs ages
//On va garder uniquements les personnes majeurs (age >= 18) avec filter()
//On utilise un forEach pour afficher "nom : ...." pour chaque personne retenue
const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 17 },
    { nom: "Charlie", age: 30 },
    { nom: "David", age: 15 }
];
//On va créer un tableau pour ne garder que les majeurs
const majeurs = personnes.filter(personne => personne.age >= 18)
console.log("Voici le tableau d'objet des  personnes majeurs, nom et age " , majeurs)

//On va utiliser la fonction map()
//Pour créer un tableau pour ne garder que les majeurs
const tableauMajeurs = majeurs.map(function (personne) {
    return personne.nom
})
//On va afficher le tableau avec les personnes majeurs
console.log("Voici le tableau des  personnes majeurs avec seulement leurs noms d'affiché " , tableauMajeurs)

//On va utiliser un forEach pour afficher chaque personne majeure en leur diant bonjour
majeurs.forEach(function (personne) {
    console.log ("Bonjour " , personne.nom)
})
