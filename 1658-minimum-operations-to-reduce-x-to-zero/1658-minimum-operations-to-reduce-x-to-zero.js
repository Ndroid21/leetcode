/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    const total = nums.reduce((sum, curr) => sum + curr, 0);
    const target = total - x;

    if (target === 0) {
        return nums.length;
    }

    if (target < 0) {
        return -1;
    }


    let left = 0;
    let sum = 0;
    let windowSize = -1;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > target) {
            sum -= nums[left];
            left++;
        }

        if (sum === target) {
            windowSize = Math.max(windowSize, right - left + 1);
        }
    }

    return windowSize === -1 ? -1 : nums.length - windowSize;
};