/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const heap = new MyMinHeap();
    const map = new Map();
    const result = [];

    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    for (let [key, val] of map) {
        heap.push(new HeapItem(key, -val));
    }

    for (let i = 0; i < k; i++) {
        const t = heap.pop();

        result.push(t.item);
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

    isLess(itemA, itemB) {
        if (itemA.priority !== itemB.priority) {
            return itemA.priority < itemB.priority;
        }

        return itemA.item < itemB.item;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.size() - 1;

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.isLess(this.heap[idx], this.heap[parentIdx])) {
                [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
                idx = parentIdx;
            }
            else {
                break;
            }
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

            if (left < n && this.isLess(this.heap[left], this.heap[min])) {
                min = left;
            }

            if (right < n && this.isLess(this.heap[right], this.heap[min])) {
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