var binaryTreePaths = function(root) {
    const paths = [];
    function dfs(node,path){
        if(!node) return;
        path+= node.val.toString();
        if(!node.left && !node.right){
            paths.push(path);
            return;
        }
        path+='->';
        dfs(node.left, path);
        dfs(node.right, path);
    }
    dfs(root,'');
    return paths;
};