var isBalanced = function(root) {
    if (root === null || (root.left === null && root.right === null)) {
        return true;
    }
    var left = helper(root.left);
    var right = helper(root.right);
    var diff = Math.abs(left-right);
    return diff<=1 && isBalanced(root.left) && isBalanced(root.right);

}

function helper(node) {
    if (node === null) {
        return 0;
    }
    var left =1+ helper(node.left);
    var right =1+ helper(node.right);

    return Llevel>Rlevel? Llevel:Rlevel;
}


var levelOrderBottom = function(root){
    let res = [];
    if (root === null) {
        return res;
    }
    var level = 0;
    var map ={};
    helper(root,level);
    for (var i in map) {
        res.push(map[i])
    }
    return res.reverse();
    function helper(root,level){
        if (root === null) {
            return;
        }
        if (!map[level]) {
            map[level] = [root.val];
        }else {
            map[level].push(root.val);
        }
        helper(root.left,level+1);
        helper(root.right,level+1);
    }
}

function longestConsecutive(nums){
    var res = 0;
    var set = new Set(nums);
    console.log(set);
    for(var i of set){
        console.log('i = ',i);
        if (!set.has(i-1)) {
            let j = i+1;
            console.log('j =',j);
            while(set.has(j)){
                console.log('j',j);
                j += 1;
            }
            res = Math.max(res,j-i);
            console.log('res = ',res);
        }
    }
    return res;
}
