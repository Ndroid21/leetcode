# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        def dfs(node, remSum, path):
            if node is None:
                return
            
            path.append(node.val)
            remSum = remSum - node.val

            if node.left is None and node.right is None and remSum == 0:
                result.append(path[:])
                path.pop()
                return
            
            dfs(node.left, remSum, path)
            dfs(node.right, remSum, path)

            path.pop()
        
        result = []
        dfs(root, targetSum, [])

        return result