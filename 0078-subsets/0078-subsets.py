class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def dfs(choices, path):
            if len(choices) == 0:
                result.append(path.copy())
                return
            
            choice = choices[0]
            remChoices = choices[1:]

            dfs(remChoices, path)
            path.append(choice)
            dfs(remChoices, path)
            path.pop()
        
        result = []
        dfs(nums, [])

        return result