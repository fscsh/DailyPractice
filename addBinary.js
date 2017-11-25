function addBinary(a, b) {
    if (a.length === 0 && b.length === 0) {
        return 0;
    }
    let res = [];
    if (a.length === 0 || b.length === 0) {
        return a.length > 0 ? a : b;
    }
    a = a.split('');
    b = b.split('');
    let count = a.length >= b.length ? a.length : b.length;
    let carry = 0;
    let sum = 0;
    console.log('count = ', count);
    while (count > 0) {
        if (a.length !== 0) {
            sum += parseInt(a[a.length - 1]);
            console.log('add a ,sum = ', sum);
            a = a.slice(0,a.length -1);
        }
        if (b.length !==0) {
            sum += parseInt(b[b.length - 1]);
            console.log('add b ,sum = ', sum);
            b = b.slice(0,b.length-1);
        }
        sum += carry;
        carry = 0;
        console.log('sum=',sum);
        if (sum === 2) {
            carry = 1;
            sum = 0;
            let tmp = sum ;
            res.unshift(tmp);
        }else if (sum === 3) {
            carry = 1;
            sum = 1;
            let tmp = sum ;
            res.unshift(tmp);
        }else {
            carry = 0;
            let tmp = sum ;
            res.unshift(tmp);
        }
        console.log(res);
        sum = 0;
        count--;
    }
    if (carry === 1) {
        res.unshift(1)
    }
    return res.join('');
}
