class Solution:
    def countArrangement(self, n: int) -> int:
        result = []

        def dfs(path):
            if len(path) == n:
                result.append(path[:])
                return

            for perm in range(1, n + 1):
                if perm not in path and isArrangementBeautiful(perm, len(path) + 1):
                    path.append(perm)
                    dfs(path)
                    path.pop()

        def isArrangementBeautiful(arrangement, i):
            if arrangement % i == 0 or i % arrangement == 0:
                return True

            return False

        dfs([])

        return len(result)
