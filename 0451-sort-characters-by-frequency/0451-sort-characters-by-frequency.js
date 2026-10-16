/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const heap = new MyMinHeap();
    const map = new Map();

    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    for (let [key, val] of map) {
        heap.push(new HeapItem(key, -val));
    }

    let str = ''
    const hs = heap.size();
    for (let i = 0; i < hs; i++) {
        const min = heap.pop();

        str += min.item.repeat(-min.priority);
    }

    return str;
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

            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
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