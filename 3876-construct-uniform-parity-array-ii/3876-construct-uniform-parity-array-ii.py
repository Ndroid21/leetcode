INFINITY = math.inf


class Solution:
    def uniformArray(self, nums: list[int]) -> bool:
        mn = INFINITY

        for num in nums:
            if num % 2 != 0:
                mn = min(mn, num)

        for num in nums:
            if num % 2 == 0 and mn != INFINITY and mn > num:
                return False

        return True
