# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    maxDiameter = 0

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.findDepth(root)
        
        return self.maxDiameter

    def findDepth(self, curr):
        if curr == None:
            return 0

        leftDepth = self.findDepth(curr.left)
        rightDepth = self.findDepth(curr.right)

        currDiameter = leftDepth + rightDepth
        self.maxDiameter = max(self.maxDiameter, currDiameter)

        return 1 + max(leftDepth, rightDepth)