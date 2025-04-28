//on cree une variable avec un titre de musique
let titre = "morceau moi 1"
let titre2 = "morceau moi 2"
let titre3 = "morceau moi 3"

//On cree un tablea uavec les musqiue a passer pendant la soirée
const playslistalire = [titre, titre2, titre3];
//On affiche le tableau
console.log("Dans ma playsliste il y a " + playslistalire + "\n") 

//On cre une variable qui affiche le nbre d'entrée
const totalmorceaux = playslistalire.length
console.log("il y a " + totalmorceaux + " morceaux au total dans la playlist \n")

//MEs amis font chier pour avoir leur musqiue de merde
playslistalire.push("morceau amis 1", "morceau amis 2", "morceau amis 3 \n")
console.log("Voici la liste de musique avec celle de mes amis " + playslistalire)

//la dernier morceau est vraiment à chier je le retire
playslistalire.pop()
console.log("je retire le dernier morceau qui pue sa mére " + playslistalire + "\n")



