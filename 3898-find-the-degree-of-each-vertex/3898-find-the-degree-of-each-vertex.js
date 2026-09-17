/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const adjList = new Map();

    for (let row = 0; row < m; row++) {
        adjList.set(row, []);
    }

    for (let row = 0; row < m; row++) {
        const list = adjList.get(row);
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 1) {
                list.push(col);
                adjList.set(row, list);
            }
        }
    }

    const result = new Array(adjList.size);
    for(let [key, val] of adjList) {
        result[key] = val.length;
    }

    return result;
};