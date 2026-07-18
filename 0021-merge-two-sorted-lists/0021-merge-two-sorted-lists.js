/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let l3 = new ListNode();
    let ans = l3;

    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                l3.next = new ListNode(l1.val);
                l3 = l3.next;
                l1 = l1.next;
            } else {
                l3.next = new ListNode(l2.val);
                l3 = l3.next;
                l2 = l2.next;
            }
        } else if (l1) {
            l3.next = new ListNode(l1.val);
            l3 = l3.next;
            l1 = l1.next;
        } else {
            l3.next = new ListNode(l2.val);
            l3 = l3.next;
            l2 = l2.next;
        }
    }

    return ans.next;
};