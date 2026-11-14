class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        min_sum = inf

        for i in range(len(nums)):
            s = 0
            for j in range(i, len(nums)):
                size = j - i + 1
                s += nums[j]

                if l <= size <= r and s > 0:
                    min_sum = min(min_sum, s)

        return -1 if min_sum == inf else min_sum
