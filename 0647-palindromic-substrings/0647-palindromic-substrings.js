/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(null));
    let ans = 0;

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        ++ans;
        if (i < n - 1 && s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            ++ans;
        }
    }

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                ++ans;
            }
        }
    }

    return ans;
};