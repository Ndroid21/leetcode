class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        result = []

        for i in range(len(words)):
            for j in range(len(words[i])):
                if words[i][j] == x:
                    result.append(i)
                    break
        return result
