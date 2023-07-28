class TreeNode {
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var isSameTree = function(p, q) {
 if (!p && !q) {
   return true; // Both trees are empty, so they are the same
 }

 if (!p || !q) {
   return false; // Only one tree is empty, they are different
 }

 if (p.val !== q.val) {
   return false; // Nodes have different values, they are different
 }

 return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}