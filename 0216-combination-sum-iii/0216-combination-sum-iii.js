/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const dfs = function (remSum, start, path) {
        if(path.length === k && remSum === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= 9; i++) {
            path.push(i);
            dfs(remSum - i, i + 1, path);
            path.pop();
        }
    }

    const result = [];
    dfs(n, 1, []);

    return result;
};