/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    const heap = new MyMinHeap();
    const result = [];
    const n = nums1.length;
    const m = nums2.length;

    for (let i = 0; i < n; i++) {
        heap.push(new HeapItem([i, 0], nums1[i] + nums2[0]));
    }

    for (let i = 0; i < k; i++) {
        let [x, y] = heap.pop().item;
        result.push([nums1[x], nums2[y]]);

        if ((y + 1) < m) {
            heap.push(new HeapItem([x, y + 1], nums1[x] + nums2[y + 1]));
        }
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

            if (this.heap[parentIdx].priority < this.heap[idx].priority) break;

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

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}