class Solution:
    def partition(self, s: str) -> List[List[str]]:
        def dfs(start, path):
            if start == len(s):
                result.append(path[:])
                return

            for end in range(start + 1, len(s) + 1):
                currSubstr = s[start:end]
                if self.isPalidrome(currSubstr):
                    path.append(currSubstr)
                    dfs(end, path)
                    path.pop()

        result = []
        dfs(0, [])

        return result

    def isPalidrome(self, s):
        i = 0
        j = len(s) - 1

        while i < j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1

        return True
