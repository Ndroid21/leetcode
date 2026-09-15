class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if n == 1 and len(trust) == 0:
            return 1

        indegree = {}
        outdegree = {}

        for i in range(len(trust)):
            pair = trust[i]

            outdegree[pair[0]] = outdegree.get(pair[0], 0) + 1
            if pair[1] not in outdegree:
                outdegree[pair[1]] = 0
            indegree[pair[1]] = indegree.get(pair[1], 0) + 1

        for key, value in outdegree.items():
            if value == 0 and indegree.get(key, 0) == n - 1:
                return key

        return -1
