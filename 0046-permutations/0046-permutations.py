class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def dfs(path):
            if len(path) == len(nums):
                result.append(path.copy())
                return
            
            for i in range(len(nums)):
                if nums[i] not in path:
                    path.append(nums[i])
                    dfs(path)
                    path.pop()

        result = []
        dfs([])
        return result

