/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const n = nums.length;
    let lisLength = 1;
    let dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                lisLength = Math.max(lisLength, dp[i]);
            }
        }
    }

    return lisLength;
};