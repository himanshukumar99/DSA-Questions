var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j =  num2.length - 1;
    let carry =0;
    let result = "";
    while(i>=0 || j>=0 || carry!=0){
        const digit1 = i>=0 ? parseInt(num1.charAt(i)) : 0;
        const digit2 = j>=0 ? parseInt(num2.charAt(j)) : 0;
        const sum = digit1+ digit2+ carry;
        carry = Math.floor(sum/10);
        const digitSum = sum%10;
        result = digitSum + result;
        i--;
        j--;
    }
    return result;
 };