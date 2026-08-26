/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    let ans = "";
    let left = 0;
    let ones = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === '1') {
            ones++;
        }

        while (ones === k) {
            while (s[left] === '0') {
                left++;
            }

            let window = s.slice(left, right + 1);
            if (
                ans === "" ||
                window.length < ans.length ||
                (window.length === ans.length && window < ans)
            ) {
                ans = window;
            }

            ones--;
            left++;
        }

    }

    return ans;
};