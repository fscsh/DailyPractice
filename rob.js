function rob(nums){
    if (nums.length ===1) {
        return nums[0];
    }
    let res = 0;
    let a = 0;
    let b = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i %2 ===0) {
            a += nums[i];
            a = Math.max(a,b);
        }else {
            b +=nums[i];
            b = Math.max(a,b);
        }
    }
    res = Math.max(a,b);
    return res;
}

let nums = [2,1,4,4,5,7,6,4];
console.log(rob(nums));
