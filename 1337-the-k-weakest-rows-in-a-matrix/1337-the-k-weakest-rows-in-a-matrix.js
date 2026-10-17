/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    const m = mat.length;
    const n = mat[0].length;
    const heap = new MyMinHeap();

    for (let i = 0; i < m; i++) {
        let soldiers = 0;

        for (let j = 0; j < n; j++) {
            soldiers += mat[i][j];
        }

        heap.push(new HeapItem(i, soldiers * m + i));
    }

    const result = [];

    for (let i = 0; i < k; i++) {
        let { item } = heap.pop();
        result.push(item);
    }

    return result;
};

class HeapItem {
    constructor(item, priority = item) {
        this.item = item;
        this.priority = priority;
    }
}

class MyMinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.size() - 1;

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[idx].priority > this.heap[parentIdx].priority) break;

            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    pop() {
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.bubbleDown();

        return min;
    }

    bubbleDown() {
        let idx = 0;
        let min = 0;
        const n = this.size();

        while (idx < n) {
            const left = 2 * idx + 1;
            const right = left + 1;

            if (left < n && this.heap[left].priority < this.heap[min].priority) {
                min = left;
            }

            if (right < n && this.heap[right].priority < this.heap[min].priority) {
                min = right;
            }

            if (idx === min) break;

            [this.heap[idx], this.heap[min]] = [this.heap[min], this.heap[idx]];
            idx = min;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}