class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:
        ans = ""
        ones = 0
        left = 0

        for right in range(len(s)):
            if s[right] == "1":
                ones += 1

            while ones == k:
                while s[left] == "0":
                    left += 1

                window = s[left : right + 1]

                if (
                    ans == ""
                    or len(window) < len(ans)
                    or (len(window) == len(ans) and window < ans)
                ):
                    ans = window

                left += 1
                ones -= 1

        return ans
