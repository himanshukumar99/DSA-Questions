var isAnagram = function(s, t) {
    if(s.length!= t.length) return false;
    const charFrequencyMap1 = {};
    const charFrequencyMap2 = {};
    for(let char of s){
        charFrequencyMap1[char] = (charFrequencyMap1[char] || 0)+1;
    }
    for(let char of t){
        charFrequencyMap2[char] = (charFrequencyMap2[char] || 0)+1;
    }
    for(let char in charFrequencyMap1){
        if(charFrequencyMap1[char]!=charFrequencyMap2[char]) return false;
    }
    return true;
};