/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    if (sum % 2) return false;

    sum = sum / 2;

    const dp = Array.from({ length: sum + 1 }, () => Array(nums.length).fill(undefined));

    const fn = (remS, start) => {
        if (remS === 0) return true;
        if (remS < 0) return false;

        if (dp[remS][start] !== undefined) return dp[remS][start];

        for (let i = start; i < nums.length; i++) {
            if (fn(remS - nums[i], i + 1)) {
                return dp[remS][start] = true;
            }
        }

        return dp[remS][start] = false;
    }

    return fn(sum, 0);
};