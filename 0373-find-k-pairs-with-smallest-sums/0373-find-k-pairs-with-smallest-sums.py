class Solution:
    def kSmallestPairs(self, n1: list[int], n2: list[int], k: int) -> list[list[int]]:
        pq = []
        result = []

        m = len(n1)
        n = len(n2)

        for i in range(m):
            heapq.heappush(pq, (n1[i] + n2[0], i, 0))

        for _ in range(k):
            _, x, y = heapq.heappop(pq)
            result.append([n1[x], n2[y]])

            if (y + 1) < n:
                heapq.heappush(pq, (n1[x] + n2[y + 1], x, y + 1))

        return result
