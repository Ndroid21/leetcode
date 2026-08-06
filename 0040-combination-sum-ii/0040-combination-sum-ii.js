/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const dfs = function (remSum, start, path) {
        if (remSum === 0) {
            result.push([...path]);
            return;
        }

        if (remSum < 0) return;

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i - 1] === candidates[i]) continue;
            path.push(candidates[i]);
            dfs(remSum - candidates[i], i + 1, path);
            path.pop();
        }

    }

    const result = [];
    dfs(target, 0, []);

    return result;
};