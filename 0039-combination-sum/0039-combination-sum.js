/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const dfs = function (start, sum, path) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            sum += candidates[i];

            if(sum <= target) {
                dfs(i, sum, path);
            }

            sum -= candidates[i];
            path.pop();
        }
    }

    const result = [];
    dfs(0, 0, []);

    return result;
};