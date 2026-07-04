class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minTillNow = prices[0]
        maxProfit = 0

        for i in range(1, len(prices)):
            maxProfit = max(maxProfit, prices[i] - minTillNow)
            minTillNow = min(minTillNow, prices[i])
        
        return maxProfit
