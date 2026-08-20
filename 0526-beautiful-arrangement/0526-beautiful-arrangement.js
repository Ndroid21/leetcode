/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    const result = [];

    const dfs = function (path) {
        if (path.length === n) {
            result.push([...path]);
            return;
        }

        for (let perm = 1; perm <= n; perm++) {
            if (!path.includes(perm) && isArrangementBeautiful(perm, path.length + 1)) {
                path.push(perm);
                dfs(path);
                path.pop();
            }
        }
    }

    dfs([]);
    // console.log(result);

    return result.length;
};

var isArrangementBeautiful = function (arrangement, i) {
    if (arrangement % i === 0 || i % arrangement === 0) {
        return true;
    }

    return false;
}