class Solution:
    def isValid(self, s: str) -> bool:
        brackets = {")": "(", "}": "{", "]": "["}

        stack = []
        for c in s:
            if c == "(" or c == "{" or c == "[":
                stack.append(c)
            else:
                if not stack or brackets[c] != stack[-1]:
                    return False
                stack.pop()

        return len(stack) == 0
