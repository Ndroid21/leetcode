class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(row, col, index):
            nonlocal result
            if index == len(word):
                result = True
                return

            original = board[row][col]
            board[row][col] = "#"

            if row > 0 and board[row - 1][col] == word[index]:
                dfs(row - 1, col, index + 1)

            if row < m - 1 and board[row + 1][col] == word[index]:
                dfs(row + 1, col, index + 1)

            if col > 0 and board[row][col - 1] == word[index]:
                dfs(row, col - 1, index + 1)

            if col < n - 1 and board[row][col + 1] == word[index]:
                dfs(row, col + 1, index + 1)

            board[row][col] = original

        result = False
        m = len(board)
        n = len(board[0])

        for i in range(m):
            for j in range(n):
                if board[i][j] == word[0]:
                    dfs(i, j, 1)

        return result
