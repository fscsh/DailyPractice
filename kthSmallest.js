function kthSmallest(matrix, k) {
    let l = matrix[0][0];
    let r = matrix[matrix.length - 1][matrix.length - 1];
    let mid = 0;
    let res = 0;
    while (l < r) {
        console.log('l = ', l, 'r = ', r);
        mid = l + (r - l) / 2;
        console.log('mid = ', mid);
        let tmp = 0;
        for (let i = 0; i < matrix.length; i++) {
            tmp += helper(matrix[i], mid, matrix.length);
        }
        console.log('tmp  = ', tmp);
        if (tmp > k) {
            r = mid;
        } else if (tmp<k) {
            l = mid + 1;
        }else{
            res = l;
            l = mid+1;
        }
    }
    console.log('final res = ',res);
    if (mid>res) {
        return res;
    }else {
        return mid;
    }

}

function helper(matrix, m, length) {
    console.log('');
    console.log('enter helper');
    let l = 0;
    let r = length;
    while (l < r) {
        console.log('l', l, 'r', r);
        let mid = Math.floor(((r + l) / 2));
        if (m < matrix[mid]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    console.log('now l = ', l);
    return l;
}
