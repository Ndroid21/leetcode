class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        n = len(gifts)
        pq = []

        for i in range(n):
            heapq.heappush(pq, -gifts[i])

        for i in range(k):
            max = -heapq.heappop(pq)

            new_val = math.floor(math.sqrt(max))

            if new_val > 0:
                heapq.heappush(pq, -new_val)

        return -sum(pq)
