# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        dummy = ListNode()
        prev = dummy

        prev.next = head
        curr = head

        while curr:
            next = curr.next

            if next:
                curr.next = next.next
                next.next = curr
                prev.next = next
            
            prev = curr
            curr = curr.next
        return dummy.next