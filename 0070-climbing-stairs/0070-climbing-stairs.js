/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = {}
    const dfs = function (rem) {
        if (dp[rem]) {
            return dp[rem];
        }

        if (rem < 0) {
            return 0;
        }

        if (rem === 0) {
            return 1;
        }

        let leftSum = dfs(rem - 1);
        let rightSum = dfs(rem - 2);

        dp[rem] = leftSum + rightSum;

        return dp[rem];
    }

    return dfs(n);
};