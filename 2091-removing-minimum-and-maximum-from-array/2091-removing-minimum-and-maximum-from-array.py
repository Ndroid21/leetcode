class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        minIdx = 0
        maxIdx = 0

        for i in range(1, n):
            if nums[minIdx] > nums[i]:
                minIdx = i
            if nums[maxIdx] < nums[i]:
                maxIdx = i

        fromLeft = max(minIdx, maxIdx) + 1
        fromRight = n - min(minIdx, maxIdx)
        fromBoth = (min(minIdx, maxIdx) + 1) + (n - max(minIdx, maxIdx))

        return min(fromLeft, fromRight, fromBoth)
