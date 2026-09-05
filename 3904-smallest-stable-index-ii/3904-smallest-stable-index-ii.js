/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    const n = nums.length;
    let mx = nums[0];
    const mn = [];

    mn[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        mn[i] = Math.min(nums[i], mn[i + 1]);
    }

    for (let i = 0; i < n; i++) {
        mx = Math.max(nums[i], mx);
        if (mx - mn[i] <= k) {
            return i;
        }
    }

    return -1;
};