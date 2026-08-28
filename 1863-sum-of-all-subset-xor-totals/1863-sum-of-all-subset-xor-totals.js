/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    const dfs = function (start, currentXor) {
        if (start === nums.length) {
            sum += currentXor;
            return;
        }

        dfs(start + 1, currentXor);
        dfs(start + 1, currentXor ^ nums[start]);
    }

    let sum = 0;
    dfs(0, 0);

    return sum;
};