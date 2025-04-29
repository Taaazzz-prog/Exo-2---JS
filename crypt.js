
//////////////////////////////////////////////////////////
//          Fonction pour hasher un mot de passe.       //
//////////////////////////////////////////////////////////

//Penser à d'abord télécharger la bibliortheque bcrypt pour linux


// Importation de la bibliothèque bcrypt
const bcrypt = require('bcryptjs'); 

// La phrase 'Mettre votre mot de passe ici' est le mot de passe par défaut si aucun n'est fourni dans l'environnement
const defaultPassword = process.env.MOT_DE_PASSE || 'Mettre votre mot de passe ici';

/**
 * Fonction pour hasher un mot de passe.
 * @param {string} pwd - Le mot de passe à hasher.
 * @returns {Promise<string>} - Le hash du mot de passe.
 */
async function hasherMotDePasse(pwd) {
    try {
        const hash = await bcrypt.hash(pwd, 10);
        console.log('Mot de passe haché :', hash);
        return hash; // Retourne le hash pour pouvoir l'utiliser ailleurs
    } catch (err) {
        console.error('Erreur lors du hachage :', err);
        throw err; // Propager l'erreur pour la gérer à l'appel
    }
}

/*
Explications :

La fonction
    hasherMotDePasse
prend un mot de passe en paramètre et retourne une promesse qui résout le hash.
Vous pouvez l'utiliser avec n'importe quel mot de passe en appelant
    await hasherMotDePasse(votreMotDePasse)
*/

// Exemple d'utilisation avec le mot de passe par défaut ou un autre


(async () => {
    const motDePasse = process.env.MOT_DE_PASSE || 'Mettre votre mot de passe ici';
    const hash = await hasherMotDePasse(motDePasse);
    // Vous pouvez faire ce que vous voulez avec le hash ici
})();