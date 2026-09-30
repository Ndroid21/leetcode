/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const heap = new MinPriorityQueue(x => x.val);

    for (let i = 0; i < matrix.length; i++) {
        heap.push({
            val: matrix[i][0],
            row: i,
            col: 0
        });
    }

    for (let i = 0; i < k - 1; i++) {
        let { row, col, val } = heap.pop();

        if (col < matrix[row].length - 1) {
            heap.push({
                val: matrix[row][col + 1],
                row,
                col: col + 1
            })
        }
    }

    return heap.pop().val;
};