/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const dfs = function (path, open, close) {
        if (path.length === 2 * n) {
            result.push(path.join(""));
            return;
        }

        if (open < n) {
            path.push('(');
            dfs(path, open + 1, close);
            path.pop();
        }

        if (close < open) {
            path.push(')');
            dfs(path, open, close + 1);
            path.pop();
        }
    }

    const result = [];
    dfs([], 0, 0);

    return result;
};