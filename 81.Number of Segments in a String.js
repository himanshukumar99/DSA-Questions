var countSegments = function(s) {
    let count = 0;
    let i =0;
    const n = s.length;
    while(i<n){
        while(i<n && s[i] ===' '){
            i++
        }
        if(i<n && s[i] !==' '){
            count++;
        }
        while(i<n && s[i] !==' '){
            i++;
        }    
    }
    return count
};