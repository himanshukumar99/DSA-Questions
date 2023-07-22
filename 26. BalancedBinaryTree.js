class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 
function getHeight(root){
    if(!root) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right))+1;
}
var isBalanced = function(root) {
    if(!root) return true;
    if(Math.abs(getHeight(root.left)-getHeight(root.right))>1){
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};