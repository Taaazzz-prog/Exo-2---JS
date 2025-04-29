// Configuration des plages horaires et des messages
const humeurConfig = {
    plages: [
      { heureMax: 12, message: "Héhé! il n'est pas midi, on fait un apéro ?!?" },
      { heureMax: 18, message: "Il n'est pas encore 18h, on se fait un autre apéro ?!?" },
      { heureMax: 24, message: "Pfiu on picole depuis ce matin, je vais peut-être reprendre une bière ?!?" }
    ],
    heures: {
      midi: 12,
      dixhuit: 18
    }
  };
  
  // Fonction pour obtenir l'humeur en fonction de l'heure
  function humeurDuJour(config) {
    const heure = new Date().getHours();
    let message = "";
  
    // Parcourir les plages pour trouver le message correspondant
    for (let plage of config.plages) {
      if (heure < plage.heureMax) {
        message = plage.message;
        break;
      }
    }
  
    console.log(`Il est ${heure}h : ${message}`);
  }
  
  // Appel de la fonction avec la configuration
  humeurDuJour(humeurConfig);