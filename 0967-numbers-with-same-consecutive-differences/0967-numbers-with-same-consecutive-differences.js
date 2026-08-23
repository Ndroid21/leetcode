/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
    const isValidNumber = function (arr) {
        let digit = arr[0];

        if (digit === 0) return false;

        for (let i = 1; i < arr.length; i++) {
            if (Math.abs(arr[i] - digit) !== k) return false;

            digit = arr[i];
        }

        return true;
    }

    const dfs = function (path) {
        if (path.length === n) {
            result.push(Number(path.join("")));
            return;
        }

        for (let i = 0; i <= 9; i++) {
            path.push(i);
            if (isValidNumber(path)) {
                dfs(path);
            }
            path.pop();
        }
    }

    const result = [];
    dfs([]);

    return result;

};