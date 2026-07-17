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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let odd = head, even = head.next;
    let evenHead = even;

    while((odd && odd.next) && (even && even.next)) {
        odd.next = odd.next.next;
        even.next = even.next.next;

        if(odd.next)
            odd = odd.next;
        even = even.next;
    }

    while(odd && odd.next) {
        odd.next = odd.next.next;
        if(odd.next)
            odd = odd.next;
    }

    while(even && even.next) {
        even.next = even.next.next;
        even = even.next;
    }

    if(odd)
        odd.next = evenHead;

    return head;
};