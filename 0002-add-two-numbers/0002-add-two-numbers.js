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
    let curr1 = l1, curr2 = l2, carry = 0;

    let newList = new MyLinkedList();

    while (curr1 && curr2) {
        let sum = curr1.val + curr2.val + carry;
        let rem = sum % 10;
        carry = Math.floor(sum / 10);

        newList.add(rem);
        curr1 = curr1.next;
        curr2 = curr2.next;
    }

    while (curr1) {
        let sum = curr1.val + carry;
        let rem = sum % 10;
        carry = Math.floor(sum / 10);

        newList.add(rem);
        curr1 = curr1.next;
    }

    while (curr2) {
        let sum = curr2.val + carry;
        let rem = sum % 10;
        carry = Math.floor(sum / 10);

        newList.add(rem);
        curr2 = curr2.next;
    }

    if (carry) {
        newList.add(carry);
    }

    return newList.getHead();
};

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(val) {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    getHead() {
        return this.head;
    }
}