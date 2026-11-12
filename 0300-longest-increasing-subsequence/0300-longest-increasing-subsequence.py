class Solution:
    def lengthOfLIS(self, nums: list[int]) -> int:
        n = len(nums)
        lis_len = 1
        dp = [1 for i in range(n)]

        for i in range(1, n):
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[i], dp[j] + 1)
                    lis_len = max(lis_len, dp[i])

        return lis_len
