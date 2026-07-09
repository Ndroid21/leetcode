/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length === 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);

    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right);
};

var merge = function (arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[k] = arr1[i];
            i++;
        } else {
            result[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < arr1.length) {
        result[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2.length) {
        result[k] = arr2[j];
        j++;
        k++;
    }

    return result;
}