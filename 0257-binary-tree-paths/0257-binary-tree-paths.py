# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        result = []

        def dfs(node, path):
            if node.left == None and node.right == None:
                path.append(node.val)
                result.append("->".join(map(str, path)))
                path.pop()
                return
            
            path.append(node.val)
            if node.left != None:
                dfs(node.left, path)
            
            if node.right != None:
                dfs(node.right, path)

            path.pop()
        
        dfs(root, [])

        return result