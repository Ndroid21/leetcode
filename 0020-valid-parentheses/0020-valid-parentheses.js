/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // If closing bracket
        if (char in map) {
            // Stack empty OR top doesn't match
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // Opening bracket
            stack.push(char);
        }
    }

    // Stack should be empty if valid
    return stack.length === 0;
}
