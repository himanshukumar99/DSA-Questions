var findTheDifference = function(s, t) {
    const charFrequency = new Map();
    for(const char of t){
        charFrequency.set(char, (charFrequency.get(char) ||0) +1);
    }
    for(const char of s){
        charFrequency.set(char, charFrequency.get(char) -1);
    }
    for(const[char, freq] of charFrequency){
        if(freq ===1) return char
    }
    return "";
};