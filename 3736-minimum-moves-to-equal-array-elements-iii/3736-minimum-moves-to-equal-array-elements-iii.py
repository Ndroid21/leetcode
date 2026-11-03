class Solution:
    def minMoves(self, nums: List[int]) -> int:
        ans = 0
        maxi = max(nums)

        for i in range(len(nums)):
            ans += maxi - nums[i]

        return ans
