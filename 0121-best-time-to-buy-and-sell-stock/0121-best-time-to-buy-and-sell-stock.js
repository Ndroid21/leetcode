/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minTillNow = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let currProfit = prices[i] - minTillNow;
        maxProfit = Math.max(maxProfit, currProfit);
        minTillNow = Math.min(minTillNow, prices[i]);
    }

    return maxProfit;
};