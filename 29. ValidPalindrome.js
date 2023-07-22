var isPalindrome = function(s) {
    const modifiedString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0;
    let right = modifiedString.length-1;
    while(left<right){
        if(modifiedString[left]!= modifiedString[right]) return false;
        left++;
        right--;
    }
    return true;
};