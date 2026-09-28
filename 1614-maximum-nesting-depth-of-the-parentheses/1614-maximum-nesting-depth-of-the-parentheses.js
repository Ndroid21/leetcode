/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let currDepth = 0, maxDepth = 0;

    for (let c of s) {
        if (c === '(') {
            currDepth++;
            maxDepth = Math.max(maxDepth, currDepth);
        } else if (c === ')')  {
            currDepth--;
        }
    }

    return maxDepth;
};