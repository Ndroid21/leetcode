import math

pos_inf = math.inf
neg_inf = -math.inf


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        first_critical_point = -1
        last_critical_point = -1
        current_position = 0

        ans = [pos_inf, neg_inf]

        while head is not None and head.next is not None and head.next.next is not None:
            prev_val = head.val
            curr_val = head.next.val
            next_val = head.next.next.val

            is_local_minima = prev_val > curr_val and curr_val < next_val
            is_local_maxima = prev_val < curr_val and curr_val > next_val

            if is_local_minima or is_local_maxima:
                if last_critical_point == -1:
                    last_critical_point = current_position
                    first_critical_point = current_position
                else:
                    ans[0] = min(ans[0], current_position - last_critical_point)
                    last_critical_point = current_position
                    ans[1] = max(ans[1], last_critical_point - first_critical_point)

            head = head.next
            current_position += 1

        if first_critical_point == last_critical_point:
            return [-1, -1]
        else:
            return ans
