# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfSubtree(self, root: TreeNode) -> int:
        def dfs(node):
            if node is None:
                return {"sum": 0, "node_count": 0, "count": 0}

            left = dfs(node.left)
            right = dfs(node.right)

            total_sum = left["sum"] + right["sum"] + node.val
            total_node_count = left["node_count"] + right["node_count"] + 1

            average = total_sum // total_node_count

            if node.val == average:
                count = left["count"] + right["count"] + 1
            else:
                count = left["count"] + right["count"]

            return {"sum": total_sum, "node_count": total_node_count, "count": count}

        return dfs(root)["count"]
