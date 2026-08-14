from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        result = []
        q = deque([root])

        while len(q) > 0:
            result.append(q[0].val)

            for _ in range(len(q)):
                node = q.popleft()

                if node.right is not None:
                    q.append(node.right)

                if node.left is not None:
                    q.append(node.left)

        return result
