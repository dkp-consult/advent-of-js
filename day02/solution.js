function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    const frameWidth = maxLength + 2;
    const border = '*'.repeat(frameWidth + 2);
    
    const framedNames = names.map(name => `* ${name.padEnd(maxLength, ' ')} *`);
    
    return [border, ...framedNames, border].join('\n');
}