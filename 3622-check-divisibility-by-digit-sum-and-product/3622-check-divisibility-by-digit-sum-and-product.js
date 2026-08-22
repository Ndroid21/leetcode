/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let sum = 0;
    let product = 1;
    let nclone = n;

    while (nclone > 0) {
        sum += Math.floor(nclone % 10);
        product *= Math.floor(nclone % 10);
        nclone = Math.floor(nclone / 10);
    }

    return (n % (sum + product)) === 0;
};