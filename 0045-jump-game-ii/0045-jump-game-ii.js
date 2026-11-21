/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let far = currEnd = jumps = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        far = Math.max(far, i + nums[i]);
        if (i === currEnd) {
            currEnd = far;
            jumps++;
        }
    }

    return jumps;
};