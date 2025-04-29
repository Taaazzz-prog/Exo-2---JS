//------------------------------------------------------------
//      Fonction pour vérifier si un utilisateur existe     //
//------------------------------------------------------------

// Exemple de liste de pseudos existants
const pseudosExistants = ['Alice', 'Bob', 'Charlie', 'Diane'];

/**
 * Vérifie si un pseudo existe déjà dans la liste et affiche un message.
 * @param {string} pseudo - Le pseudo à vérifier.
 */
function verifierPseudo(pseudo) {
    // On convertit en minuscules pour une vérification insensible à la casse
    const pseudoLower = pseudo.toLowerCase();

    // Vérification si le pseudo existe
    const existe = pseudosExistants.some(existingPseudo => existingPseudo.toLowerCase() === pseudoLower);

    if (existe) {
        console.log(`Le pseudo "${pseudo}" existe déjà.`);
    } else {
        console.log(`Le pseudo "${pseudo}" n'existe pas encore.`);
    }
}

// Exemples d'utilisation
verifierPseudo("Alice"); // Le pseudo "Alice" existe déjà.
verifierPseudo("Eve");   // Le pseudo "Eve" n'existe pas encore.











//------------------------------------------------------------------------
//      Fonction pour vérifier si un utilisateur existe dans ma bdd     //
//------------------------------------------------------------------------

//Penser à d'abord télécharger la bibliortheque mongodb pour linux


// Importation du client MongoDB
const { MongoClient } = require('mongodb');

// URL de connexion à votre base de données MongoDB
const url = 'mongodb://luka:666'; // MEttre le domaine vers votre base de donnée
const dbName = 'NOM_DE_MA_BASE_DE_DONNEES'; // MEttre le nom de la base de donnée ici, je mofiié le nom pour masqué mes donnée perso lol

// Fonction pour vérifier si un pseudo existe dans la base de données
async function verifierPseudo(pseudo) {

  const client = new MongoClient(url, { useUnifiedTopology: true });
   

  try {
    // Connexion au client
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('member');

    // Requête pour vérifier si le pseudo existe (insensible à la casse)
    const pseudoLower = pseudo.toLowerCase();

    // Recherche du pseudo dans la collection
    const utilisateur = await collection.findOne({

      // Recherche insensible à la casse pour le champ "pseudo" et le champ "pseudo" doit être unique
      pseudo: { $regex: `^${pseudoLower}$`, $options: 'i' }
    });

    // Affichage du résultat de la recherche du pseudo dans la console
    if (utilisateur) {
      console.log(`Le pseudo "${pseudo}" existe déjà.`);
    } else {
      console.log(`Le pseudo "${pseudo}" n'existe pas encore.`);
    }

  } 
    // Gestion des erreurs de connexion à la base de données ou de la requête
  catch (err) {
    console.error('Erreur lors de la vérification du pseudo:', err);
  } finally {
    // Fermeture de la connexion
    await client.close();
  }
}

// Exemple d'utilisation
verifierPseudo('Bruno'); // Le pseudo "Bruno" existe déjà.
verifierPseudo('Lukas'); // Le pseudo "Lukas" n'existe pas encore.