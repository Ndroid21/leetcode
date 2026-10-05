/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let total = 0;
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            depth++;
        } else {
            depth--;
            if (s[i - 1] === '(') {
                total += 1 << depth;
            }
        }
    }

    return total;
};