function permute(nums){
    let arr = [[nums[0]]];
    for (let i = 1; i < nums.length; i++) {
        arr = helper(arr,res = [],nums[i]);
    }
    return arr;
}

function helper(arr,res,num){
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i];
        for (let j = 0; j <= tmp.length; j++) {
            tmp.splice(j,0,num);
            res.push(tmp.slice());
            tmp.splice(j,1);
        }
    }
    return res;
}
