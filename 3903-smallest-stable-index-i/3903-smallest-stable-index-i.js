/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    let max = nums[0];
    let min = max;
    let ans = -1;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        min = nums[i];
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
        }

        if (max - min <= k) {
            ans = i;
            break;
        }
    }

    return ans;
};