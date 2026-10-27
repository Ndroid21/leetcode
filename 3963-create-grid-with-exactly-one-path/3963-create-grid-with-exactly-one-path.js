/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
    const result = Array.from({ length: m }, () => Array(n).fill("#"));
    let i = 0, j = 0;

    while (i < m) {
        result[i][j] = ".";

        if (j + 1 < n) {
            j += 1
            result[i][j] = ".";
        }

        if (i + 1 < m || j + 1 === n) {
            i += 1;
        }
    }

    for (let i = 0; i < m; i++) {
        result[i] = result[i].join("")
    }

    return result;
};