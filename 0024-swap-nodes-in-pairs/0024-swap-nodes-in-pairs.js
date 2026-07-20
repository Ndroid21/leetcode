/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head) return head;

    const dummy = new ListNode();
    let prev = dummy;
    prev.next = head;

    let curr = head;

    while (curr) {
        let next = curr.next;

        if (next) {
            curr.next = next.next;
            next.next = curr;
            prev.next = next;
        }

        prev = curr;
        curr = curr.next;
    }

    return dummy.next;
};