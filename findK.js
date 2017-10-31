function findKthLargest(nums, k) {
    for (var i = 0; i < k; i++) {
        let left = 0;
        while (left < nums.length - 1) {
            console.log(nums);
            if (nums[left] > nums[left + 1]) {
                let tmp = nums[left];
                nums[left] = nums[left + 1];
                nums[left + 1] = tmp;
                left++;
            } else {
                left++;
            }
        }
    }
    return nums[nums.length - k]
}
