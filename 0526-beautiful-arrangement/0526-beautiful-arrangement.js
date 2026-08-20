/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    let count = 0;
    const visited = Array(n + 1).fill(false);

    const dfs = function (index) {
        if (index === n + 1) {
            count++;
            return;
        }

        for (let perm = 1; perm <= n; perm++) {
            if (!visited[perm] && isArrangementBeautiful(perm, index)) {
                visited[perm] = true;
                dfs(index + 1);
                visited[perm] = false;
            }
        }
    }

    dfs(1);

    return count;
};

var isArrangementBeautiful = function (arrangement, i) {
    if (arrangement % i === 0 || i % arrangement === 0) {
        return true;
    }

    return false;
}