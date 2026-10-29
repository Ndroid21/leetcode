class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        n = len(coins)
        dp = {}

        def dfs(rem_amount):
            if rem_amount == 0:
                return 0
            if rem_amount < 0:
                return -1

            if rem_amount in dp:
                return dp[rem_amount]

            min_coins = math.inf
            for i in range(n):
                res = dfs(rem_amount - coins[i])
                if res != -1:
                    min_coins = min(min_coins, res + 1)

            dp[rem_amount] = -1 if min_coins == math.inf else min_coins

            return dp[rem_amount]

        return dfs(amount)
