function spiralOrder(matrix) {
    let res = [];
    if (matrix.length === 0) {
        console.log('000');
        return res;
    }
    if (matrix.length === 1) {
        console.log('length =1');
        for (let i = 0; i < matrix[0].length; i++) {
            res.push(matrix[0][i]);
        }
        return res;
    }
    if (matrix[0].length === 1) {
        for (let i = 0; i < matrix.length; i++) {
            res.push(matrix[i][0]);
        }
        return res;
    }
    let xbegin = 0;
    let xend = matrix[0].length - 1;
    let ybegin = 0;
    let yend = matrix.length - 1;
    // console.log(matrix.length);
    // console.log(xbegin,xend,ybegin,yend);
    while (xbegin <= xend && ybegin <= yend) {

        for (let i = xbegin; i <= xend; i++) {
            res.push(matrix[xbegin][i]);
        }
        ybegin++;
        for (let i = ybegin; i <= yend; i++) {
            res.push(matrix[i][xend]);
        }
        xend--;
        if (ybegin <= yend) {
            for (let i = xend; i >= xbegin; i--) {
                res.push(matrix[yend][i]);
            }
            yend--;
        }
        if (xbegin <= xend) {
            for (let i = yend; i >= ybegin; i--) {
                res.push(matrix[i][xbegin]);
            }
            xbegin++;
        }
    }
    return res;

}
// let matrix = [[7],[9],[6]];
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(spiralOrder(matrix));
