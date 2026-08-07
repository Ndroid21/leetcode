/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const dfs = function (start, path) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const currSubstr = s.substring(start, end);
            if (isPalindrome(currSubstr)) {
                path.push(currSubstr);
                dfs(end, path);
                path.pop();
            }
        }
    }

    const result = [];
    dfs(0, []);

    return result;
};

const isPalindrome = function (s) {
    let i = 0, j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }

    return true;
}