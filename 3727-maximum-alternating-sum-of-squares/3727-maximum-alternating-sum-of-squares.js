/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
    const minHeap = new MinPriorityQueue();
    const maxHeap = new MaxPriorityQueue();
    const n = nums.length;
    const k = n % 2 === 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        minHeap.push(nums[i] ** 2);

        if (minHeap.size() > k) {
            const out = minHeap.pop();
            maxHeap.push(out);
        }
    }

    for (let i = 0; i < k; i++) {
        sum += minHeap.pop();
    }

    for (let i = 0; i < n - k; i++) {
        sum -= maxHeap.pop();
    }

    return sum;
};