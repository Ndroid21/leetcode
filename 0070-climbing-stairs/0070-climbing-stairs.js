/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = {};

    const dfs = function (rem) {
        if (dp[rem]) return dp[rem];
        if (rem <= 0) return 0;
        if (rem === 1 || rem === 2) return rem;

        let left = dfs(rem - 1);
        let right = dfs(rem - 2);

        dp[rem] = left + right;

        return dp[rem];
    }

    return dfs(n);
};