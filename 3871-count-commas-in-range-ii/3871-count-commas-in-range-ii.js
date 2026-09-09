/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    let count = 0;
    let x = 1000;

    while (x <= n) {
        count += n - x + 1;
        x *= 1000;
    }

    return count;
};