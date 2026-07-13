/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curr1 = headA, curr2 = headB;

    while (curr1 !== curr2) {
        curr1 = curr1 === null ? headB : curr1.next;
        curr2 = curr2 === null ? headA : curr2.next;
    }

    return curr1 === curr2 ? curr1 : null;
};