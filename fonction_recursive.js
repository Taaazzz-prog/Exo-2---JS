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
console.log(factorielle(5));


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
console.log(estPalindrome("eluparcettecrapule"));