class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) == 1:
            return nums

        mid = len(nums) // 2

        left = self.sortArray(nums[0:mid])
        right = self.sortArray(nums[mid:])

        return self.merge(left, right)

    def merge(self, arr1, arr2):
        m = len(arr1) + len(arr2)
        result = [None] * m
        i = 0
        j = 0
        k = 0

        while i < len(arr1) and j < len(arr2):
            if arr1[i] < arr2[j]:
                result[k] = arr1[i]
                i += 1
            else:
                result[k] = arr2[j]
                j += 1
            k += 1

        while i < len(arr1):
            result[k] = arr1[i]
            i += 1
            k += 1

        while j < len(arr2):
            result[k] = arr2[j]
            j += 1
            k += 1

        return result
