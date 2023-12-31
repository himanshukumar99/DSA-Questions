class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 
var isSymmetric = function(root) {
    if(!root) return true;
    function isMirror(left,right){
        if(!left && !right) return true;
        if(!left || !right || left.val!= right.val) return false;
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    return isMirror(root.left, root.right);
};