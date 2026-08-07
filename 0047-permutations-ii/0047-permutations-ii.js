/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const dfs = function (choices, path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < choices.length; i++) {
            if (i > 0 && choices[i - 1] === choices[i]) continue;
            const newChoices = [...choices.slice(0, i), ...choices.slice(i + 1)];
            path.push(choices[i]);
            dfs(newChoices, path);
            path.pop();
        }
    }

    nums.sort((a, b) => a - b);
    const result = [];
    dfs(nums, []);

    return result;
};