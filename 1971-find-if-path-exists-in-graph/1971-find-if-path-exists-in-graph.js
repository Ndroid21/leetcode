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

    const dfs = function(curr) {
        if(curr === destination) return true;
        visited.add(curr);

        for(let neighbor of adjList[curr]) {
            if(visited.has(neighbor)) continue;

            if(dfs(neighbor)) return true;
        }

        return false;
    }

    const visited = new Set();
    const adjList = new Map();
    generateAdjList(adjList);

    return dfs(source);
};