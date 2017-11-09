function searchRange(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var res = [];
    var count = 0;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            count = 1;
            break;
        }
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (count === 0) {
        return [-1, -1];
    }
    console.log(mid);
    count = 0;
    for (let i = mid - 1; i >= 0; i--) {
        if (nums[i] !== target) {
            res.push(i+1);
            count = 1;
            break;
        }
    }
    if (count === 0) {
        res.push(0);
    }
    count = 0;
    for (let i = mid; i < nums.length; i++) {
        if (nums[i] !== target) {
            console.log('get target');
            res.push(i-1);
            count = 1;
            break;
        }
    }
    if (count === 0) {
        res.push(nums.length-1);
    }
    return res;
}
