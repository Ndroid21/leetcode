/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    const freq = new Map();

    for (let i = 1; i <= 26; i++) {
        freq.set(String.fromCharCode(96 + i), 26 - i + 1);
    }

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        total += (freq.get(s[i]) * (i + 1))
    }

    return total;
};