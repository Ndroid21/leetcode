/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const dfs = function (start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < n + 1; i++) {
            path.push(i);
            dfs(i + 1, path);
            path.pop();
        }
    }

    const result = [];
    dfs(1, []);
    return result;
};