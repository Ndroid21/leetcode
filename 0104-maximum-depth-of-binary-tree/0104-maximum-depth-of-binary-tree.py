# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        maxiDepth = self.traverse(root, 0, 1)
        return maxiDepth
    
    def traverse(self, curr, maxiDepth, depth):
        maxiDepth = max(maxiDepth, depth)

        if curr and curr.left:
            maxiDepth = max(maxiDepth, self.traverse(curr.left, maxiDepth, depth + 1))
        
        if curr and curr.right:
            maxiDepth = max(maxiDepth, self.traverse(curr.right, maxiDepth, depth + 1))

        return maxiDepth

