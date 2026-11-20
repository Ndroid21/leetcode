class Solution:
    def canJump(self, nums: list[int]) -> bool:
        far = 0
        end = len(nums) - 1

        for i in range(len(nums)):
            if i > far:
                return False

            far = max(far, i + nums[i])

        return far >= end
