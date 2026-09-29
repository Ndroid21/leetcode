/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const heap = new MyMinHeap();
    nums.sort((a, b) => a - b);
    let i = 0;

    while (i < nums.length) {
        let key = nums[i];
        let count = 1;
        let j = i + 1;

        while (nums[j] === key) {
            count++;
            j++;
        }

        i = j;
        heap.push(new HeapItem(key, -count));
    }


    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(heap.pop());
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
        this.heap = []
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[parentIdx].priority > this.heap[idx].priority) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    pop() {
        const min = this.heap[0].item;
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.bubbleDown();

        return min;
    }
    bubbleDown() {
        let idx = 0;
        let min = 0;
        const n = this.heap.length;

        while (idx < n) {
            let left = 2 * idx + 1;
            let right = left + 1;

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

}