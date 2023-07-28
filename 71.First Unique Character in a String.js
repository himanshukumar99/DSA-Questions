var firstUniqChar = function(s) {
    const charFrequency = new Map();
    for(const char of s){
        charFrequency.set(char, (charFrequency.get(char) ||0) +1);
    }
    for(let i = 0; i<s.length; i++){
        if(charFrequency.get(s[i]) === 1) return i;
    }
    return -1
};