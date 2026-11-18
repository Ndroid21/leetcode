/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(-1));

    const dfs = (x, y) => {
        if (x === 0 && y === 0) return 1;
        if (x < 0 || y < 0) return 0;

        if (dp[x][y] !== -1) return dp[x][y];

        dp[x][y] = dfs(x - 1, y) + dfs(x, y - 1);
        return dp[x][y];
    }

    return dfs(m - 1, n - 1);
};