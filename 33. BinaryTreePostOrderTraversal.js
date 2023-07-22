class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left =  left;
        this.right = right;
    }
} 
var postorderTraversal = function(root) {
    if(!root) return [];
    const result = [];
    function traverse(node){
        if(!node) return;
        
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }
    traverse(root);
    return result;
};