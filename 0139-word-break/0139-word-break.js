/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = {};
    const fn = (remS) => {
        if (remS === '') return true;

        if (remS in dp) return dp[remS];

        let ans = false;
        for (let i = 0; i < remS.length; i++) {
            let substr = remS.substring(0, i + 1);
            if (wordDict.includes(substr) && fn(remS.substring(i + 1))) ans = true;
        }

        return dp[remS] = ans;
    }

    return fn(s);
};