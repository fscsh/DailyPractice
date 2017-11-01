function twoSum(nums, target) {
    let map = {};
    let res = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            res.push(map[nums[i]]);
            res.push(i);
            break;
        } else {
            let tmp = target - nums[i];
            console.log(tmp);
            map[tmp] = i;
        }
    }

    return res;
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
