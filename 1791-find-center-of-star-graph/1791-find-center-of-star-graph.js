/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let outdegree = new Map();
    let ans;

    for (let [from, to] of edges) {
        outdegree.set(from, (outdegree.get(from) ?? 0) + 1);
        outdegree.set(to, (outdegree.get(to) ?? 0) + 1);
    }

    for (let [key, value] of outdegree) {
        if (value === outdegree.size - 1) {
            ans = key;
            break;
        }
    }

    return ans;
};