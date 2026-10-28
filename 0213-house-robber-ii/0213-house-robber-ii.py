class Solution:
    def rob(self, nums: list[int]) -> int:
        n = len(nums)

        if n == 1:
            return nums[0]

        def rob_helper(start, end):
            dp = [0] * n

            dp[start] = nums[start]

            if start + 1 <= end:
                dp[start + 1] = max(nums[start], nums[start + 1])

            for i in range(start + 2, end + 1):
                dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

            return dp[end]

        return max(rob_helper(0, n - 2), rob_helper(1, n - 1))
