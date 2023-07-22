class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 
var preorderTraversal = function(root) {
    if(!root) return [];
    const result = [];
    function traverse(node){
        if(!node) return;
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);

    }
    traverse(root);
    return result;
};