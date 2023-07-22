function squareSumOfDigits(num){
    let sum = 0;
    while(num>0){
        const digit = num%10;
        sum += digit *digit;
        num = Math.floor(num/10);
    }
    return sum;
} 
var isHappy = function(num) {
    let slow = num;
    let fast = num;
    do{
        slow= squareSumOfDigits(slow);
        fast = squareSumOfDigits(squareSumOfDigits(fast));
    } while(slow!=fast);
    return slow ===1;
};