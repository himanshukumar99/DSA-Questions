var reverseVowels = function(s) {
    const isVowel = (char) =>'aeiouAEIOU'.includes(char);
    let left = 0;
    let right = s.length-1;
    const chars = s.split('');
    while(left<right){
        if(isVowel(chars[left]) && isVowel(chars[right])){
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--
        }else if(isVowel(chars[left])){
            right--;
        }else{
            left++;
        }
    }
    return chars.join('');
};