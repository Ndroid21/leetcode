/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let ans = 0;
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        ans += (max - nums[i]);
    }

    return ans;
};