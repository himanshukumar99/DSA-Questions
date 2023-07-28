var arrangeCoins = function(n) {
    let left = 1;
    let right = n;
    while(left<=right){
        const mid = left +Math.floor((right-left) /2);
        const totalCoins = (mid * (mid+1)) /2;
        if(totalCoins<=n){
            left = mid+1;
        }else{
            right = mid-1
        }

    }
    return right;
};