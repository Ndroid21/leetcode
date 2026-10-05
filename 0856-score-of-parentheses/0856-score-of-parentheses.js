/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    const stack = [0];

    for(let c of s) {
        if (c === '(') {
            stack.push(0);
        } else {
            const v = stack.pop();

            if(v === 0) {
                stack.push(stack.pop() + 1);
            } else {
                stack.push(stack.pop() + 2 * v);
            }
        }
    }

    return stack.pop();
};