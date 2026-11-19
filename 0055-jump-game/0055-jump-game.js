/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const end = nums.length - 1;

    const dp = {};

    const dfs = (start) => {
        if (start === end) return true;

        if (dp[start] !== undefined) return dp[start];

        for (let i = 1; i <= nums[start]; i++) {
            if (dfs(start + i)) {
                dp[start] = true;
                return true;
            }
        }

        dp[start] = false;
        return false;
    }

    return dfs(0);
};