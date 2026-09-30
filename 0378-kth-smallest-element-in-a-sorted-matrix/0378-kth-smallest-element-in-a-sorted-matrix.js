/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const n = matrix.length;
    const maxHeap = new MaxPriorityQueue();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            maxHeap.push(matrix[i][j]);

            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
    }

    return maxHeap.front()
};