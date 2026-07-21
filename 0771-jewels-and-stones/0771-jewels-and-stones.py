class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0
        allJewels = set()

        for i in range(len(jewels)):
            allJewels.add(jewels[i])

        for i in range(len(stones)):
            if stones[i] in allJewels:
                count += 1

        return count