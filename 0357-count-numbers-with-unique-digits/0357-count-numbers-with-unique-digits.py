class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
        def dfs(length):
            if length == n:
                return 0

            count = 0

            for digit in range(10):
                if length == 0 and digit == 0:
                    continue

                if used[digit]:
                    continue

                used[digit] = True
                count += 1

                count += dfs(length + 1)
                used[digit] = False

            return count

        used = [False] * 10
        return 1 + dfs(0)
