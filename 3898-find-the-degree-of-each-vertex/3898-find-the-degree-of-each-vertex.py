class Solution:
    def findDegrees(self, matrix: list[list[int]]) -> list[int]:
        m = len(matrix)
        n = len(matrix[0])
        adjList = {}
        
        for row in range(m):
            for col in range(n):
                if matrix[row][col] == 1:
                    list = adjList.get(row, [])
                    list.append(col)
                    adjList[row] = list

        result = [0] * m
        for key, val in adjList.items():
            result[key] = len(val)

        return result