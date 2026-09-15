/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n === 1 && trust.length === 0) return 1;

    const outdegree = new Map();
    const indegree = new Map();

    for (let i = 0; i < trust.length; i++) {
        let pair = trust[i];

        outdegree.set(pair[0], (outdegree.get(pair[0]) ?? 0) + 1);
        if (!outdegree.has(pair[1])) {
            outdegree.set(pair[1], 0);
        }
        indegree.set(pair[1], (indegree.get(pair[1]) ?? 0) + 1);
    }

    for (let [key, value] of outdegree) {
        if (value === 0 && indegree.get(key) === n - 1) {
            return key;
        }
    }

    return -1;
};
