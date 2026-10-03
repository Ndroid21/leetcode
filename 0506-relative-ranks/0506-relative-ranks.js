/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const n = score.length;
    const map = new Map();
    const pq = new MaxPriorityQueue();

    for (let i = 0; i < n; i++) {
        pq.push(score[i]);
    }

    const topThree = {
        0: "Gold Medal",
        1: "Silver Medal",
        2: "Bronze Medal"
    }

    const pqSize = pq.size();
    for (let i = 0; i < pqSize; i++) {
        const item = pq.pop();
        const value = i < 3 ? topThree[i] : String(i + 1);
        map.set(item, value);
    };

    const ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(map.get(score[i]));
    }

    return ans;
};