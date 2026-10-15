/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const seen = new Set();
        for (let j = i; j < nums.length; j++) {
            seen.add(nums[j]);
            sum += seen.size ** 2;
        }
    }

    return sum;
};