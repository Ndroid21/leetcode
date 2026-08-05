/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    
    const dfs = function (index, path) {
        if (index === nums.length) {
            result.push([...path]);
            return;
        }

        path.push(nums[index]);
        dfs(index + 1, path);
        path.pop();

        while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
            index++;
        }

        dfs(index + 1, path);
    }

    const result = [];
    dfs(0, []);

    return result;
};