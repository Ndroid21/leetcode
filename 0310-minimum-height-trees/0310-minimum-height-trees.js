/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0];

    const graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    const degree = new Array(n).fill(0);
    for (const [from, to] of edges) {
        graph.get(from).push(to);
        degree[from]++;

        graph.get(to).push(from);
        degree[to]++;
    }

    console.log(graph);
    console.log(degree);

    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            leaves.push(i);
        }
    }

    let remainingNodes = n;

    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves = [];

        for (let leaf of leaves) {
            for (let neighbor of graph.get(leaf)) {
                degree[neighbor]--;

                if (degree[neighbor] === 1) {
                    newLeaves.push(neighbor);
                }
            }
        }

        leaves = newLeaves;
    }

    return leaves;
};