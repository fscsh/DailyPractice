function getPermutation(n, k) {
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    let res = [[nums.pop()]];
    console.log('res ', res);
    console.log('nums',nums);
    for (let i = 0; i < nums.length; i++) {
        let tmp = nums.pop();
        console.log('tmp = ',tmp);
        let length = res[i].length;
        for (let j = 0; j <= length; j++) {
            res[j] = res[j].splice(j, 0, tmp);
            console.log('res[j] = ',res[j], ' j',j);
        }
    }
    return res;

}
