class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        outdegree = {}

        for frm, to in edges:
            outdegree[frm] = outdegree.get(frm, 0) + 1
            outdegree[to] = outdegree.get(to, 0) + 1

        for key, val in outdegree.items():
            if val == len(outdegree) - 1:
                return key