/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let balance = 0;
    let result = [];

    for (let ch of s) {
        if (ch === '(') {
            if (balance > 0) result.push(ch);
            balance++;
        } else {
            balance--;
            if (balance > 0) result.push(ch);
        }
    }

    return result.join('');
};
