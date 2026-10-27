/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
    const result = Array.from({ length: m }, () => Array(n).fill("#"));

    for (let j = 0; j < n; j++) {
        result[0][j] = ".";
    }

    for (let i = 0; i < m; i++) {
        result[i][n - 1] = ".";
    }

    return result.map(row => row.join(""));
};