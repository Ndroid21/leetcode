# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        modeCount = 0
        map = {}
        def dfs (node):
            nonlocal modeCount
            if node is None:
                return
            
            if node.val not in map:
                map[node.val] = 1
            else:
                map[node.val] = map[node.val] + 1

            if modeCount < map[node.val]:
                modeCount = map[node.val]

            dfs(node.left)
            dfs(node.right)
        

        dfs(root)

        result = []
        for key, val in map.items():
            if val == modeCount:
                result.append(key)
        
        return result
