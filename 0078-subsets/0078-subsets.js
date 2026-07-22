/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];

    var dfs = function (path, startIndex) {
        result.push([...path]);
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(path, i + 1);
            path.pop();
        }
    }

    dfs([], 0);

    return result;
};