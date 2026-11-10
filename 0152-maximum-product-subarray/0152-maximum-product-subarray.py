class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        n = len(nums)
        ltr_prod = 1
        rtl_prod = 1
        mx = float("-inf")

        for i in range(n):
            ltr_prod = ltr_prod * nums[i]
            rtl_prod = rtl_prod * nums[n - i - 1]
            mx = max(mx, ltr_prod, rtl_prod)

            if ltr_prod == 0:
                ltr_prod = 1
            if rtl_prod == 0:
                rtl_prod = 1

        return mx
