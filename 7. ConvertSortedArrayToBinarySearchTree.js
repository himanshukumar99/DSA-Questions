class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
} 
var sortedArrayToBST = function(nums) {
    return constructBST(nums, 0, nums.length-1)
};
var constructBST = function(nums,start,end){
    if(start>end){
        return null;
    }
    const mid = Math.floor((start + end)/2);
    const root =  new TreeNode(nums[mid]);

    root.left =  constructBST(nums, start, mid-1);
    root.right  = constructBST(nums, mid+1, end);

    return root;
}