# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        curr1 = headA
        curr2 = headB

        while curr1 != curr2:
            curr1 = headB if curr1 == None else curr1.next
            curr2 = headA if curr2 == None else curr2.next

        return curr1 if curr1 == curr2 else None