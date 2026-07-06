/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let singleNum;

    for (let i = 0; i < nums.length; i++) {
        singleNum ^= nums[i];
    }

    return singleNum;
};