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
        
        def get_neighbor(node):
            return adj_list[node]

        def bfs(root, target):
            q = deque()
            q.append(root)
            visited = set()
            visited.add(root)

            while len(q) > 0:
                n = len(q)

                for _ in range(n):
                    curr = q.popleft()

                    if curr == target:
                        return True

                    for neighbor in get_neighbor(curr):
                        if neighbor in visited:
                            continue
                        
                        q.append(neighbor)
                        visited.add(neighbor)
            
            return False

        adj_list = {}
        generate_adjency_list(adj_list)

        return bfs(source, destination)
