var addBinary = function(a, b) {
    let i = a.length -1;
    let j = b.length -1;
    let carry = 0;
    let result = '';
    while(i>=0||j>=0||carry>0){
        const digitA = i>=0 ? parseInt(a.charAt(i)):0;
        const digitB = j>=0 ? parseInt(b.charAt(j)):0;
        const sum = digitA+ digitB+ carry;
        if(sum ===0 || sum ===1){
            result = sum.toString()+result;
            carry = 0;
        }else if(sum ===2){
            result = '0'+result;
            carry = 1;
        }else if(sum ===3){
            result = '1' +result;
            carry = 1;
        }
        i--;
        j--;
    }
    return result;
};