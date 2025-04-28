function saluerLuka(input) {
    // Convertir l'entrée en majuscules pour éviter les erreurs de casse
    const normalizedInput = input.toUpperCase().replace(/\s+/g, '');
    
    // Vérifier si l'entrée correspond à "YMCA"
    if (normalizedInput === 'YMCA') {
      console.log('Bonjour Luka');
    } else {
      console.log('Entrée non reconnue');
    }
  }
  
  // Exemple d'utilisation
  saluerLuka('Y M C A'); // Affichera "Bonjour Luka"

  //test nul