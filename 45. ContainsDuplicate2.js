var containsNearbyDuplicate = function(nums, k) {
    const numIndexMap = {};
    for(let i =0; i<nums.length; i++){
        const num = nums[i];
        if(num in numIndexMap && i - numIndexMap[num]<=k){
            return true;
        }
        numIndexMap[num] = i;
    }    
    return false;
};