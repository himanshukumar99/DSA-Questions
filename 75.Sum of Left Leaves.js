
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const dfs = (node) =>{
        if(!node) return;
        if(node.left && !node.left.left && !node.left.right){
            sum += node.left.val;
        }
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return sum;
};