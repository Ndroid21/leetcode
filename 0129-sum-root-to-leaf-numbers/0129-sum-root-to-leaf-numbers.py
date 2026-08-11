# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(node, path):
            if node == None:
                return
            if node.left == None and node.right == None:
                path.append(node.val)
                result.append(path[:])
                path.pop()
                return

            path.append(node.val)
            dfs(node.left, path)
            dfs(node.right, path)
            path.pop()

        result = []
        dfs(root, [])
        sum = 0

        for i in range(len(result)):
            numbers = result[i][::-1]
            number = 0
            for j in range(len(numbers)):
                number += int(numbers[j]) * (10 ** j)
            sum += number
        return sum
