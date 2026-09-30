class Solution:
    def kthSmallest(self, matrix: list[list[int]], k: int) -> int:
        pq = []

        for row in range(len(matrix)):
            heapq.heappush(pq, (matrix[row][0], row, 0))

        for _ in range(k - 1):
            val, row, col = heapq.heappop(pq)

            if col + 1 < len(matrix[row]):
                heapq.heappush(pq, (matrix[row][col + 1], row, col + 1))

        return heapq.heappop(pq)[0]
