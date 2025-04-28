//Cree une fonction recursive qui va afficher les nombres de 1 à 10
function afficherNombresRecursif(n) {
    if (n > 10) {
        return;
    }
    console.log(n);
    afficherNombresRecursif(n + 1);
}
//Appel la fonction afficherNombresRecursif avec 1
//afficherNombresRecursif(1)

//cree fonction recursive qui va appeler pour manger et si pas reponse faire un decompte avant de crier a table
function crierATable(decompte) {
    if (decompte > 0) {
        console.log(decompte);
        setTimeout(() => crierATable(decompte - 1), 1000);
    } else {
        console.log("A table !");
    }
}
//Appel la fonction crierATable avec 5
crierATable(5)

































//On va faire des exercices sur la recursivité

const dossier ={
    nom:"racine",
    fichiers: ["fichier1.txt", "fichier 2.txt"],
    sousDossiers: [
        {
            nom: "images",
            fichiers: ["photo.jpg"],
            sousDossiers: []
        },
        {
            nom: "docs",
            fichiers: ["cv.pdf"],
            sousDossiers: [
                {
                    nom: "archives",
                    fichiers: ["ancien.doc"],
                    sousDossiers: []
                }
            ]
        }
    ]
}


//On va créer une fonction qui va afficher le nom de chaque fichier
function afficherFichiers(dossier) {
    //Afficher les fichiers du dossier
    //console.log("Dossier:", dossier.nom);
    dossier.fichiers.forEach(fichier => {
        console.log("Fichier:", fichier);
    });
    
    //Appel recursif pour chaque sous-dossier
    dossier.sousDossiers.forEach(sousDossier => {
        afficherFichiers(sousDossier);
    });
}
//Appel la fonction afficherFichiers avec le dossier racine
afficherFichiers(dossier);





















//On va créer une fonction qui va afficher les fichiers d'un dossier
//On va créer un objet dossier qui contient des fichiers et des sous dossiers
//On va créer une fonction afficherDossier qui va afficher les fichiers et les sous dossiers
//On va utiliser la recursivité pour afficher les sous dossiers

