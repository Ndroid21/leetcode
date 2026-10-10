/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    const n = gifts.length;
    const heap = new MaxPriorityQueue();

    for (let i = 0; i < n; i++) {
        heap.push(gifts[i]);
    }

    for (let i = 0; i < k; i++) {
        const max = heap.pop();

        const newVal = Math.floor(Math.sqrt(max));

        if (newVal > 0) {
            heap.push(newVal);
        }
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += heap.pop();
    }

    return sum;
};