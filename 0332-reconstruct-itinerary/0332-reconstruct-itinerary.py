class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = {}
        path = []

        for start, end in tickets:
            if start not in graph:
                graph[start] = []
            graph[start].append(end)

        for node in graph:
            graph[node].sort()

        def dfs(curr):
            neighbors = graph.get(curr, [])
            while neighbors:
                node = neighbors.pop(0)
                dfs(node)
            path.append(curr)

        dfs("JFK")

        return path[::-1]