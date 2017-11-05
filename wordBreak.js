function wordBreak(s, wordDick) {
    if (wordDick.length === 0) {
        return false;
    }
    let result = helper(s, wordDick, str = '',res = []);
    if (result.length === 0) {
        return false;
    }else {
        return true;
    }

}

function helper(s, wordDick, str) {
    console.log('str = ', str);
    if (str===s) {
        console.log('get answer');
        res.push(1);
        return ;
    }
    if (str.length>s.length) {
        return;
    }
    for (var i = 0; i < wordDick.length; i++) {
        console.log('i = ',i,'wordDick = ',wordDick);
        helper(s, wordDick , str + wordDick[i]);
    }
    console.log('res  = ',res);
    return res;
}
