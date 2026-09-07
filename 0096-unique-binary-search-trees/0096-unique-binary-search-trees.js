/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n === 0 || n === 1) return 1;

    let catalan = 1;
    for (let i = 1; i <= n; i++) {
        catalan = (catalan * (4 * i - 2)) / (i + 1);
    }
    
    return catalan;
};