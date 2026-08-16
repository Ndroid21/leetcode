/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const generateAdjList = function (map) {
        for (const [x, y] of edges) {
            if (!map[x]) {
                map[x] = [];
            }
            if (!map[y]) {
                map[y] = []
            }

            map[x].push(y);
            map[y].push(x);
        }
    }

    const getNeighbors = function (node) {
        return adjList[node];
    }

    const bfs = function (root, target) {
        const q = [root];
        const visited = new Set();
        visited.add(root);

        while (q.length > 0) {
            const n = q.length;

            for (let i = 0; i < n; i++) {
                const curr = q.shift();

                if (curr === target) return true;

                for (const neighbor of getNeighbors(curr)) {
                    if (visited.has(neighbor)) continue;

                    q.push(neighbor);
                    visited.add(neighbor);
                }

            }
        }

        return false;
    }

    const adjList = new Map();
    generateAdjList(adjList);

    return bfs(source, destination);
};