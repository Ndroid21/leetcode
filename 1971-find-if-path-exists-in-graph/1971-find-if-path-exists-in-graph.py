from collections import deque

class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        def generate_adjency_list(adj_list):
            for x, y in edges:
                if x not in adj_list:
                    adj_list[x] = []
                
                if y not in adj_list:
                    adj_list[y] = []

                adj_list[x].append(y)
                adj_list[y].append(x)
        
        def dfs(curr):
            if curr == destination:
                return True

            visited.add(curr)

            for neighbor in adj_list[curr]:
                if neighbor in visited:
                    continue
                
                if(dfs(neighbor)):
                    return True
            
            return False

        adj_list = {}
        generate_adjency_list(adj_list)
        visited = set()

        return dfs(source)
