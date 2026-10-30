/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const n = coins.length;
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (remAmt = 1; remAmt <= amount; remAmt++) {
        for (let i = 0; i < n; i++) {
            let curr = remAmt - coins[i];
            if (curr >= 0) {
                dp[remAmt] = Math.min(dp[remAmt], 1 + dp[curr]);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};