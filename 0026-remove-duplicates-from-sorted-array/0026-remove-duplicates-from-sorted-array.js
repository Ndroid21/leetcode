/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let write = 0, read = 1;

    while(read < nums.length) {
        if(nums[read] > nums[write]) {
            nums[++write] = nums[read];
        }

        read++;
    }

    return write + 1;
};