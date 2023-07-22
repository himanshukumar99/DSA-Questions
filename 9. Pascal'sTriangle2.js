var getRow = function(rowIndex) {
    const row =  [];
    row[0] = 1;
    for(let j = 1; j<=rowIndex; j++){
        row[j] = (row[j-1]* (rowIndex-j+1))/j;
    }
    return row;
}