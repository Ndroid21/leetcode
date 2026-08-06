class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def dfs(remSum, start, path):
            if remSum == 0:
                result.append(path[:])

            if remSum <= 0:
                return

            for i in range(start, len(candidates)):
                if i > start and candidates[i - 1] == candidates[i]:
                    continue
                path.append(candidates[i])
                dfs(remSum - candidates[i], i + 1, path)
                path.pop()

        candidates.sort()
        result = []
        dfs(target, 0, [])

        return result
