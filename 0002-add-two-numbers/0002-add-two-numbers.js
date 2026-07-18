/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let l3 = new ListNode();
    let ans = l3;

    while(l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        let digit = sum % 10;
        carry = Math.floor(sum/10);

        let newNode = new ListNode(digit);
        l3.next = newNode;
        l3 = l3.next;
        l2 = l2 && l2.next;
        l1 = l1 && l1.next;
    }

    return ans.next;
};