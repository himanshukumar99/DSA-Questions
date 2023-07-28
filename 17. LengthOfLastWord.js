var lengthOfLastWord = function(s) {
    
    s = s.trim(); // Remove leading and trailing spaces
    let count = 0;
    let i = s.length - 1;
  
    while (i >= 0 && s[i] !== ' ') {
      count++;
      i--;
    }
  
    return count;
  }