var longestCommonPrefix = function(strs) {
    if(strs.length ===0) return '';
    let commonPrefix = strs[0];
    for(let i = 1; i<strs.length; i++){
        const currentStr = strs[i];
        const minLength = Math.min(commonPrefix.length, currentStr.length);
        let j = 0;
        while(j<minLength && commonPrefix[j] === currentStr[j]){
            j++;
        }
        commonPrefix = commonPrefix.substring(0,j);
        if(commonPrefix === ''){
            return commonPrefix;
        }
    }
    return commonPrefix;
};