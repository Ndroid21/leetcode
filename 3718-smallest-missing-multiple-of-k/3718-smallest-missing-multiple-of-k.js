/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(arr, k) {
    let nums = new Set(arr);

    let i = 1;
    let missing = -1;

    while(true) {
        missing = k * i;
        if(!nums.has(missing)) {
            break;
        }

        i++;
    }

    return missing;
};