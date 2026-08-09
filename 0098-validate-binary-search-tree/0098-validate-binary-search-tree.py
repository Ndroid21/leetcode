# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def isBST(curr, low, high):
            if curr == None:
                return True

            if (low != None and low >= curr.val) or (high != None and high <= curr.val):
                return False

            return isBST(curr.left, low, curr.val) and isBST(curr.right, curr.val, high)

        return isBST(root, None, None)
