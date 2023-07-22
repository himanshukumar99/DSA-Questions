var isPalindrome = function(number) {
    const numStr = number.toString();
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;    
};