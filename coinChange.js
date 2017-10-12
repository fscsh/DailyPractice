function coinChange(coins, amount) {
    let res = [];
    res[0] = 0;
    // console.log(res);
    for (let i = 1; i <= amount; i++) {
        console.log('enter i', i);
        res[i] = 1000;
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                console.log('@@', coins[j], i);
                console.log(res[i], res[i - coins[j]] + 1);
                res[i] = Math.min(res[i], res[i - coins[j]] + 1);

                console.log('res = ', res[i]);
            }

        }
    }
    if (res[amount] === 1000) {
        res[amount] = -1;
    }
    return res[amount];
}
