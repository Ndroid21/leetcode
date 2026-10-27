class Solution:
    def createGrid(self, m: int, n: int) -> list[str]:
        result = [["#" for _ in range(n)] for _ in range(m)]

        for j in range(n):
            result[0][j] = "."

        for i in range(m):
            result[i][n - 1] = "."

        return ["".join(row) for row in result]
