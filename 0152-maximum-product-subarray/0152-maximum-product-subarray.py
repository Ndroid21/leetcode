class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        max_so_far = nums[0]
        min_so_far = nums[0]
        total_max = nums[0]

        for i in range(1, len(nums)):
            num1 = max_so_far * nums[i]
            num2 = min_so_far * nums[i]
            max_so_far = max(nums[i], num1, num2)
            min_so_far = min(nums[i], num1, num2)

            total_max = max(total_max, max_so_far)

        return total_max
