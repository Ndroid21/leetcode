class Solution:
    def missingMultiple(self, arr: List[int], k: int) -> int:
        nums = set()

        for i in range(len(arr)):
            nums.add(arr[i])

        i = 1
        missing = -1

        while True:
            missing = i * k

            if missing not in nums:
                break

            i += 1

        return missing
