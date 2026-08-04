/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const dfs = function (choices, path) {
        if (choices.length === 0) {
            result.push([...path]);
            return;
        }

        const choice = choices[0];
        const remainingChoices = choices.slice(1);

        dfs(remainingChoices, path);
        path.push(choice);
        dfs(remainingChoices, path);
        path.pop();
    }

    const result = [];
    dfs(nums, []);

    return result;
};