class Solution:
    def numDecodings(self, s: str) -> int:
        dp = {}
        def dfs(rems):
            if rems == "":
                return 1

            if rems in dp:
                return dp[rems]

            n = len(rems)
            one_digit = rems[-1]
            two_digit = rems[-2:]

            ans = 0
            if int(one_digit) > 0:
                ans += dfs(rems[0 : n - 1])

            if int(two_digit) >= 10 and int(two_digit) <= 26:
                ans += dfs(rems[0 : n - 2])

            dp[rems] = ans

            return ans

        return dfs(s)
