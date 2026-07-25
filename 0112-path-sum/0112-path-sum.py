# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        ans = self.traverse(root, False, 0, targetSum)
        return ans

    def traverse(self, curr, ans, sum, targetSum):
        newSum = curr.val + sum

        if curr.left == None and curr.right == None:
            if newSum == targetSum:
                ans = True
                return ans
        
        leftAns = False
        rightAns = False
        if curr.left != None:
           leftAns = self.traverse(curr.left, ans, newSum, targetSum)
        
        if curr.right != None:
            rightAns = self.traverse(curr.right, ans, newSum, targetSum)
        
        return leftAns or rightAns