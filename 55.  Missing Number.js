var missingNumber = function(nums) {
    n = nums.length
      const expectedSum = (n * (n + 1)) / 2;
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return expectedSum - sum;
  };