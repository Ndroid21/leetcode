/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    let ltrProd = rtlProd = 1;
    let mx = -Infinity;

    for (let i = 0; i < n; i++) {
        ltrProd = ltrProd * nums[i];
        rtlProd = rtlProd * nums[n - i - 1];
        mx = Math.max(mx, ltrProd, rtlProd);

        if (ltrProd === 0) ltrProd = 1;
        if (rtlProd === 0) rtlProd = 1;
    }

    return mx;
};