class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        end = len(graph) - 1
        ans = []

        def dfs(start, path):
            if start == end:
                ans.append(path[:])
                return

            for neighbor in graph[start]:
                path.append(neighbor)
                dfs(neighbor, path)
                path.pop()

        dfs(0, [0])

        return ans
