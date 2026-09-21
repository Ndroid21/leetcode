from collections import deque


class Solution:
    def findOrder(self, numCourses: int, prerequisites: list[list[int]]) -> list[int]:
        adj_list = {}
        in_degree = {}
        q = deque()
        result = []

        for i in range(numCourses):
            in_degree[i] = 0
            adj_list[i] = []

        for to, frm in prerequisites:
            lst = adj_list.get(frm)
            lst.append(to)
            adj_list[frm] = lst
            in_degree[to] = in_degree.get(to) + 1

        for course, degree in in_degree.items():
            if degree == 0:
                q.append(course)

        while q:
            node = q.popleft()
            result.append(node)

            for neighbor in adj_list.get(node):
                in_degree[neighbor] = in_degree.get(neighbor) - 1

                if in_degree.get(neighbor) == 0:
                    q.append(neighbor)

        return result if len(result) == numCourses else []
