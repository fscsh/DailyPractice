var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null;
    }
    if (root.left === null && root.right === null) {
        return root.val;
    }
    return helper(root,p,q);
    function helper(root,p,q){
        if (root === null || root.val === p || root.val === q) {
            return root;
        }
        var left = helper(root.left,p,q);
        var right = helper(root.right,p,q);
        if (left !== null && right !== null) {
            return root.val;
        }
        return left !== null ? left : right;

    }
}
