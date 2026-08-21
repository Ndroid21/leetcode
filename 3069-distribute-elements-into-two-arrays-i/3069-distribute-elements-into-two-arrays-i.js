/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    const arr1 = [];
    arr1.push(nums[0]);
    const arr2 = [];
    arr2.push(nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let arr1Last = arr1[arr1.length - 1];
        let arr2Last = arr2[arr2.length - 1];
        if (arr1Last > arr2Last) {
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }

    return [...arr1, ...arr2];
};