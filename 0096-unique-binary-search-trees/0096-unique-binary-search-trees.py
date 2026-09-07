class Solution:
    def numTrees(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1

        catalan = 1
        for i in range(1, n + 1):
            catalan = (catalan * (4 * i - 2)) // (i + 1)
        
        return catalan
