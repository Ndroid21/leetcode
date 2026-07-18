# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        curr = head
        length = 0

        while curr:
            curr = curr.next
            length += 1
        
        k = k % length
        slow = head
        fast = head
        for i in range(k):
            fast = fast.next

        while fast.next:
            slow = slow.next
            fast = fast.next

        fast.next = head
        newHead = slow.next
        slow.next = None

        return newHead