/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    const MAX_SUM = 10 ** 6;
    let minSum = MAX_SUM;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            let size = j - i + 1;
            sum += nums[j];
            if (l <= size && size <= r && sum > 0) {
                minSum = Math.min(minSum, sum);
            }
        }
    }

    return minSum === MAX_SUM ? -1 : minSum;
};