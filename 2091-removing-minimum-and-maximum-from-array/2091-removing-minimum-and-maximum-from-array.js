/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
    const n = nums.length;
    let minIdx = 0;
    let maxIdx = 0;

    for (let i = 1; i < n; i++) {
        if (nums[minIdx] > nums[i]) {
            minIdx = i;
        }

        if (nums[maxIdx] < nums[i]) {
            maxIdx = i;
        }
    }

    const fromLeft = Math.max(minIdx, maxIdx) + 1;
    const fromRight = n - Math.min(minIdx, maxIdx);
    const fromBoth = (Math.min(minIdx, maxIdx) + 1) + (n - Math.max(minIdx, maxIdx));

    return Math.min(fromLeft, fromRight, fromBoth);
};