class Solution:
    def reverseDegree(self, s: str) -> int:
        freq = {}
        for i in range(1, 27):
            freq[chr(96 + i)] = 26 - i + 1

        total = 0
        for i in range(len(s)):
            total += (freq.get(s[i]) * (i + 1))

        return total
