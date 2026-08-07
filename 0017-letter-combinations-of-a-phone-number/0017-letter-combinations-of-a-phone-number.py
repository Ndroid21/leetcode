class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digitToLetters = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        def dfs(index, path):
            if index == len(digits):
                result.append("".join(path))
                return
            
            letters = digitToLetters[digits[index]]

            for letter in letters:
                path.append(letter)
                dfs(index+1, path)
                path.pop()
        
        result = []
        dfs(0, [])

        return result