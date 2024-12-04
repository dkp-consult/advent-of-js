function organizeInventory(inventory) {
  return inventory.reduce((acc, { name, quantity, category }) => {
    // Si la catégorie n'existe pas, on la crée
    if (!acc[category]) {
      acc[category] = {};
    }
    
    // On ajoute ou met à jour la quantité du jouet
    acc[category][name] = (acc[category][name] || 0) + quantity;
    
    return acc;
  }, {});
};

/* 
function organizeInventory(inventory) {
  const result = {};
  
  inventory.forEach(({ name, quantity, category }) => {
    // Initialisation de la catégorie si elle n'existe pas
    result[category] = result[category] || {};
    
    // Ajout ou mise à jour de la quantité
    result[category][name] = (result[category][name] || 0) + quantity;
  });
  
  return result;
} 
*/

const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]
  
  organizeInventory(inventary)
  
  // Expected result:
  // {
  //   toys: {
  //     doll: 5,
  //     car: 5
  //   },
  //   sports: {
  //     ball: 2,
  //     racket: 4
  //   }
  
  const inventary2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]
  
  organizeInventory(inventary2)
  
  // Expected result:
  // {
  //   education: {
  //     book: 15
  //   },
  //   art: {
  //     paint: 3
  //   }
  // }