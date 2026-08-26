/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    let ans = "";
    let left = 0;
    let window = s.slice(left, k);

    for (let right = k; right < s.length + 1; right++) {
        while (isValid(window, k)) {
            if (
                ans === "" ||
                window.length < ans.length ||
                (window.length === ans.length && window < ans)
            ) {
                ans = window;
            }
            left++;
            window = s.slice(left, right);
        }

        window = s.slice(left, right + 1);
    }

    return ans;
};

var isValid = function (s, k) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count++;
        }
    }

    return count === k;
}