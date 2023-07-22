var titleToNumber = function(column) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = 0;
    for(let i = 0; i< column.length; i++){
        const letter = column[column.length -1 -i];
        const position = letters.indexOf(letter)+1;
        result+= position * Math.pow(26, i);
    }
    return result;
};