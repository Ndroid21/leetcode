/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(arr, k) {
    let nums = new Set();

    for(let i=0; i<arr.length; i++) {
        nums.add(arr[i]);
    }

    let i = 1;
    let missing = -1;

    while(true) {
        if(!nums.has(k * i)) {
            missing = k * i;
            break;
        }

        i++;
    }

    return missing;
};