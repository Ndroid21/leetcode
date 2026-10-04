/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const pq = new MaxPriorityQueue();
    const rank = new Map();

    const medals = [
        "Gold Medal",
        "Silver Medal",
        "Bronze Medal"
    ];

    for (const s of score) {
        pq.push(s);
    }

    for (let i = 0; i < score.length; i++) {
        const s = pq.pop();

        rank.set(
            s,
            i < 3 ? medals[i] : String(i + 1)
        );
    }

    return score.map(s => rank.get(s));
};