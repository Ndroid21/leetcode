class Solution:
    def findRelativeRanks(self, score: list[int]) -> list[str]:
        pq = []
        map = {}

        medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]

        for s in score:
            heapq.heappush(pq, -s)

        for i in range(len(score)):
            s = -heapq.heappop(pq)

            map[s] = medals[i] if i < 3 else str(i + 1)

        return [map[s] for s in score]
