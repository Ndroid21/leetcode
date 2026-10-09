/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    const n = s.length;
    let openCount = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            openCount++;
        } else {
            if (i < n - 1 && s[i + 1] === ')') {
                i++;
            } else {
                result++;
            }

            if (openCount === 0) {
                result++;
            } else {
                openCount--;
            }

        }
    }

    result += openCount * 2;

    return result;
};