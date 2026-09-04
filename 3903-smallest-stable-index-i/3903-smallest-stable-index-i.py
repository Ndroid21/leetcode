class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)
        mx = nums[0]
        mn = [0] * n
        ans = -1

        mn[n - 1] = nums[n - 1]
        for i in range(n - 2, -1, -1):
            mn[i] = min(mn[i + 1], nums[i])

        for i in range(len(nums)):
            mx = max(mx, nums[i])

            if mx - mn[i] <= k:
                return i

        return -1
