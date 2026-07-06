class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        number=0

        for i in range(len(nums)):
            number ^= nums[i]

        return number
