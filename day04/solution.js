function createXmasTree(height, ornament) {
    const width = 2 * height - 1;
    let result = '';
    
    // Construire le triangle en utilisant une approche différente
    for (let i = 1; i <= height; i++) {
        const ornaments = 2 * i - 1;
        const padding = (width - ornaments) / 2;
        result += '_'.repeat(padding) + ornament.repeat(ornaments) + '_'.repeat(padding) + '\n';
    }
    
    // Ajouter le tronc
    const trunk = '_'.repeat(Math.floor(width / 2)) + '#' + '_'.repeat(Math.floor(width / 2));
    result += trunk + '\n' + trunk;
    
    return result;
}

/* 
function createXmasTree(height, ornament) {
    // Calculer la largeur totale (2 * height - 1)
    const width = 2 * height - 1;
    let result = [];
    
    // Construire le triangle
    for (let i = 0; i < height; i++) {
        const ornaments = 2 * i + 1;
        const padding = (width - ornaments) / 2;
        const line = '_'.repeat(padding) + 
                     ornament.repeat(ornaments) + 
                     '_'.repeat(padding);
        result.push(line);
    }
    
    // Ajouter le tronc
    const trunkPadding = '_'.repeat((width - 1) / 2);
    result.push(trunkPadding + '#' + trunkPadding);
    result.push(trunkPadding + '#' + trunkPadding);
    
    // Joindre toutes les lignes avec \n
    return result.join('\n');
}
*/