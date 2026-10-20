class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        pq = []

        for i in range(len(points)):
            x, y = points[i]

            heapq.heappush(pq, (-(x**2 + y**2), points[i]))

            if len(pq) > k:
                heapq.heappop(pq)

        result = []

        for i in range(k):
            result.append(pq[i][1])

        return result
