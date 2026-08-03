/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const dfs = function (path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (const num of nums) {
            if (!path.includes(num)) {
                path.push(num);
                dfs(path);
                path.pop();
            }
        }
    }

    const result = [];
    dfs([]);
    return result;
};