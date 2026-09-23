class Solution:
    def minOperations(self, nums: list[int], x: int) -> int:
        total = sum(nums)
        target = total - x

        if target == 0:
            return len(nums)

        if target < 0:
            return -1

        left = 0
        window_sum = 0
        window_size = -1

        for right in range(len(nums)):
            window_sum += nums[right]

            while window_sum > target:
                window_sum -= nums[left]
                left += 1

            if window_sum == target:
                window_size = max(window_size, right - left + 1)

        return -1 if window_size == -1 else len(nums) - window_size
