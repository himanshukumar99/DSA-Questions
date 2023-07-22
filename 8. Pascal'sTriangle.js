var generate = function(numRows) {
    if(numRows<0){
        return [];
    }
    const Triangle = [];
    for(let i = 0; i<numRows; i++){
        const row = [];
        for(let j = 0; j<=i; j++){
            if(j===0 || j ===i){
                row.push(1);
            }else{
                const prevRow = Triangle[i-1];
                const sum = prevRow[j-1]+prevRow[j];
                row.push(sum);
            }
        }
        Triangle.push(row);
    }
    return Triangle
};