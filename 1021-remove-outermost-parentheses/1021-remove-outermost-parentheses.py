class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        stack = []
        result = []

        for c in s:
            if c == '(':
                stack.append(c)
                if len(stack) > 1:
                    result.append(c)
            else:
                if len(stack) > 1:
                    result.append(c)
                stack.pop()

        return "".join(result)
        