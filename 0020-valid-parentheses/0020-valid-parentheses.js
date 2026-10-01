/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            let top = stack[stack.length - 1];
            if (top !== brackets[s[i]]) return false;
            stack.pop();
        }
    }

    return stack.length > 0 ? false : true;
};