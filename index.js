//Travaux sur les console.log() et le début des boucles

//Le consol.log est une fonction qui permet d'afficher les résultats de nos modifications je ne l'expliquerais pas forcément toujours

//On créé une vriable au nom de tableau
//On peut lui donner n'importe quel nom, mais il faut qu'il soit explicite
const tableau = ["valeur 1", "valeur 2", "valeur 3", "valeur 4", "valeur 5"]

//nombre de donnée entrée dans le tableau ici il y en aura 5
//On peut le savoir en utilisant la fonction length
const EntreTableau = tableau.length
console.log(EntreTableau)

//afficher la premiere donnée du tableau qui commence TOUJOURS à 0
//en javascript on commence par 0 1 2 3 etc donc ici ce sera "Valeur 1"
console.log(tableau[0])
//afficher le tableau valeur deuxieme colonne qui sera donc 1
//ic ce sra "valeur 2"
console.log(tableau[1])

//Ajoutee une nouvelle entré dans le tableau qui s'ajoutera à la fin du tableau
//On peut ajouter plusieurs valeur en une fois
//ici on ajoute la valeur 6
tableau.push("valeur 6")
//On affiche le résultat
console.log(tableau)


//Suppresion de la derniere valeur rentré dans le tableau avec la fonction pop()
//ici on va retirer la valeur 6
tableau.pop()
console.log(tableau)

//masquer une valeur specifique du tableau valeur 2 et 1 (ce n'était pas dans le cours mais je l'ai rajouté)
//ici on va retirer la valeur 2 et 1
tableau.splice(2, 1)
console.log(tableau)


//cree un tableau 2 qui sera identique au tableau 1, si on modifie l'un ou l'autre, les deux seront modifié
const tableau2 = tableau
console.log(tableau2)

//Cloner un tableau 3 séparé du tableau 1 et tableau 2, donc si on modifie tableau 3 les deux autres ne seront pas modifié et inversement
const tableau3 = [...tableau]



//Creation d'une boucle for qui va dire que i vaut 0 et qu'il va incrementer de 1 jusqu'à ce qu'il soit inferieur à 5
for (let i = 0; i < 5; i++) {
    console.log("dernier log " + i)
}

//création d'une boucle while qui va dire que i vaut 0 et qu'il va incrementer de 1 jusqu'à ce qu'il soit inferieur à 5
let i = 0
while (i < 5) {
    console.log("dernier log " + i)
    i++
}


//On va cree une boucle while et une for qui va décompter de 10 à 0
//On cree une variable qui va servir de compteur

let valeur = 10
//On cree une boucle qui va dire que tant que la valeur est supérieur à 0
while (valeur > 0) {
    console.log("la valeur est de " + valeur)
    //On decremente la valeur de 1
    valeur--
}
//On va cree une boucle for qui va décompter de 10 à 0
//On cree une variable qui va servir de compteur
let valeur2 = 10
//On cree une boucle qui va dire que tant que la valeur est supérieur à 0
for (let i = valeur2; i > 0; i--) {
    console.log("la valeur est de " + i)
}
