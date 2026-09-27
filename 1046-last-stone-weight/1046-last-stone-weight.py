class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        pq = []

        for stone in stones:
            heapq.heappush(pq, -stone)

        while len(pq) > 1:
            x = -heapq.heappop(pq)
            y = -heapq.heappop(pq)

            if x != y:
                heapq.heappush(pq, -(x - y))

        return -pq[0] if pq else 0
