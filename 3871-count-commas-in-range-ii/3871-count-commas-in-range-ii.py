class Solution:
    def countCommas(self, n: int) -> int:
        count, x = 0, 1000
        while x <= n:
            count += n - x + 1
            x *= 1000

        return count
