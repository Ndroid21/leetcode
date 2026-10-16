class Solution:
    def frequencySort(self, s: str) -> str:
        pq = []
        map = {}

        for c in s:
            map[c] = map.get(c, 0) + 1

        for key, val in map.items():
            heapq.heappush(pq, (-val, key))

        st = ''
        hs = len(pq)
        for i in range(hs):
            val, key = heapq.heappop(pq)

            st += key * -val

        return st