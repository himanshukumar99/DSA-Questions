var mySqrt = function(x) {
    if(x ===0 || x===1){
         return x;
    }     
    let left = 0;
    let right=x;
    while(left<=right){
        const mid = Math.floor((left +right)/2);
        const square = mid * mid;
        if(square === x){
            return mid;
        }else if(square>x){
            right = mid -1;
        }else{
            left = mid +1;
        }
    }
    return right;
};