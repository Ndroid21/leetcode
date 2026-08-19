class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        def isValid(s):
            if len(s) > 1 and s[0] == "0":
                return False
            if int(s) < 0 or 255 < int(s):
                return False
            return True

        def dfs(start, path):
            if start == len(s) and len(path) == 4:
                result.append(".".join(path))
                return

            end = start
            while end < start + 3 and start < len(s):
                segment = s[start : end + 1]
                if isValid(segment):
                    path.append(segment)
                    dfs(end + 1, path)
                    path.pop()
                end += 1

        result = []
        dfs(0, [])

        return result
