class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        mx = nums[0]
        mn = mx
        ans = -1

        for i in range(len(nums)):
            mx = max(mx, nums[i])
            mn = nums[i]
            for j in range(i, len(nums)):
                mn = min(mn, nums[j])

            if mx - mn <= k:
                ans = i
                break

        return ans
