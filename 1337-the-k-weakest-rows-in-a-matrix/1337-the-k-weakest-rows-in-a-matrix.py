class Solution:
    def kWeakestRows(self, mat: list[list[int]], k: int) -> list[int]:
        pq = []
        m = len(mat)
        n = len(mat[0])

        for i in range(m):
            soldiers = 0

            for j in range(n):
                soldiers += mat[i][j]
            heapq.heappush(pq, (soldiers, i))

        result = []
        for i in range(k):
            min = heapq.heappop(pq)
            result.append(min[1])

        return result
