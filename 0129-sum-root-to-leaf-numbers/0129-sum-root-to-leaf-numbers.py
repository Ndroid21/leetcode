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
                return 0

            path = path * 10 + node.val
            
            if node.left == None and node.right == None:
                return path
            
            return dfs(node.left, path) + dfs(node.right, path)

        return dfs(root, 0)
