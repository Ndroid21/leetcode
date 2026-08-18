/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const n = graph.length;
    const destination = n - 1;
    const ans = [];

    const dfs = function (source, path) {
        if (source === destination) {
            ans.push([...path]);
            return;
        }

        for (const neighbor of graph[source]) {
            path.push(neighbor);
            neighbor && dfs(neighbor, path);
            path.pop();
        }
    }

    dfs(0, [0]);

    return ans;
};