/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    let count = 0;

    while (i >= 0) {
        if (s[i] === " ") {
            if (count === 0) {
                i--;
                continue;
            } else {
                break;
            }
        } else {
            i--;
            count++;
        }
    }

    return count;
};