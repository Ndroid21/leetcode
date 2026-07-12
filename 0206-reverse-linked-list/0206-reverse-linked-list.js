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
var reverseList = function(head) {
    if(!head) return head;
    
    let prev = null, curr = head, next = head.next;

    while(curr) {
        curr.next = prev;
        prev = curr;
        curr = next;
        if (next) next = next.next;
    }

    return prev;

};