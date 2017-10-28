function sortColors(nums) {
    let right = nums.length - 1;
    let left = 0;
    for (var i = 0; i <= right; i++) {

        if (nums[i] === 0 && left<right) {
            let tmp = nums[i];
            nums[i] = nums[left];
            nums[left] = tmp;
            left++;
            if (i>0) {
                i--;
            }
            console.log('0,nums = ', nums,'i = ',i,'left = ',left,'right = ',right);
        } else if (nums[i] === 2 && left<right) {
            let tmp = nums[i];
            nums[i] = nums[right];
            nums[right] = tmp;
            right--;
            i--;
            console.log('2,nums =', nums,'i = ',i,'right = ',right,'left = ',left);
        }
        while (nums[left] === 0 && left < right) {
            left ++;
            i++;
        }
        while (nums[right] === 2 && left < right) {
            right--;
        }
    }
    return nums;
}
