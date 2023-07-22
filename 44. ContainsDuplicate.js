function containsDuplicate(nums){
    let seen = new Set();
    for(const num of nums){
        if(seen.has(num)){
            return true;
        }else{
            seen.add(num);
        }
    } 
    return false;
 };