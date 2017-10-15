function uniquePaths(m, n) {
    var res = [];
    for (let i = 0; i < m; i++) {
         res[i] = [];
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                res[i][j] = 1;
                // console.log('res = ', res);
            } else {
                var tmp = res[i - 1][j] + res[i][j - 1];
                res[i][j] = (tmp);

            }
        }
    }
    // console.log(res);
    return res[m-1][n-1];
}
