class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        def isValid(arr):
            digit = arr[0]

            if digit == 0:
                return False

            for i in range(1, len(arr)):
                if abs(arr[i] - digit) != k:
                    return False
                digit = arr[i]

            return True

        def dfs(path):
            if len(path) == n:
                result.append(int("".join(map(str, path))))
                return

            for i in range(0, 10):
                path.append(i)
                if isValid(path):
                    dfs(path)
                path.pop()

        result = []
        dfs([])

        return result
