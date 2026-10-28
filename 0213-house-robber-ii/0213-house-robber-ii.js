/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;
    if (n === 1) return nums[0];

    const robHelper = (start, end) => {
        const dp = [];
        
        dp[start] = nums[start];
        if (start <= end) {
            dp[start + 1] = Math.max(nums[start], nums[start + 1]);
        }

        for (let i = start + 2; i <= end; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        return dp[end];
    }

    return Math.max(robHelper(0, n - 2), robHelper(1, n - 1));
};