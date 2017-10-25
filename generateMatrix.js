function generateMatrix(n) {
    let res = [];
    if (n === 0) {
        return res;
    }
    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; j < n; j++) {
            tmp.push(0);
        }
        res.push(tmp);
    }
    let xbegin = 0;
    let xend = n - 1;
    let ybegin = 0;
    let yend = n - 1;
    let num = 1;
    while (xbegin <= xend && ybegin <= yend) {
        for (let i = xbegin; i <= xend; i++) {
            res[xbegin][i] = num;
            num += 1;
        }
        ybegin++;
        for (let i = ybegin; i <= yend; i++) {
            res[i][yend] = num;
            num += 1;
        }
        xend--;
        if (ybegin <= yend) {
            for (let i = xend; i >= xbegin; i--) {
                res[yend][i] = num;
                num += 1;
            }
            yend--;
        }
        if (xbegin <= xend) {
            for (let i = yend; i >= ybegin; i--) {
                res[i][xbegin] = num;
                num += 1;
            }
            xbegin++;
        }
    }

    return res;
}

console.log(generateMatrix(3));
