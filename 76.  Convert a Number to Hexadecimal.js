var toHex = function(num) {
    if(num===0) return "0";
    let result = "";
    const hexDigits = "0123456789abcdef"
    while(num!==0 && result.length < 8){
          result = hexDigits[num & 0xf]+ result;
          num>>>=4;
    }
    return result;
};