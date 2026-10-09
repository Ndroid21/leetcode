class Solution:
    def minInsertions(self, s: str) -> int:
        n = len(s)
        open_count = 0
        result = 0
        i = 0
        while i < n:
            if s[i] == "(":
                open_count += 1
            else:
                if i < n - 1 and s[i + 1] == ")":
                    i += 1
                else:
                    result += 1

                if open_count == 0:
                    result += 1
                else:
                    open_count -= 1

            i += 1

        result += 2 * open_count

        return result
