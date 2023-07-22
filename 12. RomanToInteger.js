var romanToInt = function(roman) {
    const romanMap = new Map();
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    
    let total = 0;
    for(let i = 0; i< roman.length; i++){
        const currentSymbol = roman[i];
        const currentValue = romanMap.get(currentSymbol);

        const nextSymbol = roman[i+1];
        const nextValue = romanMap.get(nextSymbol);
        if(nextValue && currentValue < nextValue){
            total-= currentValue;
        }else{
            total+= currentValue;
        }
    }
    return total;
};