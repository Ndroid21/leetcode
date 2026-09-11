/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    digits.sort((a, b) => a - b);

    const n = digits.length;
    const numbers = new Set();

    for (let i = 0; i < n; i++) {
        if (digits[i] === 0) continue;

        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            for (let k = 0; k < n; k++) {
                if (i === k || j === k) continue;

                if (digits[k] % 2 === 0) {
                    const num = digits[i] * 100 + digits[j] * 10 + digits[k];
                    numbers.add(num);
                }
            }
        }
    }

    return numbers.size;
};