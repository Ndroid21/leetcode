/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const digitToLetters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    const dfs = function (index, path) {
        if (index === digits.length) {
            result.push(path.join(""));
            return;
        }

        const letters = digitToLetters[digits[index]];

        for (const letter of letters) {
            path.push(letter);
            dfs(index + 1, path);
            path.pop();
        }
    }

    const result = [];
    dfs(0, []);

    return result;
};