function afficherDossier(dossier) {
    console.log("Dossier:", dossier.nom);
    console.log("Fichiers:", dossier.fichiers.join(", "));
    dossier.sousDossiers.forEach(sousDossier => {
        afficherDossier(sousDossier);
    });
}
//Appel la fonction afficherDossier avec le dossier
afficherDossier(dossier);
//On va créer une fonction qui va compter le nombre de fichiers dans un dossier
function compterFichiers(dossier) {
    let compteur = dossier.fichiers.length;
    dossier.sousDossiers.forEach(sousDossier => {
        compteur += compterFichiers(sousDossier);
    });
    return compteur;
}
//Appel la fonction compterFichiers avec le dossier
const nombreFichiers = compterFichiers(dossier);
console.log("Nombre de fichiers:", nombreFichiers);
//On va créer une fonction qui va chercher un fichier dans un dossier
function chercherFichier(dossier, nomFichier) {
    if (dossier.fichiers.includes(nomFichier)) {
        return true;
    }
    for (const sousDossier of dossier.sousDossiers) {
        if (chercherFichier(sousDossier, nomFichier)) {
            return true;
        }
    }
    return false;
}
//Appel la fonction chercherFichier avec le dossier et le nom du fichier
const fichierCherche = "cv.pdf";
const fichierTrouve = chercherFichier(dossier, fichierCherche);
console.log(`Fichier "${fichierCherche}" trouvé:`, fichierTrouve);
//On va créer une fonction qui va supprimer un fichier dans un dossier
function supprimerFichier(dossier, nomFichier) {
    const index = dossier.fichiers.indexOf(nomFichier);
    if (index !== -1) {
        dossier.fichiers.splice(index, 1);
        return true;
    }
    for (const sousDossier of dossier.sousDossiers) {
        if (supprimerFichier(sousDossier, nomFichier)) {
            return true;
        }
    }
    return false;
}
//Appel la fonction supprimerFichier avec le dossier et le nom du fichier
const fichierASupprimer = "cv.pdf";
const fichierSupprime = supprimerFichier(dossier, fichierASupprimer);
console.log(`Fichier "${fichierASupprimer}" supprimé:`, fichierSupprime);
//On va créer une fonction qui va renommer un fichier dans un dossier
function renommerFichier(dossier, ancienNom, nouveauNom) {
    const index = dossier.fichiers.indexOf(ancienNom);
    if (index !== -1) {
        dossier.fichiers[index] = nouveauNom;
        return true;
    }
    for (const sousDossier of dossier.sousDossiers) {
        if (renommerFichier(sousDossier, ancienNom, nouveauNom)) {
            return true;
        }
    }
    return false;
}
//Appel la fonction renommerFichier avec le dossier, l'ancien nom et le nouveau nom
const ancienNomFichier = "fichier1.txt";
const nouveauNomFichier = "fichierRenomme.txt";
const fichierRenomme = renommerFichier(dossier, ancienNomFichier, nouveauNomFichier);
console.log(`Fichier "${ancienNomFichier}" renommé en "${nouveauNomFichier}":`, fichierRenomme);
//On va créer une fonction qui va ajouter un fichier dans un dossier
function ajouterFichier(dossier, nomFichier) {
    dossier.fichiers.push(nomFichier);
}
//Appel la fonction ajouterFichier avec le dossier et le nom du fichier
ajouterFichier(dossier, "nouveauFichier.txt");
console.log("Fichiers après ajout:", dossier.fichiers.join(", "));
//On va créer une fonction qui va déplacer un fichier d'un dossier à un autre
function deplacerFichier(dossierSource, dossierDestination, nomFichier) {
    if (supprimerFichier(dossierSource, nomFichier)) {
        ajouterFichier(dossierDestination, nomFichier);
        return true;
    }
    return false;
}
//Appel la fonction deplacerFichier avec le dossier source, le dossier destination et le nom du fichier
const dossierDestination = {
    nom: "destination",
    fichiers: [],
    sousDossiers: []
};
deplacerFichier(dossier, dossierDestination, "fichierRenomme.txt");
console.log("Fichiers dans le dossier source après déplacement:", dossier.fichiers.join(", "));
console.log("Fichiers dans le dossier destination après déplacement:", dossierDestination.fichiers.join(", "));
//On va créer une fonction qui va copier un fichier d'un dossier à un autre
function copierFichier(dossierSource, dossierDestination, nomFichier) {
    if (chercherFichier(dossierSource, nomFichier)) {
        ajouterFichier(dossierDestination, nomFichier);
        return true;
    }
    return false;
}
//Appel la fonction copierFichier avec le dossier source, le dossier destination et le nom du fichier
copierFichier(dossier, dossierDestination, "fichierRenomme.txt");
console.log("Fichiers dans le dossier source après copie:", dossier.fichiers.join(", "));
console.log("Fichiers dans le dossier destination après copie:", dossierDestination.fichiers.join(", "));
//On va créer une fonction qui va compresser un dossier
function compresserDossier(dossier) {
    const fichiersCompresse = dossier.fichiers.map(fichier => fichier + ".zip");
    dossier.fichiers = fichiersCompresse;
    dossier.sousDossiers.forEach(sousDossier => {
        compresserDossier(sousDossier);
    });
}
//Appel la fonction compresserDossier avec le dossier
compresserDossier(dossier);
console.log("Fichiers après compression:", dossier.fichiers.join(", "));
//On va créer une fonction qui va décompresser un dossier
function decompresserDossier(dossier) {
    const fichiersDecompresse = dossier.fichiers.map(fichier => fichier.replace(".zip", ""));
    dossier.fichiers = fichiersDecompresse;
    dossier.sousDossiers.forEach(sousDossier => {
        decompresserDossier(sousDossier);
    });
}
//Appel la fonction decompresserDossier avec le dossier
decompresserDossier(dossier);
console.log("Fichiers après décompression:", dossier.fichiers.join(", "));
//On va créer une fonction qui va afficher la taille d'un dossier
function afficherTailleDossier(dossier) {
    let taille = dossier.fichiers.length;
    dossier.sousDossiers.forEach(sousDossier => {
        taille += afficherTailleDossier(sousDossier);
    });
    return taille;
}
//Appel la fonction afficherTailleDossier avec le dossier
const tailleDossier = afficherTailleDossier(dossier);
console.log("Taille du dossier:", tailleDossier);
//On va créer une fonction qui va afficher la date de création d'un dossier
function afficherDateCreationDossier(dossier) {
    const dateCreation = new Date();
    console.log("Date de création du dossier:", dateCreation);
    dossier.sousDossiers.forEach(sousDossier => {
        afficherDateCreationDossier(sousDossier);
    });
}
//Appel la fonction afficherDateCreationDossier avec le dossier
afficherDateCreationDossier(dossier);
//On va créer une fonction qui va afficher la date de modification d'un dossier
function afficherDateModificationDossier(dossier) {
    const dateModification = new Date();
    console.log("Date de modification du dossier:", dateModification);
    dossier.sousDossiers.forEach(sousDossier => {
        afficherDateModificationDossier(sousDossier);
    });
}
//Appel la fonction afficherDateModificationDossier avec le dossier
afficherDateModificationDossier(dossier);
//On va créer une fonction qui va afficher les propriétés d'un dossier
function afficherProprietesDossier(dossier) {
    console.log("Propriétés du dossier:", dossier);
    dossier.sousDossiers.forEach(sousDossier => {
        afficherProprietesDossier(sousDossier);
    });
}
//Appel la fonction afficherProprietesDossier avec le dossier
afficherProprietesDossier(dossier);






































































