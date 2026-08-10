# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, high):
            if node is None:
                return 0

            count = 0
            if node.val >= high:
                count += 1
                high = node.val

            return dfs(node.left, high) + dfs(node.right, high) + count

        result = dfs(root, root.val)

        return result
