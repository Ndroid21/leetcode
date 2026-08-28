class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        def dfs(start, currentXor):
            if start == len(nums):
                nonlocal sum
                sum += currentXor
                return

            dfs(start+1, currentXor)
            dfs(start+1, currentXor ^ nums[start])

        sum = 0
        dfs(0, 0)

        return sum