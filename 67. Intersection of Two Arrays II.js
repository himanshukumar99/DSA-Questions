var intersect = function(nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();
    const result = [];
    for(const num of nums1){
      map1.set(num, (map1.get(num) || 0) +1);
    }
    for(const num of nums2){
      map2.set(num, (map2.get(num) || 0) +1);
    }
    for(const[num, freq1] of map1){
      if(map2.has(num)){
        const freq2 = map2.get(num);
        const minFreq = Math.min(freq1, freq2);
        for(let i = 0; i<minFreq; i++){
          result.push(num)
        }
      }
    }
    return result;
  };