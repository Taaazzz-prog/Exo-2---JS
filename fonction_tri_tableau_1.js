//On déclare une const produit avec dedans un clientID 1 et un clientID2 avec les produits acheté et la quantité

const produits = [
    { clientid: 1, produit: "livre", quantite: 2 },
    { clientid: 2, produit: "stylo", quantite: 5 },
    { clientid: 1, produit: "livre", quantite: 3 },
    { clientid: 1, produit: "stylo", quantite: 1 },
    { clientid: 2, produit: "livre", quantite: 4 },
    { clientid: 2, produit: "stylo", quantite: 2 }
  ];

//Etapes 1 : Regrouper par clientid
//Etapes 2 : Regrouper par produit et sommer les quantités
//Etapes 3 :on regroupe les produits et la quantité
//Etapes 4 : On parcours la liste de chaque client pour transformer en tableau et trier
// Parcourir chaque achat


//On doit regrouper ces commandes pour chaque client et calculer le total par produit
/* [
    {
        clientid: 1,
        achats: [
            { produit: "livre", quantite: 5 },
            { produit: "stylo", quantite: 3 }
        ]
    },
    {
        clientid: 2,
        achats: [
            { produit: "livre", quantite: 4 },
            { produit: "stylo", quantite: 2 }
        ]
    }
] 
    Etapes 1 :
        - PArcourir chaque commande du tableau initial
    Etapes 2 :
        - pour chaque commande, vérifier si on a déjà enregisté ce client dans un nouveau tableau {resultats}
    Etapes 3 :
        - si le client est déjà dans le tableau résultats, alors vérifier si le produit est déjà enregistre pour ce client.
    Eatpes 4:
        - si le produit existe déjà, on ajoute la quantité à celle existante.
        _ si le produit n'existe pas, o najoute ce nouveau produit avec sa quantité intitiale
    Etapes 5:
        - si le client n'est pas dans le tableau résultats, on ajoute le client avec son premier produit et sa quantité

*/

  
  const resultats = []; // tableau pour stocker les clients et leurs produits
  
  // Etape 1 : Parcourir chaque commande
  for (let i = 0; i < produits.length; i++) {
    const commande = produits[i];
    //console.log(`Étape 1 - Commande ${i + 1}:`, commande);
  
    // Vérifier si le client est déjà dans resultats
    let clientExiste = false;
    for (let j = 0; j < resultats.length; j++) {
      if (resultats[j].clientid === commande.clientid) {
        clientExiste = true;
        //console.log(`  - Client ${commande.clientid} déjà enregistré.`);
        
        // Etape 3 : Vérifier si le produit est déjà enregistré pour ce client
        let produitExiste = false;
        for (let k = 0; k < resultats[j].produits.length; k++) {
          if (resultats[j].produits[k].produit === commande.produit) {
            produitExiste = true;
           // console.log(`    - Produit "${commande.produit}" déjà enregistré pour ce client.`);
            
            // Etape 4 : Si le produit existe, ajouter la quantité
            resultats[j].produits[k].quantite += commande.quantite;
            //console.log(`    - Quantité mise à jour : ${resultats[j].produits[k].quantite}`);
          }
        }
        
        // Etape 4 : Si le produit n'existe pas, l'ajouter
        if (!produitExiste) {
          resultats[j].produits.push({ produit: commande.produit, quantite: commande.quantite });
          //console.log(`    - Nouveau produit "${commande.produit}" ajouté avec quantité ${commande.quantite}.`);
        }
      }
    }
    
    // Etape 5 : Si le client n'est pas dans resultats, l'ajouter avec le produit
    if (!clientExiste) {
      resultats.push({
        clientid: commande.clientid,
        produits: [{ produit: commande.produit, quantite: commande.quantite }]
      });
     // console.log(`  - Nouveau client ${commande.clientid} ajouté avec le produit "${commande.produit}" et quantité ${commande.quantite}.`);
    }
  }
  
  console.log("Résultats finaux :", JSON.stringify(resultats, null, 2));