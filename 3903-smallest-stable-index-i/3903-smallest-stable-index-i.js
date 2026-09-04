/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    const n = nums.length
    let max = nums[0];
    let min = new Array(n).fill(0);

    min[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        min[i] = Math.min(min[i + 1], nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);

        if (max - min[i] <= k) {
            return i;
        }
    }

    return -1;
};