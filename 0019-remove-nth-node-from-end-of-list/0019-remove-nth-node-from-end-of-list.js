/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return head;

    const dummy = new ListNode();
    dummy.next = head;
    let fast = head, slow = dummy;

    for(let i=1; i<n; i++) {
        fast = fast.next;
    }

    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }


    slow.next = slow.next.next;

    return dummy.next;
};