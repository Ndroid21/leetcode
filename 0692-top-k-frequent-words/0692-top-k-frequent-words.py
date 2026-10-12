class Solution:
    def topKFrequent(self, words: list[str], k: int) -> list[str]:
        pq = []
        freq = {}
        result = []

        for word in words:
            freq[word] = freq.get(word, 0) + 1

        for word, count in freq.items():
            heapq.heappush(pq, (-count, word))

        for _ in range(k):
            count, word = heapq.heappop(pq)
            result.append(word)

        return result