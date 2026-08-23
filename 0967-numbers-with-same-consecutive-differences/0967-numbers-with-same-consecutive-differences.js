/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
    const dfs = function (path) {
        if (path.length === n) {
            result.push(Number(path.join("")));
            return;
        }

        const prev = path[path.length - 1];

        let nextDigit = prev + k;

        if (nextDigit <= 9) {
            path.push(nextDigit);
            dfs(path);
            path.pop();
        }

        nextDigit = prev - k;

        if (nextDigit >= 0 && nextDigit != prev) {
            path.push(nextDigit);
            dfs(path);
            path.pop();
        }
    }

    const result = [];
    for (let digit = 1; digit < 10; digit++) {
        dfs([digit]);
    }

    return result;

};