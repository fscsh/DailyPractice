function solveNQueens(n) {
    let board = [];
    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; j < n; j++) {
            tmp.push('.');
        }
        board.push(tmp);
    }
    result = helper(n, board, 0, res = []);
    // console.log('result', result);
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].map(JSON.parse);
    }
    // console.log('resule',result);
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            result[i][j] = result[i][j].join('');
        }

    }
    return result;

}

function helper(n, board, i, res) {
    // console.log(board);
    if (i === n) {
        return res.push(board.map(JSON.stringify));
    }
    for (let j = 0; j < n; j++) {
        // console.log('i', i, 'j', j);
        if (board[i][j] === '.') {
            // console.log('enter ... ');
            if (checkboard(i, j, board)) {
                // console.log('enter checkboard');
                board[i][j] = 'Q';
                // console.log('board',board);
                helper(n, board, i + 1, res);
                board[i][j] = '.';
            }
        }
    }
    return res;
}

function checkboard(i, j, board) {
    for (let t = i - 1; t >= 0; t--) {
        if (board[t][j] === 'Q') {
            return false;
        }
    }
    for (let t = i - 1, q = j - 1; t >= 0 && q >= 0; t--, q--) {
        if (board[t][q] === 'Q') {
            return false;
        }
    }
    for (let t = i - 1, q = j + 1; t >= 0 && q <= board.length; t--, q++) {
        if (board[t][q] === 'Q') {
            return false;
        }
    }
    return true
}







console.log(solveNQueens(4));
