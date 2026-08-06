class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        def dfs(remSum, start, path):
            if len(path) == k and remSum == 0:
                result.append(path[:])
                return

            if remSum < 0:
                return

            for i in range(start, 10):
                path.append(i)
                dfs(remSum - i, i + 1, path)
                path.pop()

        result = []
        dfs(n, 1, [])

        return result
