class Solution:
    def solveNQueens(self, n: int) -> list[list[str]]:
        result = []
        columns = [0] * n
        diag = [0] * (n << 1)
        antidiag = [0] * (n << 1)

        board = [["." for _ in range(n)] for _ in range(n)]

        def dfs(row):

            if row == n:
                result.append(["".join(row) for row in board])

            for col in range(n):
                if columns[col] + diag[row + col] + antidiag[n - row + col] == 0:
                    board[row][col] = "Q"
                    columns[col] = 1
                    diag[row + col] = 1
                    antidiag[n - row + col] = 1

                    dfs(row + 1)

                    board[row][col] = "."
                    columns[col] = 0
                    diag[row + col] = 0
                    antidiag[n - row + col] = 0

        dfs(0)

        return result
