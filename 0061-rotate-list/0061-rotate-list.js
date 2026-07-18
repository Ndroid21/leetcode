/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    let curr = head, len = 0;
    while (curr) {
        curr = curr.next;
        len++;
    }

    k = k % len;
    let fast = head, slow = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head;
    let newList = slow.next;
    slow.next = null;


    return newList;
};