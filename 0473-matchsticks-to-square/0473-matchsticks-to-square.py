class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        total = sum(matchsticks)
        maxLength = max(matchsticks)

        # remainder = total % 4
        # targetMaxStick = total // 4

        targetMaxStick, remainder = divmod(total, 4)

        if remainder != 0 or targetMaxStick < maxLength:
            return False

        matchsticks.sort(reverse=True)

        sticks = [0] * 4

        def dfs(index, sticks):
            if index == len(matchsticks):
                return True

            for i in range(4):
                if i > 0 and sticks[i] == sticks[i - 1]:
                    continue

                sticks[i] += matchsticks[index]

                if sticks[i] <= targetMaxStick and dfs(index + 1, sticks):
                    return True

                sticks[i] -= matchsticks[index]

            return False

        return dfs(0, sticks)
