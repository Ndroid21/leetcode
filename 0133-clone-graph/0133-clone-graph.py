from collections import deque
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, root: Optional['Node']) -> Optional['Node']:
        if root == None:
            return None

        q = deque([root])
        clonedRootNode = Node(root.val)
        visited = {}
        visited[root] = clonedRootNode

        while len(q) > 0:
            curr = q.popleft()
            clonedCurr = visited[curr]

            for n in curr.neighbors:
                if n not in visited:
                    q.append(n)
                    visited[n] = Node(n.val)
                clonedCurr.neighbors.append(visited[n])
        
        return clonedRootNode

