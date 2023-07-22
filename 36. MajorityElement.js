var majorityElement = function(nums) {
    let majority = null;
    let count = 0;
    for(const num of nums){
        if(count ===0){
            majority = num;
            count =1
        }else if(num ===majority){
            count++;
        }else{
            count--;
        }
    }
    return majority;
};