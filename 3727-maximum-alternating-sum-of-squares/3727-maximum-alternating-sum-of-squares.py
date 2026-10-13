class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        squares = [num**2 for num in nums]
        squares.sort(reverse=True)

        k = (len(nums) + 1) // 2

        sum = 0

        for i, square in enumerate(squares):
            if i < k:
                sum += square
            else:
                sum -= square

        return sum
