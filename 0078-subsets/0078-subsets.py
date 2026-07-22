class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        self.dfs(nums, [], 0, result)
        return result

    def dfs(self, nums: List[int], path: List[int], startIndex: int, result: List[int]) -> None:
        result.append(path.copy())

        for i in range(startIndex, len(nums)):
            path.append(nums[i])
            self.dfs(nums, path, i+1, result)
            path.pop()