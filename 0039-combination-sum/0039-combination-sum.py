class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def dfs(start, sum, path):
            if sum == target:
                result.append(path[:])
                return

            for i in range(start, len(candidates)):
                path.append(candidates[i])
                sum += candidates[i]

                if sum <= target:
                    dfs(i, sum, path)

                sum -= candidates[i]
                path.pop()

        result = []
        dfs(0, 0, [])

        return result
