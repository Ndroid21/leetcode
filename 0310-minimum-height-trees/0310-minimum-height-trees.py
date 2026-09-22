class Solution:
    def findMinHeightTrees(self, n: int, edges: list[list[int]]) -> list[int]:
        if n == 1:
            return [0]

        graph = {}
        degree = [0] * n
        for i in range(n):
            graph[i] = []

        for frm, to in edges:
            graph.get(frm).append(to)
            degree[frm] += 1
            graph.get(to).append(frm)
            degree[to] += 1

        leaves = []
        for i in range(n):
            if degree[i] == 1:
                leaves.append(i)

        remainingNodes = n

        while remainingNodes > 2:
            remainingNodes -= len(leaves)
            newLeaves = []

            for leaf in leaves:
                for neighbor in graph.get(leaf):
                    degree[neighbor] -= 1

                    if degree[neighbor] == 1:
                        newLeaves.append(neighbor)

            leaves = newLeaves

        return leaves
