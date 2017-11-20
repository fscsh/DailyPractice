function search(nums, target) {
    if (nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length -1;
    let res = [-1];
    return helper(nums, target, res , left, right);
}

function helper(nums, target, res, left, right) {
    console.log(res);
    if (left > right) {
        res[0] = -1;
        return;
    }
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (target === nums[mid]) {
        res[0] = mid;
        return;
    }
    if (nums[mid] >= nums[left]) {
        if (target < nums[mid] && target >= nums[left]) {
            helper(nums, target, res, left, mid - 1);
        } else {
            helper(nums, target, res, mid + 1, right);
        }
    } else {
        if (target > nums[mid] && target <= nums[right]) {
            helper(nums, target, res, mid + 1, right);
        } else {
            helper(nums, target, res, left, mid - 1);
        }
    }
    return res[0];
}

//duplicate case
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log('left = ', left, 'right = ', right, 'mid =', mid);
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] > nums[left]) {
            console.log('mid>left');
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if(nums[mid]< nums[left]){
            console.log('mid<right');
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }else {
            left++;
        }
    }
    return false;
}
