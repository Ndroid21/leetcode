/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const dp = {};
    const dfs = (rems) => {
        if (rems === '') return 1;

        if (rems in dp) return dp[rems];

        const n = rems.length;

        let ans = 0;
        let oneLength = rems.substring(n - 1);
        let twoLength = rems.substring(n - 2);

        if (oneLength > 0) {
            ans += dfs(rems.substring(0, n - 1));
        }

        if (twoLength >= 10 && twoLength <= 26) {
            ans += dfs(rems.substring(0, n - 2));
        }

        dp[rems] = ans;

        return ans;
    }

    return dfs(s);
};