function findDuplicate(nums){
    let map = {};
    for (var i = 0; i < nums.length; i++) {
       if (nums[i] in  map) {
           return nums[i];
       }else {
           map[nums[i]] = nums[i];
       }
    }
    return -1;
}
