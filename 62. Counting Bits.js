var countBits = function(num) {
    const dp = new Array(num+1).fill(0);
    for(let i = 0; i<=num; i++){
        dp[i] = dp[i>>1] + (i&1)
    }
    return dp
};