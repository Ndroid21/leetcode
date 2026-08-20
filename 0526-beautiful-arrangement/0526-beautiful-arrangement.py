class Solution:
    def countArrangement(self, n: int) -> int:
        visited = [False for _ in range(n + 1)]
        count = 0

        def dfs(index):
            nonlocal count
            if index == n + 1:
                count += 1
                return

            for perm in range(1, n + 1):
                if visited[perm] == False and isArrangementBeautiful(perm, index):
                    visited[perm] = True
                    dfs(index + 1)
                    visited[perm] = False

        def isArrangementBeautiful(arrangement, i):
            if arrangement % i == 0 or i % arrangement == 0:
                return True

            return False

        dfs(1)

        return count
