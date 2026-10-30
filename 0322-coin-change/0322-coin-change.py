class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        n = len(coins)
        dp = [math.inf] * (amount + 1)

        dp[0] = 0

        for rem_amt in range(1, amount + 1):
            for i in range(n):
                curr = rem_amt - coins[i]
                if curr >= 0:
                    dp[rem_amt] = min(dp[rem_amt], 1 + dp[curr])

        return -1 if dp[amount] == math.inf else dp[amount]
