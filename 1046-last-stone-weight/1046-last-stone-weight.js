/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const pq = new MaxPriorityQueue();

    for (let i = 0; i < stones.length; i++) {
        pq.enqueue(stones[i]);
    }

    while (pq.size() > 1) {
        let x = pq.dequeue();
        let y = pq.dequeue();

        if (x - y > 0) {
            pq.enqueue(x - y);
        }
    }

    return pq.size() > 0 ? pq.front() : 0
};