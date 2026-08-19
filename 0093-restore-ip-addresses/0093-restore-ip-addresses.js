/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const dfs = function (start, path) {
        if (start === s.length && path.length === 4) {
            result.push(path.join("."));
            return;
        }

        for (let end = start; end < start + 3 && start < s.length; end++) {
            let digits = s.substring(start, end + 1);
            if (isValid(digits)) {
                path.push(digits);
                dfs(end + 1, path);
                path.pop();
            }
        }
    }

    const result = [];
    dfs(0, []);

    return result;
};

var isValid = function (s) {
    if (s.length > 1 && s[0] === '0') {
        return false;
    }

    if (Number(s) < 0 || 255 < Number(s)) {
        return false;
    }

    return true;
}