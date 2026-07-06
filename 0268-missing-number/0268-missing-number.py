class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        totalSum = (n * (n + 1)) // 2
        currSum = 0

        for i in range(n):
            currSum += nums[i]

        return totalSum - currSum
