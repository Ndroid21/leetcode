/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */

var lexGreaterPermutation = function (s, target) {

    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    const dfs = function (path, index) {

        if (index === s.length) {
            return "";
        }

        const targetChar = target[index];
        const targetCode = targetChar.charCodeAt(0) - 97;

        for (let i = 0; i < 26; i++) {

            if (freq[i] === 0) continue;

            if (i < targetCode) continue;

            freq[i]--;
            path.push(String.fromCharCode(i + 97));

            if (i > targetCode) {
                for (let j = 0; j < 26; j++) {
                    while (freq[j] > 0) {
                        path.push(String.fromCharCode(j + 97));
                        freq[j]--;
                    }
                }

                return path.join("");
            }

            const ans = dfs(path, index + 1);

            if (ans !== "") {
                return ans;
            }

            path.pop();
            freq[i]++;
        }

        return "";
    };

    return dfs([], 0);
};