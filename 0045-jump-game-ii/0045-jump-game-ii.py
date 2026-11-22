class Solution:
    def jump(self, nums: list[int]) -> int:
        far = 0
        jump = 0
        curr_end = 0

        for i in range(len(nums) - 1):
            far = max(far, nums[i] + i)
            if i == curr_end:
                curr_end = far
                jump += 1

        return jump
