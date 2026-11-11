class Solution:
    def wordBreak(self, s: str, wordDict: list[str]) -> bool:
        dp = {}

        def fn(remS):
            if remS == "":
                return True

            if remS in dp:
                return dp[remS]

            res = False
            for i in range(len(remS)):
                ss = remS[0 : i + 1]
                if ss in wordDict and fn(remS[i + 1 :]):
                    res = True

            dp[remS] = res
            return res

        return fn(s)
