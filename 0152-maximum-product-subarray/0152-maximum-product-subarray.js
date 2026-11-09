/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let totalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        num1 = maxSoFar * nums[i];
        num2 = minSoFar * nums[i];
        maxSoFar = Math.max(nums[i], num1, num2);
        minSoFar = Math.min(nums[i], num1, num2);

        totalMax = Math.max(totalMax, maxSoFar);
    }

    return totalMax;
};