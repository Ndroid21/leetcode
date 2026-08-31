/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let firstCriticalPoint = -1;
    let lastCriticalPoint = -1;
    let currPos = 0;

    let min = Infinity, max = -Infinity;
    let ans = [min, max];

    while (head && head.next && head.next.next) {
        const prev = head.val;
        const curr = head.next.val;
        const next = head.next.next.val;

        const isLocalMinima = prev > curr && curr < next;
        const isLocalMaxima = prev < curr && curr > next;

        if (isLocalMinima || isLocalMaxima) {
            if (lastCriticalPoint < 0) {
                firstCriticalPoint = currPos;
                lastCriticalPoint = currPos;
            } else {
                ans[0] = Math.min(ans[0], currPos - lastCriticalPoint);
                lastCriticalPoint = currPos;
                ans[1] = Math.max(ans[1], lastCriticalPoint - firstCriticalPoint);
            }
        }


        head = head.next;
        currPos++;
    }

    return firstCriticalPoint === lastCriticalPoint ? [-1, -1] : ans;
};