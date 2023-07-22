var convertToTitle = function(n) {
    let columnTitle = '';
    while(n>0){
        n--;
        const remainder= n%26;
        const char = String.fromCharCode(65+remainder);
        columnTitle = char + columnTitle;
        n = Math.floor(n/26);
    }
    return columnTitle;
};