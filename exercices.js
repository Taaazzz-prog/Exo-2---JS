/*
                                                ########################################################
                                                # Tous les exercices commentés avec //console.log      #
                                                # sont à décommenter pour les afficher dans la console #
                                                ########################################################
*/

//Divers excercies sur les tableaux




//Exercices 1
//-----------

const fruits = ["pomme", "banane", "cerise"]

// 1 on affiche le premier élément du tableau
//console.log(" 1 - Voici le premier fruit " + fruits[0])

//2 On change 'banane' en 'kiwi'
fruits[1] = "kiwi"
//console.log("2 - On modifie le fruits banane par kiwi " + fruits)

//3 On ajoute 'mangue' à la fin du tableau
fruits.push("mangue")
//console.log("3 - On ajoute mangue à a fin du tableau " + fruits)
//4 On retire le dernier fruit du tableau
fruits.pop()
//console.log("4 - On retire le dernier fruits " + fruits)





//Exercices 2 
//-----------

const notes = [12, 15, 9, 18, 20]

//1 Calcule la moyenne des notes
let somme = 0
for (let i = 0; i < notes.length; i++) {
    let item = notes[i]
    somme += item
}
const moyenne = somme / notes.length
//console.log("1 - La moyenne des notes est de " + moyenne)

//2 Affiche les notes supérieures à 10 
const notesSup10 = []
for (let i = 0; i < notes.length; i++) {
    let item = notes[i]
    if (item > 10) {
       // console.log("La note" + item," est supérieur à 10")
    }
}







//Exercices 3
//-----------


const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 17 },
    { nom: "Charlie", age: 30 }
];
//1  crée un nouveu tableau contenant seulement les noms en utilisant for
const tableauNoms = []
for (let i = 0; i < personnes.length; i++) {
    tableauNoms.push(personnes[i].nom)
}
//console.log("1 - Voici le tableau des noms en utilisant for " + tableauNoms)

//2 crée un nouveu tableau contenant seulement les noms en utilisant la fonction map(), le fonction map sert en quelques sorte pour faire une copie du tableau
//la fonction map() va parcourir le tableau et va retourner un nouveau tableau avec les noms
const newTableauNoms = personnes.map(function (personne) {
    return personne.nom
}
)
//console.log("2 - Voici le tableau des noms en utilisant map " + newTableauNoms)

//2 crée un tableau contenant seulement les personnes majeures en utilisant filter
const majeurs = personnes.filter(function (personne) {
    return personne.age < 18
}
)
//console.log("2 - Voici le tableau des majeurs en utilisant filter " , majeurs)



//exercices 4
//-----------

//On va créer un tableau de produits avec leurs prix
const produits = [
    { nom: "stylo", prix: 2 },
    { nom: "Cahier", prix: 5 },
    { nom: "Ordinateur", prix: 1200 }
]

//créé un tableau des noms des produits qui coûtent plus de 10 avec boucle for
const produitsChers2 = []
for (let i = 0; i < produits.length; i++) {
    if (produits[i].prix > 10) {
        produitsChers2.push(produits[i].nom)
    }
}
//console.log("Voici le tableau des produits qui coutent plus de 10 euros " , produitsChers2)

//1 créé un tableau des noms des produits qui coûtent plus de 10
const produitsChers = produits.filter(function (produit) {
    return produit.prix > 10
}
)
//console.log("1 - Voici le tableau des produits qui coutent plus de 10 euros " , produitsChers)

//2 créé un tableau des noms des produits qui coûtent plus de 10 avec map et filter en une ligne

//Methode 1
//const produitsChers2 = produits.filter(produit => produit.prix > 10).map(produit => produit.nom)
//console.log("2 - Voici le tableau des produits qui coutent plus de 10 euros " , produitsChers2)

//Methode 2
const produitsChers3 = produits.filter(function (produit) { return produit.prix > 10 }).map(function (produit) { return produit.nom })
//console.log("2 - Voici le tableau des produits qui coutent plus de 10 euros " , produitsChers3)    


//Exercices 5
//-----------

const numbers = [1, 2, 3, 4, 5, 6]
                                    //1 Garder les nombres pairs, on filtre d'abord le tableau ensuite on calcule le modulo pour n'aficher que les nombres pairs

 //On peut le faire avec une boucle for
/* const pairs2 = []
for (let i = 0; i < numbers.length; i++) {
    let valeurObtenue = numbers[i]
    if (valeurObtenue % 2 == 0) {
        pairs2.push(valeurObtenue)
    }
} */
//console.log("Voici le tableau des nombres pairs " , pairs2)

                                    //On peut le faire aussi avec filter, on filtre le tableau des valeurs et n'en garde que les pairs avec le modulo %
const pairs = numbers.filter(function (number) { return number % 2 == 0 })
//console.log("Voici le tableau des nombres pairs " , pairs)


                                    //Ensuite on va doubler leurs valeurs pairs obtenue par deux

//On peut le faire avec une boucle for
/* const doubles2 = []
for (let i = 0; i < pairs.length; i++) {
    doubles2.push(pairs[i] * 2)
}
 */
//console.log("Voici le tableau des nombres pairs doublé " , doubles2)

//On peut le faire aussi avec la fonction map
const doubles = pairs.map(function (number) { return number * 2 })
//console.log("Voici le tableau des nombres pairs doublé " , doubles)




