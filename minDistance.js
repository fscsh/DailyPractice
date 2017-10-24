function minDistance(word1, word2) {
    if (word1.length === 0) {
        return word2.length;
    }
    if (word2.length === 0) {
        return word1.length;
    }
    let dp = [];
    for (let i = 0; i < word1.length+1; i++) {
        dp.push([i]);
    }
    for (let j = 1; j < word2.length+1; j++) {
        dp[0].push(j);
    }
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2);
            }
        }
    }

    console.log(dp);
    return dp[word1.length][word2.length];
}
