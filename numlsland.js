function numIslands(grid) {
    if (grid.length === 0) {
        return 0;
    }
    let x = grid[0].length;
    let y = grid.length;
    let res = 0;
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            console.log('i = ', i, 'j = ', j);
            if (grid[i][j] === '1') {
                console.log('meet 1');
                grid = helper(x, y, i, j, grid,grid);
                console.log('');
                console.log(grid);
                res++;
            }
        }
    }
    return res;
}

function helper(x, y, i, j, grid,arr) {
    console.log('arr =',arr);
    if (i < 0 || i >= y || j < 0 || j >= x || grid[i][j] !== '1') {
        arr = grid.slice();
        return;
    }
    grid[i][j] = '0';
    helper(x, y, i, j + 1, grid,arr);
    helper(x, y, i, j - 1, grid,arr);
    helper(x, y, i + 1, j, grid,arr);
    helper(x, y, i - 1, j, grid,arr);
    return arr;
}
