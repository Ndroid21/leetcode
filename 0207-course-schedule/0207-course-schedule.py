from collections import deque

class Solution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        adj_list = {}
        in_degree = {}

        for i in range(numCourses):
            adj_list[i] = []
            in_degree[i] = 0

        for to, frm in prerequisites:
            lst = adj_list.get(frm, [])
            lst.append(to)
            in_degree[to] = in_degree.get(to, 0) + 1

        q = deque()
        for key, val in in_degree.items():
            if val == 0:
                q.append(key)

        count =0
        while q:
            node = q.popleft()
            count+=1

            for neighbor in adj_list.get(node, []):
                in_degree[neighbor] = in_degree.get(neighbor) - 1
                if in_degree[neighbor] == 0:
                    q.append(neighbor)

        return count == numCourses