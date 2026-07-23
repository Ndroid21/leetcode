# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        balanced, depth = self.dfs(root)

        return balanced

    def dfs(self, node):
        if node == None:
            return [True, 0]

        leftBalanced, leftDepth = self.dfs(node.left)
        rightBalanced, rightDepth = self.dfs(node.right)

        currentNodeBalanced = (
            leftBalanced and rightBalanced and abs(leftDepth - rightDepth) <= 1
        )

        return [currentNodeBalanced, max(leftDepth, rightDepth) + 1]
