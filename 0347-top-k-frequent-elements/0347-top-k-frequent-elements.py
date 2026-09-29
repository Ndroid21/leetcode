class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        occur = {}
        for num in nums:
            occur[num] = occur.get(num, 0) + 1

        heap = []

        for key, val in occur.items():
            heapq.heappush(heap, (val, key))
            if len(heap) > k:
                heapq.heappop(heap)

        return [i[1] for i in heap]
