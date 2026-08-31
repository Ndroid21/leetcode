/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    const dfs = function (length) {
        if (length == n) {
            return 0;
        }

        let count = 0;

        for (let digit = 0; digit < 10; digit++) {
            if (length === 0 && digit === 0) continue;
            if (used[digit]) continue;

            used[digit] = true;
            count += 1;
            count += dfs(length + 1);
            used[digit] = false;
        }

        return count;
    }

    const used = new Array(10).fill(false);
    return 1 + dfs(0);
};