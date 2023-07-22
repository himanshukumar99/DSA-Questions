var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
    let unique = 0;
    for(let i = 1; i<nums.length; i++){
        if(nums[i]!= nums[unique]){
            unique++;
            nums[unique]= nums[i];
        }
    }
    return unique+1;
};