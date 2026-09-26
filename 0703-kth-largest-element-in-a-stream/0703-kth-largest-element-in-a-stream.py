class KthLargest:

    def __init__(self, k: int, nums: list[int]):
        self.pq = []
        self.k = k

        for i in range(len(nums)):
            self.add(nums[i])

    def add(self, val: int) -> int:
        heapq.heappush(self.pq, val)

        if len(self.pq) > self.k:
            heapq.heappop(self.pq)

        return self.pq[0]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
