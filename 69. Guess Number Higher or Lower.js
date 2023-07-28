
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        const guessResult = guess(mid);
        if(guessResult ===0){
            return mid;
        }else if(guessResult ===1){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return -1;
};