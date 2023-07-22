class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
};