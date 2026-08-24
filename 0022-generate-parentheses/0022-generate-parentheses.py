class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def dfs(path, open, close):
            if len(path) == 2 * n:
                result.append("".join(path))
                return

            if open < n:
                path.append("(")
                dfs(path, open + 1, close)
                path.pop()

            if close < open:
                path.append(")")
                dfs(path, open, close + 1)
                path.pop()

        result = []
        dfs([], 0, 0)

        return result
