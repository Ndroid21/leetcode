/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const n = coins.length;
    const dp = {}

    const dfs = (remAmt) => {
        if (remAmt === 0) return 0;
        if (remAmt < 0) return -1;

        if (remAmt in dp) return dp[remAmt];
        
        let minCoins = Infinity;
        for (let i = 0; i < n; i++) {
            rs = dfs(remAmt - coins[i]);
            if (rs !== -1) {
                minCoins = Math.min(minCoins, rs + 1);
            }
        }

        dp[remAmt] = minCoins === Infinity ? -1 : minCoins;

        return dp[remAmt];
    }

    return dfs(amount)
};