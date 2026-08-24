/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const isValid = function (series) {
        let open = 0, close = 0;
        for (let i = 0; i < 2 * n; i++) {
            if (series[i]) {
                if (series[i] === '(') {
                    open++;
                } else {
                    close++;
                }
            }
        }

        if (open > n || close > n || close > open) {
            return false;
        }

        return true;
    }

    const dfs = function (path) {
        if (path.length === 2 * n) {
            result.push(path.join(""));
            return;
        }

        path.push('(');
        if (isValid(path)) {
            dfs(path);
        }
        path.pop();

        path.push(')');
        if (isValid(path)) {
            dfs(path);
        }
        path.pop();
    }

    const result = [];
    dfs(['(']);

    return result;
};