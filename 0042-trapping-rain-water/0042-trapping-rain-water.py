class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        leftMax = [0] * n
        rightMax = [0] * n
        leftMax[0] = height[0]
        rightMax[n - 1] = height[n - 1]

        # build leftMax and rightMax
        for i in range(1, n):
            leftMax[i] = max(leftMax[i - 1], height[i])
            rightMax[n - i - 1] = max(rightMax[n - i], height[n - i - 1])

        # calculate water
        totalWater = 0
        for i in range(0, n):
            totalWater += min(leftMax[i], rightMax[i]) - height[i]

        return totalWater
