/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    const stack = [];

    let count = 0;
    for (let c of s) {
        if (c === '(') {
            stack.push('(');
        } else {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                count++;
            }
        }
    }

    count += stack.length;

    return count;
};