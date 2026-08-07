class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        def dfs(choices, path):
            if len(path) == len(nums):
                result.append(path[:])
                return

            for i in range(len(choices)):
                if i > 0 and choices[i - 1] == choices[i]:
                    continue

                newChoices = choices[0:i] + choices[i + 1 :]
                path.append(choices[i])
                dfs(newChoices, path)
                path.pop()

        nums.sort()
        result = []
        dfs(nums, [])

        return result
