const commandes = [
    {clientId: 1, produit: "Livre JavaScript", categorie: "Livres", quantite: 2},
    {clientId: 1, produit: "Stylo Rouge", categorie: "Papeterie", quantite: 3},
    {clientId: 2, produit: "Livre JavaScript", categorie: "Livres", quantite: 1},
    {clientId: 1, produit: "Cahier", categorie: "Papeterie", quantite: 4},
    {clientId: 2, produit: "Stylo Bleu", categorie: "Papeterie", quantite: 2},
    {clientId: 2, produit: "Livre Node.js", categorie: "Livres", quantite: 3},
    {clientId: 1, produit: "Stylo Rouge", categorie: "Papeterie", quantite: 1}
];

/*

Résultat souhaité à créé avec le plus de boucles possible
[
    {
        clientId: 1,
        Categorie: [
            {
                categorie: "Livres",
                produits: [
                    {
                        produit: "Livre JavaScript",
                        quantite: 2
                    },
                    {
                        produit: "Livre Node.js",
                        quantite: 3
                    }
                ]
            },
            {
                categorie: "Papeterie",
                produits: [
                    {
                        produit: "Stylo Rouge",
                        quantite: 3
                    },
                    {
                        produit: "Cahier",
                        quantite: 4
                    },
                    {
                        produit: "Stylo Rouge",
                        quantite: 1
                    }
                ]
            }
        ]
    },
    {
        clientId: 2,
        Categorie: [
            {
                categorie: "Livres",
                produits: [
                    {
                        produit: "Livre JavaScript",
                        quantite: 1
                    }
                ]
            },
            {
                categorie: "Papeterie",
                produ
]
*/

// Déclaration du tableau résultat vide qui va contenir la structure finale
const result = [];

// Boucle pour parcourir chaque commande dans le tableau commandes
for (let i = 0; i < commandes.length; i++) {
    const commande = commandes[i]; 
    //console.log(`Traitement de la commande ${i + 1}:`, commande);
    let clientExist = false; // Flag pour vérifier si le client est déjà dans le résultat

    // Vérifier si le client est déjà dans le résultat
    for (let j = 0; j < result.length; j++) {
        if (result[j].clientId === commande.clientId) {
            clientExist = true; 
            //console.log(`Client ${commande.clientId} déjà existant dans le résultat.`);
            // Vérifier si la catégorie existe pour ce client
            let categorieExist = false; 
            for (let k = 0; k < result[j].Categorie.length; k++) {
                if (result[j].Categorie[k].categorie === commande.categorie) {
                    categorieExist = true; 
                    //console.log(`Catégorie "${commande.categorie}" déjà existante pour le client ${commande.clientId}.`);
                    // Vérifier si le produit existe dans cette catégorie
                    let produitExist = false; /
                    for (let l = 0; l < result[j].Categorie[k].produits.length; l++) {
                        if (result[j].Categorie[k].produits[l].produit === commande.produit) {
                            // Si le produit existe, additionner la quantité
                            result[j].Categorie[k].produits[l].quantite += commande.quantite;
                            //console.log(`Produit "${commande.produit}" existant, quantité mise à jour:`, result[j].Categorie[k].produits[l]);
                            produitExist = true;
                        }
                    }
                    // Si le produit n'existe pas, l'ajouter à la catégorie
                    if (!produitExist) {
                        result[j].Categorie[k].produits.push({
                            produit: commande.produit,
                            quantite: commande.quantite
                        });
                        //console.log(`Produit "${commande.produit}" ajouté à la catégorie "${commande.categorie}".`);
                    }
                }
            }
            // Si la catégorie n'existe pas, l'ajouter à ce client
            if (!categorieExist) {
                result[j].Categorie.push({
                    categorie: commande.categorie,
                    produits: [
                        {
                            produit: commande.produit,
                            quantite: commande.quantite
                        }
                    ]
                });
                //console.log(`Nouvelle catégorie "${commande.categorie}" ajoutée pour le client ${commande.clientId}.`);
            }
        }
    }
    // Si le client n'existe pas, l'ajouter avec la catégorie et le produit
    if (!clientExist) {
        result.push({
            clientId: commande.clientId,
            Categorie: [
                {
                    categorie: commande.categorie,
                    produits: [
                        {
                            produit: commande.produit,
                            quantite: commande.quantite
                        }
                    ]
                }
            ]
        });
        //console.log(`Nouveau client ${commande.clientId} ajouté avec sa première commande.`);
    }
}

// Affichage final du résultat pour vérification
console.log("Résultat final :", JSON.stringify(result, null, 2));