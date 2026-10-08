/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    const stack = [];
    const result = [];

    for (let c of s) {
        if (c === '(') {
            stack.push('(');
            if (stack.length > 1) result.push(c);
        } else {
            if (stack.length > 1) result.push(c);
            stack.pop();
        }
    }

    return result.join('');
};
