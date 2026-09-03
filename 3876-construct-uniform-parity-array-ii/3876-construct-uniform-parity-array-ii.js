/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
    let min = Infinity;

    for (let num of nums1) {
        if (num % 2 !== 0) {
            min = Math.min(min, num);
        }
    }

    for (let num of nums1) {
        if (num % 2 === 0 && min !== Infinity && min > num) {
            return false;
        }
    }

    return true;
};