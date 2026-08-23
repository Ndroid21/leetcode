class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        result = []

        def dfs(path):
            if len(path) == n:
                number = int("".join(map(str, path)))
                result.append(number)
                return

            prev = path[-1]

            next_digit = prev + k

            if next_digit <= 9:
                path.append(next_digit)
                dfs(path)
                path.pop()

            next_digit = prev - k

            if next_digit >= 0 and next_digit != prev:
                path.append(next_digit)
                dfs(path)
                path.pop()

        for digit in range(1, 10):
            dfs([digit])

        return result
