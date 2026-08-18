/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};

    for (const [from, to] of tickets) {
        if(!graph[from]) graph[from] = [];

        graph[from].push(to);
    }

    for (let node in graph) {
        graph[node].sort();
    }

    const dfs = function(curr) {
        const neighbors = graph[curr] || [];

        while(neighbors.length > 0) {
            const node = neighbors.shift();
            dfs(node);
        }
        
        path.push(curr);
    }

    const path = [];
    dfs('JFK');

    return path.reverse();
};