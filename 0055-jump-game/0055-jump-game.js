/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let far = 0;
    const end = nums.length - 1;

    for (let i = 0; i <= end; i++) {
        if (i > far) return false;
        far = Math.max(far, i + nums[i]);
    }

    return far >= end;
};