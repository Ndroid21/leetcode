/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
    const squares = nums.map(a => a ** 2);
    squares.sort((a, b) => b - a);

    const k = Math.ceil(nums.length / 2);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            sum += squares[i];
        } else {
            sum -= squares[i];
        }
    }

    return sum;
};