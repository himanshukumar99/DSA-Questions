
var NumArray = function(nums) {
    this.cumulativeSum = [0];
    for(let i = 0; i<nums.length; i++){
        this.cumulativeSum.push(this.cumulativeSum[i] + nums[i]);
    }
};


NumArray.prototype.sumRange = function(i,j) {
    return this.cumulativeSum[j+1] - this.cumulativeSum[i];
};