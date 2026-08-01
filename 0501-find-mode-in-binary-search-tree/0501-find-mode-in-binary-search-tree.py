# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        prev = None
        count = 0
        max = 0
        result = []

        def dfs(node):
            nonlocal prev, count, max, result

            if node is None:
                return

            dfs(node.left)

            if prev is not None and prev.val == node.val:
                count += 1
            else:
                count = 1

            if max < count:
                result = [node.val]
                max = count
            elif max == count:
                result.append(node.val)

            prev = node

            dfs(node.right)

        dfs(root)

        return result
