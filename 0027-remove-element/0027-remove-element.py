class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        write = 0

        for read in range(0, len(nums)):
            if nums[read] != val:
                nums[write] = nums[read]
                write += 1

        return write
