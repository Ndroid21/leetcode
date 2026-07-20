class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        count = 0

        while i >= 0:
            if s[i] == " ":
                if count == 0:
                    i -= 1
                    continue
                else:
                    break
            else:
                i -= 1
                count += 1
        return count
